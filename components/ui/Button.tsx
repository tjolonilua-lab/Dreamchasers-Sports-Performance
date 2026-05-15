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
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] duration-200 ease-out transition-[transform,box-shadow,filter,border-color,color,background-color] will-change-transform hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dsp-blue sm:text-sm";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-dsp-blue text-dsp-bg shadow-[0_0_32px_rgba(0,212,255,0.42)] hover:shadow-[0_0_44px_rgba(0,212,255,0.55)] hover:brightness-105 active:brightness-95 clip-path-button",
  outline:
    "border border-white/25 bg-transparent text-white hover:border-dsp-blue hover:text-dsp-blue hover:shadow-[0_0_24px_rgba(0,212,255,0.18)]",
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
