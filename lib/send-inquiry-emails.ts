import { SEWO_NOTIFICATION_EMAIL } from "@/lib/contact";
import type { BookingPayload } from "@/lib/booking-schema";
import {
  formatTrainingPackageLabel,
  getTrainingPackage,
} from "@/lib/training-packages";
import { Resend } from "resend";
import type { EmailSendResult } from "@/lib/send-schedule-emails";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;width:180px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`;
}

export async function sendInquiryEmails(
  data: BookingPayload,
): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM?.trim();

  if (!apiKey || !from) {
    return { ok: true, emailed: false, reason: "missing_env" };
  }

  const resend = new Resend(apiKey);
  const pkg = getTrainingPackage(data.packageId);
  const packageLine = pkg
    ? `${formatTrainingPackageLabel(pkg)} — ${pkg.cadence}`
    : undefined;

  const sewoHtml = `
  <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111;">
    <h2 style="margin:0 0 12px;">New training inquiry</h2>
    <p style="margin:0 0 16px;color:#374151;">Reply directly to this email to reach <strong>${escapeHtml(data.email)}</strong>.</p>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">
      ${row("Parent / guardian", data.parentName)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
      ${row("Athlete", data.athleteName)}
      ${row("Age", data.athleteAge)}
      ${row("Sport", data.sport)}
      ${row("Training interest", data.trainingInterest)}
      ${row("Package interest", packageLine)}
      ${row("Preferred days / times", data.preferredSchedule)}
      ${row("Goals / notes", data.goals)}
    </table>
  </div>`;

  const requesterHtml = `
  <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111;">
    <h2 style="margin:0 0 12px;">Thanks — we received your inquiry</h2>
    <p style="margin:0 0 16px;color:#374151;">Hi ${escapeHtml(data.parentName)},</p>
    <p style="margin:0 0 16px;color:#374151;">Dreamchasers Sports Performance got your message about training for <strong>${escapeHtml(data.athleteName)}</strong>. Sewo will follow up with availability and the best fit.</p>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">
      ${row("Training interest", data.trainingInterest)}
      ${row("Package interest", packageLine)}
      ${row("Preferred days / times", data.preferredSchedule)}
      ${row("Goals / notes", data.goals)}
    </table>
    <p style="margin:24px 0 0;color:#6b7280;font-size:14px;">If anything looks off, reply to this email and we’ll adjust.</p>
  </div>`;

  const sewoResult = await resend.emails.send({
    from,
    to: SEWO_NOTIFICATION_EMAIL,
    replyTo: data.email,
    subject: `New training inquiry — ${data.parentName}`,
    html: sewoHtml,
  });

  if (sewoResult.error) {
    return {
      ok: false,
      emailed: false,
      message: sewoResult.error.message ?? "Failed to notify coach",
    };
  }

  const requesterResult = await resend.emails.send({
    from,
    to: data.email,
    subject: "Dreamchasers — we received your inquiry",
    html: requesterHtml,
  });

  if (requesterResult.error) {
    return {
      ok: false,
      emailed: false,
      message:
        requesterResult.error.message ?? "Failed to send confirmation email",
    };
  }

  return { ok: true, emailed: true };
}
