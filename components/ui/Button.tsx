import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = Omit<ComponentProps<"button">, "className"> & {
  variant?: "primary" | "outline";
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "primary" | "outline";
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-sm";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-dsp-blue text-dsp-bg shadow-[0_0_28px_rgba(0,212,255,0.35)] hover:brightness-110 active:brightness-95 clip-path-button",
  outline:
    "border border-white/25 bg-transparent text-white hover:border-dsp-blue hover:text-dsp-blue",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
