const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmails = async (timeStamp) => {
  try {
    const response = await repo.getAll();
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createNotification = async (data) => {
  try {
    console.log("data is");
    console.log(data);
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { sendBasicEmail, fetchPendingEmails, createNotification };
