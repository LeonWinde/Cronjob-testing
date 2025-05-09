"use server";
import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
// const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST || "smtp.gmail.com",
  port: 465,
  secure: true, // In Germany, port 587 with secure set to false is commonly used for STARTTLS
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 10000,
  socketTimeout: 10000,
});

export async function sendMail({
  email,
  sendTo = "leon.winde@gmx.de",
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  console.log("ENV:", SMTP_SERVER_HOST, SMTP_SERVER_USERNAME);
  try {
    // const isVerified =
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: sendTo, //|| SITE_MAIL_RECIEVER
    subject: subject,
    text: text,
    html: html ? html : "",
  });
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", sendTo);
  return info;
}
