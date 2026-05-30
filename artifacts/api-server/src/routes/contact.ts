import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const contactRouter = Router();

function createTransport() {
  const host = process.env["SMTP_HOST"];
  const port = Number(process.env["SMTP_PORT"] || "587");
  const user = process.env["SMTP_USER"];
  const pass = process.env["SMTP_PASS"];

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

contactRouter.post("/contact", async (req, res) => {
  const { name, email, phone, school, message, subject } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    school?: string;
    message?: string;
    subject?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "name, email, and message are required" });
    return;
  }

  const to = "schoolfoundry@jiggabyte.co.zm";
  const emailSubject = subject || `New contact from ${name}${school ? ` (${school})` : ""}`;
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
      <h2 style="color: #f97316; margin-top: 0;">New Message — SchoolFoundry</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 120px; font-weight: bold;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
        ${school ? `<tr><td style="padding: 8px 0; color: #666; font-weight: bold;">School</td><td style="padding: 8px 0;">${school}</td></tr>` : ""}
      </table>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <h3 style="color: #111; margin-top: 0;">Message</h3>
      <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="color: #999; font-size: 12px;">Sent via SchoolFoundry website contact form</p>
    </div>
  `;

  const transport = createTransport();

  if (!transport) {
    logger.warn(
      { name, email, school },
      "SMTP not configured — logging contact submission to console"
    );
    logger.info({ name, email, phone, school, message, subject: emailSubject }, "Contact form submission");
    res.status(200).json({ ok: true, note: "logged" });
    return;
  }

  try {
    await transport.sendMail({
      from: `"SchoolFoundry Website" <${process.env["SMTP_USER"]}>`,
      to,
      replyTo: email,
      subject: emailSubject,
      html,
    });
    logger.info({ to, from: email, name }, "Contact email sent successfully");
    res.status(200).json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default contactRouter;
