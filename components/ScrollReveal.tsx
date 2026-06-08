"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animationClass?: string; // e.g. "reveal-anim"
  delayClass?: string; // e.g. "delay-100"
}

export function ScrollReveal({
  children,
  className = "",
  animationClass = "reveal-anim",
  delayClass = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal only once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animationClass} ${delayClass}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
