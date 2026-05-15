"use client";

import { Button } from "@/components/ui/Button";
import {
  Field,
  SelectField,
  TextAreaField,
} from "@/components/ui/form-fields";
import { trainingInterestValues } from "@/lib/booking-schema";
import { scheduleSchema } from "@/lib/schedule-schema";
import type { FormEvent } from "react";
import { useState } from "react";

const TIMEZONES = [
  { value: "America/Chicago", label: "Central — Houston / Dallas / Chicago" },
  { value: "America/New_York", label: "Eastern" },
  { value: "America/Denver", label: "Mountain" },
  { value: "America/Los_Angeles", label: "Pacific" },
  { value: "America/Anchorage", label: "Alaska" },
  { value: "Pacific/Honolulu", label: "Hawaii" },
] as const;

type FieldErrors = Record<string, string | undefined>;

export function ScheduleSessionForm() {
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
      sessionType: String(formData.get("sessionType") ?? ""),
      timezone: String(formData.get("timezone") ?? ""),
      preferredSlot1: String(formData.get("preferredSlot1") ?? ""),
      preferredSlot2: String(formData.get("preferredSlot2") ?? ""),
      preferredSlot3: String(formData.get("preferredSlot3") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };

    const parsed = scheduleSchema.safeParse(payload);
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
      const res = await fetch("/api/schedule", {
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
      <div className="space-y-4 rounded-sm border border-dsp-blue/40 bg-dsp-surface/70 px-6 py-10 shadow-[0_0_40px_rgba(0,212,255,0.12)]">
        <div className="text-center">
          <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
            Request captured
          </p>
          {emailed ? (
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Check your inbox—we emailed you a confirmation and sent Sewo the same details so
              he can confirm availability.
            </p>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Your preferred times are logged. Once email delivery is configured on the
              server, confirmations will go out automatically to you and Sewo.
            </p>
          )}
        </div>
        {emailNotice ? (
          <p className="rounded-sm border border-amber-400/35 bg-amber-500/10 px-4 py-3 text-center text-xs leading-relaxed text-amber-100">
            {emailNotice}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      className="space-y-6 rounded-sm border border-white/10 bg-dsp-surface/50 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] sm:p-8"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        void handleSubmit(new FormData(e.currentTarget));
      }}
    >
      <p className="text-sm leading-relaxed text-white/65">
        Pick up to three date/time options. We&apos;ll confirm what works against Sewo&apos;s
        calendar and training locations.
      </p>

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
        label="Session focus"
        name="sessionType"
        required
        error={errors.sessionType}
      >
        {trainingInterestValues.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </SelectField>

      <SelectField
        label="Timezone reference"
        name="timezone"
        required
        placeholder="Choose your reference timezone"
        error={errors.timezone}
      >
        {TIMEZONES.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </SelectField>

      <Field
        label="Preferred slot 1 (date & time)"
        name="preferredSlot1"
        type="datetime-local"
        required
        error={errors.preferredSlot1}
      />
      <Field
        label="Preferred slot 2 (optional)"
        name="preferredSlot2"
        type="datetime-local"
        error={errors.preferredSlot2}
      />
      <Field
        label="Preferred slot 3 (optional)"
        name="preferredSlot3"
        type="datetime-local"
        error={errors.preferredSlot3}
      />

      <TextAreaField
        label="Notes / location preferences"
        name="notes"
        rows={3}
        error={errors.notes}
      />

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Submit scheduling request"}
      </Button>
    </form>
  );
}
