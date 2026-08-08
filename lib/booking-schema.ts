import { trainingPackageIds } from "@/lib/training-packages";
import { z } from "zod";

export const trainingInterestValues = [
  "1-on-1 Training",
  "Group Training",
  "Youth Camp",
  "Speed & Agility",
  "Football Development",
] as const;

const optionalPackageId = z
  .union([z.enum(trainingPackageIds), z.literal(""), z.undefined()])
  .transform((v) => (v === "" || v === undefined ? undefined : v));

export const bookingSchema = z.object({
  athleteName: z.string().trim().min(1, "Athlete name is required"),
  parentName: z.string().trim().min(1, "Parent / guardian name is required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  athleteAge: z.string().trim().min(1, "Age is required"),
  sport: z.string().trim().min(1, "Sport is required"),
  trainingInterest: z.enum(trainingInterestValues),
  packageId: optionalPackageId,
  goals: z.string().trim().optional(),
  preferredSchedule: z.string().trim().optional(),
});

export type BookingPayload = z.infer<typeof bookingSchema>;
