const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

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
    const repo = new TicketRepository();
    const response = await repo.getAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendBasicEmail, fetchPendingEmails };
