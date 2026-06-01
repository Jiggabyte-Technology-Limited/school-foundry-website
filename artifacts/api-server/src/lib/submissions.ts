import nodemailer from "nodemailer";
import { logger } from "./logger";

export type SubmissionField = {
  label: string;
  value: string;
};

export type DeliveryInput = {
  to?: string;
  replyTo?: string;
  subject: string;
  heading: string;
  fields: SubmissionField[];
  message?: string;
  source: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

export async function deliverSubmissionEmail(input: DeliveryInput) {
  const transport = createTransport();
  const recipient = input.to || "schoolfoundry@jiggabyte.co.zm";

  const rows = input.fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding: 8px 0; color: #666; width: 140px; font-weight: bold;">${escapeHtml(label)}</td>
          <td style="padding: 8px 0; color: #111;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  const messageBlock = input.message
    ? `
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <h3 style="color: #111; margin-top: 0;">Message</h3>
      <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    `
    : "";

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
      <h2 style="color: #f97316; margin-top: 0;">${escapeHtml(input.heading)}</h2>
      <table style="width: 100%; border-collapse: collapse;">${rows}</table>
      ${messageBlock}
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="color: #999; font-size: 12px;">Sent via SchoolFoundry website ${escapeHtml(input.source)} form</p>
    </div>
  `;

  if (!transport) {
    logger.warn(
      { source: input.source, recipient, fieldCount: input.fields.length },
      "SMTP not configured - logging submission to console",
    );
    logger.info(
      { source: input.source, recipient, fieldCount: input.fields.length },
      "Form submission",
    );
    return { ok: true, note: "logged" as const };
  }

  try {
    await transport.sendMail({
      from: `"SchoolFoundry Website" <${process.env["SMTP_USER"]}>`,
      to: recipient,
      replyTo: input.replyTo,
      subject: input.subject,
      html,
    });

    logger.info(
      { to: recipient, source: input.source, fieldCount: input.fields.length },
      "Form email sent successfully",
    );

    return { ok: true as const };
  } catch (err) {
    logger.error({ err, source: input.source }, "Failed to send form email");
    throw new Error("Failed to send message. Please try again.");
  }
}
