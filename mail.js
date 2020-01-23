const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "901a4b2f4ad9bbfa9bd19af216593a3c-09001d55-7bab356d",
    domain: "sandbox576477f8d59e49f2a9c8e122df922b4b.mailgun.org"
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "amitacharya975@gmail.com",
    subject,
    text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
