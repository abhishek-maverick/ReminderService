const cron = require("node-cron");
const emailService = require("../services/email-service");

/**
 *
 * 10: 00 am
 * Every 5 min
 * are their any pending email, which was expected to be sent by now and is pending
 *
 */

const setUpJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      emailService.sendBasicEmail(
        "ReminderService@airline.com",
        email.recepientEmail,
        email.subject,
        email.content
      );
    });
    console.log(response);
  });
};

module.exports = setUpJobs;
