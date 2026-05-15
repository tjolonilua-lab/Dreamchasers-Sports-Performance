"use client";

import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * One-shot fade / lift when entering the viewport. Respects reduced motion.
 */
export function RevealOnScroll({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /** If the block is already on-screen after layout, show it without waiting on IO timing. */
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = typeof window !== "undefined" ? window.innerHeight : 0;
    const margin = vh * 0.06;
    const intersects =
      rect.bottom > margin && rect.top < vh - margin;
    if (intersects) setVisible(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 12% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full transition-[opacity,transform] duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
