import { bookingSchema } from "@/lib/booking-schema";
import { sendInquiryEmails } from "@/lib/send-inquiry-emails";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[booking:inquiry]", parsed.data);
  }

  const emailResult = await sendInquiryEmails(parsed.data);

  if (!emailResult.ok) {
    return NextResponse.json(
      { ok: false, error: emailResult.message },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    emailed: emailResult.emailed,
    ...(emailResult.emailed
      ? {}
      : {
          emailNotice:
            "Saved request; add RESEND_API_KEY and EMAIL_FROM to enable confirmation emails.",
        }),
  });
}
