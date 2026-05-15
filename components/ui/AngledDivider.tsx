type Props = {
  flip?: boolean;
  className?: string;
};

export function AngledDivider({ flip, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none relative -mt-px select-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 96"
        className="h-14 w-full text-dsp-blue drop-shadow-[0_12px_28px_rgba(0,212,255,0.22)] sm:h-[5.25rem]"
        preserveAspectRatio="none"
      >
        <polygon
          fill="currentColor"
          fillOpacity={0.78}
          points="0,96 0,22 1440,0 1440,96"
        />
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-[15%] bottom-2 h-8 rounded-full bg-dsp-blue/15 blur-2xl" />
    </div>
  );
}
