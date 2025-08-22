"use server";

import nodemailer from "nodemailer";

if (typeof window !== 'undefined') {
  console.warn("Nodemailer cannot run in the browser. Please call these functions from server-side code.")
}

export async function sendEmail(email: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,  // Your authenticated email
    replyTo: email,                // User's email for replies
    to: process.env.EMAIL_USER,
    subject: 'Appointment Request',
    html: `
      Appointment request from: ${email}
      
      Appointment has been requested!
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: 'Failed to send appointment email' }
  }
}