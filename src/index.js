const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
// const { sendBasicEmail } = require("./services/email-service");
const cron = require("node-cron");
const app = express();

const setUpAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Reminder Service server started at port ${PORT}`);

    // sendBasicEmail(
    //   `Support <support@admin.com>`,
    //   "marote1450@wwgoc.com",
    //   "Greetings, from flight booking service",
    //   "hey, how are you ? I hope you like the support"
    // );
    cron.schedule("*/2 * * * *", () => {
      console.log("running a task every two minutes");
    });

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setUpAndStartServer();
