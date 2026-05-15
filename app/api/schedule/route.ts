import { sendScheduleEmails } from "@/lib/send-schedule-emails";
import { scheduleSchema } from "@/lib/schedule-schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = scheduleSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[schedule:request]", parsed.data);
  }

  const emailResult = await sendScheduleEmails(parsed.data);

  if (!emailResult.ok) {
    return NextResponse.json(
      { ok: false, error: emailResult.message },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    emailed: emailResult.emailed,
    ...(emailResult.emailed ? {} : { emailNotice: "Saved request; add RESEND_API_KEY and EMAIL_FROM to enable confirmation emails." }),
  });
}
