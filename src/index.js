const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index");

const { PORT } = require("./config/serverConfig");
const TicketController = require("./controllers/ticket-controller");
const jobs = require("./utils/jobs");
// const { sendBasicEmail } = require("./services/email-service");
const cron = require("node-cron");
const app = express();

const setUpAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`Reminder Service server started at port ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   `Support <support@admin.com>`,
    //   "marote1450@wwgoc.com",
    //   "Greetings, from flight booking service",
    //   "hey, how are you ? I hope you like the support"
    // )

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setUpAndStartServer();
