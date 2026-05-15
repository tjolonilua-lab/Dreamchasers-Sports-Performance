import { trainingInterestValues } from "@/lib/booking-schema";
import { z } from "zod";

const emptyToUndefined = z
  .string()
  .trim()
  .transform((s) => s || undefined);

export const scheduleSchema = z.object({
  athleteName: z.string().trim().min(1, "Athlete name is required"),
  parentName: z.string().trim().min(1, "Parent / guardian name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  athleteAge: z.string().trim().min(1, "Age is required"),
  sport: z.string().trim().min(1, "Sport is required"),
  sessionType: z.enum(trainingInterestValues),
  timezone: z.string().trim().min(1, "Select a timezone"),
  preferredSlot1: z
    .string()
    .trim()
    .min(1, "Choose your first preferred date & time"),
  preferredSlot2: emptyToUndefined,
  preferredSlot3: emptyToUndefined,
  notes: emptyToUndefined,
});

export type SchedulePayload = z.infer<typeof scheduleSchema>;
