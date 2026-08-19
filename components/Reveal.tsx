"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let settled = false;
    const show = () => {
      if (settled) return;
      settled = true;
      node.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(show, delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(node);
    // Safety net: never leave content permanently hidden if the
    // observer misses a fast scroll, anchor jump, or edge case.
    const fallback = window.setTimeout(show, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
