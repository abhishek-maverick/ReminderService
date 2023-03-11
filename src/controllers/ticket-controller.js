const { ConnectionAcquireTimeoutError } = require("sequelize");
const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    console.log("inside controller");
    console.log(req.body);
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully registered as email reminder",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Unable to register as email reminder",
    });
  }
};

module.exports = {
  create,
};
