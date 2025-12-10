import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL as string,
    pass: process.env.NODEMAILER_PASSWORD as string,
  },
});

interface EmailData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const sendMessageEmail = async ({
  fullName,
  email,
  subject,
  message,
}: EmailData) => {
  const mailOptions = {
    from: `"Spartan Traders" <spartan-traders@gmail.com>`,
    to: "sujalpatel@gmail.com",
    subject: subject,
    text: "Message from a client",
    html: `
    <h1 style="margin: 0 0 30px 0; font-size: 24px; font-weight: 600; color: #FDD458; line-height: 1.2;">Message from a client</h1>
    <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Name: ${fullName}</p>
    <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Email: ${email}</p>
    <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Subject: ${subject}</p>
    <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Message: ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
