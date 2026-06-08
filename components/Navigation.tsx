"use client";

import { useCallback, useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";
import { mobileNav, siteNav } from "@/data/site";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-scroll-lock");
    } else {
      document.body.classList.remove("body-scroll-lock");
    }
    return () => {
      document.body.classList.remove("body-scroll-lock");
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Sticky navbar ── */}
      <nav className="sticky top-0 z-50 grid h-11 w-full grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-white/5 bg-black/80 px-3 backdrop-blur-xl sm:h-12 sm:px-margin-mobile md:flex md:h-20 md:justify-between md:px-margin-desktop">
        {/* Logo */}
        <a
          className="brand-typography whitespace-nowrap text-[15px] leading-none text-primary sm:text-xl md:text-3xl"
          href="#top"
          aria-label="AIM FITNESS home"
        >
          AIM FITNESS
        </a>

        {/* Desktop links (lg+) */}
        <div className="hidden items-center gap-8 lg:flex">
          {siteNav.map((item, index) => (
            <a
              className={`font-label-caps text-label-caps transition-colors ${
                index === 0
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "font-medium text-on-surface hover:text-primary"
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger button (< lg) */}
        <button
          id="mobile-menu-toggle"
          type="button"
          className="relative flex h-10 w-10 items-center justify-center justify-self-end lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex h-5 w-6 flex-col items-center justify-between">
            <span
              className={`block h-[2px] w-full rounded-full bg-on-surface transition-transform duration-300 ${
                menuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-on-surface transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-on-surface transition-transform duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* Join Now CTA */}
        <a
          className="btn-racing-red red-glow angled-corner hidden lg:inline-flex shrink-0 items-center justify-self-end gap-1.5 px-2.5 py-1.5 font-label-caps text-[9px] font-black text-on-primary transition-all hover:brightness-110 active:scale-95 sm:gap-2 sm:px-5 sm:py-2 sm:text-label-caps md:px-6 md:py-3"
          href="#inquiry"
        >
          <Dumbbell aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Join Now
        </a>
      </nav>

      {/* ── Mobile menu overlay + panel (OUTSIDE nav to avoid stacking context) ── */}
      <div
        id="mobile-menu-overlay"
        className={`mobile-menu-overlay fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm lg:hidden ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`mobile-menu-panel safe-bottom fixed right-0 top-0 z-[100] flex h-full w-3/4 max-w-xs flex-col border-l border-white/10 bg-black backdrop-blur-xl lg:hidden ${
          menuOpen ? "open" : ""
        }`}
      >
        {/* Close button */}
        <div className="flex h-11 items-center justify-end px-3 sm:h-12">
          <button
            id="mobile-menu-close"
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span className="relative flex h-5 w-6 items-center justify-center">
              <span className="absolute block h-[2px] w-full rotate-45 rounded-full bg-on-surface" />
              <span className="absolute block h-[2px] w-full -rotate-45 rounded-full bg-on-surface" />
            </span>
          </button>
        </div>

        {/* Menu links */}
        <ul className="mt-8 flex flex-col gap-2 px-6">
          {mobileNav.map((item) => (
            <li key={item.label}>
              <a
                id={`mobile-nav-${item.label.toLowerCase()}`}
                className="brand-typography flex h-14 items-center text-2xl text-on-surface transition-colors hover:text-primary"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Now CTA at bottom */}
        <div className="mt-auto px-6 pb-8">
          <a
            id="mobile-nav-join"
            className="btn-racing-red red-glow angled-corner flex w-full items-center justify-center gap-2 px-6 py-4 font-label-caps text-label-caps font-black text-on-primary transition-all hover:brightness-110 active:scale-95"
            href="#inquiry"
            onClick={closeMenu}
          >
            <Dumbbell aria-hidden="true" className="h-5 w-5" />
            Join Now
          </a>
        </div>
      </aside>
    </>
  );
}
