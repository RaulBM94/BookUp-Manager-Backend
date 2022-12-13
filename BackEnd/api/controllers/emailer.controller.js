const nodemailer = require("nodemailer");

async function sendemail(req, res) {

  let email = req.body.email

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'bookupmanager@gmail.com', // generated ethereal user
      pass: 'vtptkfsyjqqpiipw', // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"BookUpManager" <bookupmanager@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Nueva funcionalidad de BookUpManager ✔", // Subject line
    text: "TEXT: BookUpManager se congratula de anunciar que la funcionalidad de envío de mensajes ya está operativa  👏👏👏", // plain text body
    html: "<b>HTML: BookUpManager se congratula de anunciar que la funcionalidad de envío de mensajes ya está operativa  👏👏👏</b>", // html body
  });

  console.log('Email sent')
  res.json('received')

}

module.exports = {
  sendemail
};