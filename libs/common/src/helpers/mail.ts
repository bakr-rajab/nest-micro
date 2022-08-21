import * as nodemailer from 'nodemailer';
export async function mail({from, to, html, subject}) {
  try {
    let transporter = nodemailer.createTransport({
      host: 'mail.satatechnologygroup.com',
      port: 465,
      secure: true,
      ssl:true,
      auth: {
        user: process.env.MAIL_SENDER_EMAIL_ADDRESS,
        pass: process.env.MAIL_SENDER_EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      html: html,
    });

  } catch (err) {
    console.log(err)
  }
}

