import { trainingInterestValues } from "@/lib/booking-schema";
import { z } from "zod";

/** Optional copy — empty or omitted becomes `undefined` after parse (safe for JSON bodies that drop undefined keys). */
export const scheduleOptionalNotes = z
  .string()
  .optional()
  .transform((s) => {
    const t = (s ?? "").trim();
    return t === "" ? undefined : t;
  });

export const scheduleSchema = z.object({
  athleteName: z.string().trim().min(1, "Athlete name is required"),
  parentName: z.string().trim().min(1, "Parent / guardian name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  athleteAge: z.string().trim().min(1, "Age is required"),
  sport: z.string().trim().min(1, "Sport is required"),
  sessionType: z.enum(trainingInterestValues),
  timezone: z.string().trim().min(1, "Select a timezone"),
  preferredSlot: z
    .string()
    .trim()
    .min(1, "Pick a date and start time")
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
      "Pick a valid date and start time",
    ),
  notes: scheduleOptionalNotes,
});

export type SchedulePayload = z.infer<typeof scheduleSchema>;
