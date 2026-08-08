"use client";

import { PackageSelectField } from "@/components/sections/PackageSelectField";
import { Button } from "@/components/ui/Button";
import {
  Field,
  SelectField,
  TextAreaField,
} from "@/components/ui/form-fields";
import { bookingSchema, trainingInterestValues } from "@/lib/booking-schema";
import type { TrainingPackageId } from "@/lib/training-packages";
import type { FormEvent } from "react";
import { useState } from "react";

type FieldErrors = Record<string, string | undefined>;

type Props = {
  defaultTrainingInterest?: (typeof trainingInterestValues)[number];
  defaultPackageId?: TrainingPackageId;
};

export function IntakeInquiryForm({
  defaultTrainingInterest,
  defaultPackageId,
}: Props) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [emailNotice, setEmailNotice] = useState<string | null>(null);
  const [emailed, setEmailed] = useState(false);
  async function handleSubmit(formData: FormData) {
    setPending(true);
    setStatus("idle");
    setErrors({});
    setEmailNotice(null);

    const payload = {
      athleteName: String(formData.get("athleteName") ?? ""),
      parentName: String(formData.get("parentName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      athleteAge: String(formData.get("athleteAge") ?? ""),
      sport: String(formData.get("sport") ?? ""),
      trainingInterest: String(formData.get("trainingInterest") ?? ""),
      packageId: String(formData.get("packageId") ?? ""),
      goals: String(formData.get("goals") ?? ""),
      preferredSchedule: String(formData.get("preferredSchedule") ?? ""),
    };

    const trimmed = {
      ...payload,
      goals: payload.goals.trim() || undefined,
      preferredSchedule: payload.preferredSchedule.trim() || undefined,
    };
    const parsed = bookingSchema.safeParse(trimmed);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      const flat = parsed.error.flatten().fieldErrors;
      for (const key of Object.keys(flat)) {
        const msgs = flat[key as keyof typeof flat];
        if (msgs?.[0]) fieldErrors[key] = msgs[0];
      }
      setErrors(fieldErrors);
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        emailed?: boolean;
        emailNotice?: string;
        errors?: Record<string, string[] | undefined>;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        if (data.errors) {
          const fieldErrors: FieldErrors = {};
          for (const [key, msgs] of Object.entries(data.errors)) {
            if (msgs?.[0]) fieldErrors[key] = msgs[0];
          }
          setErrors(fieldErrors);
        }
        setStatus("error");
        if (data.error && !data.errors) {
          setErrors({ form: data.error });
        }
        setPending(false);
        return;
      }

      setEmailed(Boolean(data.emailed));
      setEmailNotice(data.emailNotice ?? null);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4 rounded-sm border border-dsp-blue/40 bg-dsp-surface/70 px-6 py-10 text-center shadow-[0_0_40px_rgba(0,212,255,0.12)]">
        <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
          Request received
        </p>
        {emailed ? (
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Check your inbox—we emailed a confirmation and notified Sewo so he can
            follow up with availability.
          </p>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Thanks—we&apos;ll follow up shortly with availability and next steps.
          </p>
        )}
        {emailNotice ? (
          <p className="rounded-sm border border-amber-400/35 bg-amber-500/10 px-4 py-3 text-xs leading-relaxed text-amber-100">
            {emailNotice}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      className="space-y-6 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-dsp-surface/55 via-dsp-bg/70 to-dsp-bg p-6 shadow-[0_28px_64px_rgba(0,0,0,0.42)] ring-1 ring-white/[0.05] sm:p-8"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        void handleSubmit(new FormData(e.currentTarget));
      }}
    >
      {status === "error" && errors.form ? (
        <p className="rounded-sm border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {errors.form}
        </p>
      ) : null}
      {status === "error" && !errors.form && !Object.keys(errors).length ? (
        <p className="rounded-sm border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Athlete name"
          name="athleteName"
          required
          error={errors.athleteName}
        />
        <Field
          label="Parent / guardian name"
          name="parentName"
          required
          error={errors.parentName}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={errors.email}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          error={errors.phone}
        />
        <Field
          label="Athlete age"
          name="athleteAge"
          required
          error={errors.athleteAge}
        />
        <Field label="Sport" name="sport" required error={errors.sport} />
      </div>

      <SelectField
        label="Training interest"
        name="trainingInterest"
        required
        error={errors.trainingInterest}
        initialValue={defaultTrainingInterest}
      >
        {trainingInterestValues.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </SelectField>

      <PackageSelectField
        error={errors.packageId}
        defaultPackageId={defaultPackageId}
      />

      <TextAreaField
        label="Goals / notes"
        name="goals"
        rows={4}
        error={errors.goals}
      />
      <TextAreaField
        label="Preferred days / times"
        name="preferredSchedule"
        rows={3}
        error={errors.preferredSchedule}
      />

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Request Training Info"}
      </Button>
    </form>
  );
}
