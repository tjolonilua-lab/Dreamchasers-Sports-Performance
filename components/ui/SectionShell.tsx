import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-dsp-blue">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-white sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
