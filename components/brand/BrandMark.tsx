"use client";

import { BRAND_MONOGRAM_SRC } from "@/lib/brand-assets";
import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  /** Header vs footer scale presets */
  size?: "sm" | "lg";
};

const sizeClass: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-10 sm:h-11",
  lg: "h-14 sm:h-16",
};

/**
 * Sewo Olonilua monogram (SO + crown) — white mark on transparent/black asset.
 */
export function BrandMark({ className = "", priority, size = "sm" }: Props) {
  return (
    <Image
      src={BRAND_MONOGRAM_SRC}
      alt="Sewo Olonilua monogram"
      width={256}
      height={256}
      priority={priority}
      className={`${sizeClass[size]} w-auto object-contain ${className}`}
    />
  );
}
