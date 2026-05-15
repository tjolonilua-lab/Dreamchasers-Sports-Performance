import { z } from "zod";

export const trainingInterestValues = [
  "1-on-1 Training",
  "Group Training",
  "Youth Camp",
  "Speed & Agility",
  "Football Development",
] as const;

export const bookingSchema = z.object({
  athleteName: z.string().trim().min(1, "Athlete name is required"),
  parentName: z.string().trim().min(1, "Parent / guardian name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  athleteAge: z.string().trim().min(1, "Age is required"),
  sport: z.string().trim().min(1, "Sport is required"),
  trainingInterest: z.enum(trainingInterestValues),
  goals: z.string().trim().optional(),
  preferredSchedule: z.string().trim().optional(),
});

export type BookingPayload = z.infer<typeof bookingSchema>;
