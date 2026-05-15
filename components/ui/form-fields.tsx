import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
};

export function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: FieldProps) {
  const id = name;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-white/15 bg-dsp-bg px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-dsp-blue focus:ring-2 focus:ring-dsp-blue/35"
      />
      {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}

type TextAreaProps = {
  label: string;
  name: string;
  rows: number;
  error?: string;
};

export function TextAreaField({ label, name, rows, error }: TextAreaProps) {
  const id = name;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="mt-2 w-full resize-y rounded-sm border border-white/15 bg-dsp-bg px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-dsp-blue focus:ring-2 focus:ring-dsp-blue/35"
      />
      {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  children: ReactNode;
};

export function SelectField({
  label,
  name,
  required,
  error,
  placeholder = "Select an option",
  children,
}: SelectFieldProps) {
  const id = name;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-sm border border-white/15 bg-dsp-bg px-4 py-3 text-sm text-white outline-none ring-dsp-blue/40 focus:border-dsp-blue focus:ring-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>
      {error ? <p className="mt-1 text-xs text-red-300">{error}</p> : null}
    </div>
  );
}
