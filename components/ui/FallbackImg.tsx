"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
};

export function FallbackImg({ src, alt, className = "", fallback }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">{fallback}</div>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`relative z-10 ${className}`}
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}
