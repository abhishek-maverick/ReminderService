const { request } = require("express");
const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return request.statusCode(201).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully registered as email reminder",
    });
  } catch (error) {
    return request.statusCode(500).json({
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
