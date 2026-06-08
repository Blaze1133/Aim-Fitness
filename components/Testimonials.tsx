"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { contact, testimonials } from "@/data/site";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Mobile carousel cards (snap-center, tactical dossier design)      */
/* ------------------------------------------------------------------ */
function MobileCarouselCards() {
  const QuoteIcon = contact.quoteIcon;

  return (
    <>
      {testimonials.map((testimonial, index) => (
        <article
          className="glass-card snap-center relative flex min-h-0 w-[85vw] shrink-0 flex-col rounded-xl !border-x !border-b !border-white/10 !border-t-2 !border-t-primary p-6 md:p-12"
          key={testimonial.name}
        >
          {/* Top Row: Intel ID & Quote Icon */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-caps text-[10px] font-black tracking-widest text-primary/70">
              DEBRIEF // 0{index + 1}
            </span>
            <QuoteIcon aria-hidden="true" className="h-5 w-5 text-primary/20" />
          </div>

          {/* Stars */}
          <div
            className="mb-4 flex items-center gap-1 text-primary"
            aria-label="5 star review"
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star aria-hidden="true" className="h-3.5 w-3.5 fill-current" key={idx} />
            ))}
          </div>

          {/* Quote */}
          <p className="mb-6 flex-1 whitespace-normal font-body-md text-sm italic leading-relaxed text-white/90">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="mt-auto grid grid-cols-[auto_1fr] items-center gap-3 border-t border-white/10 pt-4">
            <div className="brand-typography flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/5 text-sm font-black text-primary">
              {testimonial.initials}
            </div>
            <div className="min-w-0">
              <h3 className="brand-typography whitespace-normal break-words text-sm leading-tight text-white">
                {testimonial.name}
              </h3>
              <p className="mt-1.5 whitespace-normal break-words font-label-caps text-[9px] font-black uppercase leading-relaxed tracking-[0.1em] text-primary/60">
                {testimonial.role}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop marquee cards (tactical dossier design)                   */
/* ------------------------------------------------------------------ */
function MarqueeCards() {
  const QuoteIcon = contact.quoteIcon;

  return (
    <>
      {testimonials.map((testimonial, index) => (
        <article
          className="glass-card relative flex min-h-[440px] flex-col rounded-xl !border-x !border-b !border-white/10 !border-t-2 !border-t-primary p-10 min-w-[min(420px,86vw)]"
          key={testimonial.name}
        >
          {/* Top Row: Intel ID & Quote Icon */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-label-caps text-xs font-black tracking-widest text-primary/70">
              DEBRIEF // 0{index + 1}
            </span>
            <QuoteIcon aria-hidden="true" className="h-6 w-6 text-primary/20" />
          </div>

          {/* Stars */}
          <div className="mb-5 flex items-center gap-1 text-primary" aria-label="5 star review">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star aria-hidden="true" className="h-4 w-4 fill-current" key={idx} />
            ))}
          </div>

          {/* Quote */}
          <p className="mb-8 flex-1 whitespace-normal font-body-md text-lg italic leading-relaxed text-white/90">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="mt-auto grid grid-cols-[auto_1fr] items-center gap-4 border-t border-white/10 pt-6">
            <div className="brand-typography flex h-12 w-12 shrink-0 items-center justify-center border border-primary/40 bg-primary/5 text-lg font-black text-primary">
              {testimonial.initials}
            </div>
            <div className="min-w-0">
              <h3 className="brand-typography whitespace-normal break-words text-base leading-tight text-white">
                {testimonial.name}
              </h3>
              <p className="mt-1.5 whitespace-normal break-words font-label-caps text-[10px] font-black uppercase leading-relaxed tracking-[0.1em] text-primary/60">
                {testimonial.role}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Testimonials section                                         */
/* ------------------------------------------------------------------ */
export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---- IntersectionObserver to track active card ---- */
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          if (!parent) return;
          const children = Array.from(parent.children);
          const idx = children.indexOf(entry.target);
          if (idx !== -1) setActiveIndex(idx);
        }
      }
    },
    [],
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: container,
      threshold: 0.6,
    });

    const cards = Array.from(container.children);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      id="testimonials"
      className="overflow-hidden border-y border-white/5 py-12 md:py-32"
    >
      {/* Heading */}
      <ScrollReveal className="mb-8 text-center md:mb-20">
        <h2 className="brand-typography text-[clamp(2.8rem,13vw,4.5rem)]">
          <span className="section-heading-gradient">Client </span>
          <span className="section-heading-red-gradient">Intel</span>
        </h2>
        <p className="mt-4 px-margin-mobile font-label-caps text-xs font-black tracking-[0.28em] text-primary/80 md:text-sm md:tracking-[0.4em]">
          Debriefs from the frontline
        </p>
      </ScrollReveal>

      {/* ---- Mobile / Tablet carousel (below lg) ---- */}
      <ScrollReveal delayClass="delay-200" className="lg:hidden">
        <div
          ref={scrollRef}
          className="snap-x-mandatory flex gap-4 overflow-x-auto px-[calc((100vw-85vw)/2)] scrollbar-hide"
          role="region"
          aria-label="Testimonials carousel"
        >
          <MobileCarouselCards />
        </div>

        {/* Pagination dots */}
        <nav
          aria-label="Testimonial pagination"
          className="mt-6 flex items-center justify-center gap-2"
        >
          {testimonials.map((t, i) => (
            <span
              key={t.name}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Testimonial ${i + 1}`}
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </nav>
      </ScrollReveal>

      {/* ---- Desktop marquee (lg+) — unchanged ---- */}
      <ScrollReveal delayClass="delay-200" className="marquee-container hidden overflow-hidden whitespace-nowrap lg:flex">
        <div className="flex animate-marquee-slow gap-gutter px-4">
          <MarqueeCards />
        </div>
        <div aria-hidden="true" className="flex animate-marquee-slow gap-gutter px-4">
          <MarqueeCards />
        </div>
      </ScrollReveal>
    </section>
  );
}
