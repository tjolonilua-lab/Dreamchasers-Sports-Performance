"use client";

import { format, parse, startOfToday } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useMemo, useState } from "react";

import "react-day-picker/style.css";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function to24Hour(hour12: number, ampm: "AM" | "PM"): number {
  if (ampm === "AM") return hour12 === 12 ? 0 : hour12;
  return hour12 === 12 ? 12 : hour12 + 12;
}

type PreferredSlotPickerProps = {
  error?: string;
};

const SELECT_RING =
  "rounded-sm border border-white/15 bg-dsp-bg px-4 py-3 text-sm text-white outline-none ring-dsp-blue/40 focus:border-dsp-blue focus:ring-2";

export function PreferredSlotPicker({ error }: PreferredSlotPickerProps) {
  const [selected, setSelected] = useState<Date | undefined>();
  const [hour12, setHour12] = useState(9);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState<"AM" | "PM">("AM");

  const slotValue = useMemo(() => {
    if (!selected) return "";
    const h24 = to24Hour(hour12, ampm);
    const y = selected.getFullYear();
    const m = pad2(selected.getMonth() + 1);
    const d = pad2(selected.getDate());
    return `${y}-${m}-${d}T${pad2(h24)}:${pad2(minute)}`;
  }, [selected, hour12, minute, ampm]);

  const preview = useMemo(() => {
    if (!slotValue) return null;
    try {
      const d = parse(slotValue, "yyyy-MM-dd'T'HH:mm", new Date());
      return `${format(d, "EEEE, MMM d")} · ${format(d, "h:mm a")}`;
    } catch {
      return null;
    }
  }, [slotValue]);

  const minuteOptions = useMemo(() => {
    const out: number[] = [];
    for (let m = 0; m < 60; m += 15) out.push(m);
    return out;
  }, []);

  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
        Preferred session time
      </label>
      <p className="mt-2 text-xs leading-relaxed text-white/45">
        Choose a date on the calendar, then set your preferred start time.
      </p>

      <div className="dsp-schedule-picker mt-4 flex justify-center sm:justify-start">
        <DayPicker
          mode="single"
          required={false}
          selected={selected}
          onSelect={setSelected}
          disabled={{ before: startOfToday() }}
          showOutsideDays
          className="rounded-sm border border-white/12 bg-dsp-bg/90 px-3 pb-3 pt-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:px-4"
        />
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          Start time
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <select
            id="preferred-slot-hour"
            aria-label="Hour"
            value={hour12}
            onChange={(e) => setHour12(Number(e.target.value))}
            className={`${SELECT_RING} sm:min-w-[5.5rem]`}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>

          <select
            id="preferred-slot-minute"
            aria-label="Minute"
            value={minute}
            onChange={(e) => setMinute(Number(e.target.value))}
            className={`${SELECT_RING} sm:min-w-[5.5rem]`}
          >
            {minuteOptions.map((m) => (
              <option key={m} value={m}>
                {pad2(m)}
              </option>
            ))}
          </select>

          <div
            className="flex rounded-sm border border-white/15 bg-dsp-bg p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-w-[9rem]"
            role="group"
            aria-label="AM or PM"
          >
            {(["AM", "PM"] as const).map((x) => (
              <button
                key={x}
                type="button"
                onClick={() => setAmpm(x)}
                className={`flex-1 rounded-sm px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue ${
                  ampm === x
                    ? "bg-dsp-blue/25 text-white shadow-[0_0_18px_rgba(0,212,255,0.2)]"
                    : "text-white/45 hover:text-white/75"
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </div>

      {preview ? (
        <p
          className="mt-4 text-sm font-medium text-dsp-blue/95"
          aria-live="polite"
        >
          {preview}
        </p>
      ) : (
        <p className="mt-4 text-xs text-white/40" aria-live="polite">
          Select a date to confirm your slot.
        </p>
      )}

      <input type="hidden" name="preferredSlot" value={slotValue} />

      {error ? <p className="mt-2 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}
