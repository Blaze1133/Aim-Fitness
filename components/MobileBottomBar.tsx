"use client";

import { useEffect, useState } from "react";
import { Phone, Dumbbell } from "lucide-react";
import { contact } from "@/data/site";

export function MobileBottomBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const inquirySection = document.getElementById("inquiry");
    if (!inquirySection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide bar when inquiry form is visible (user is already at the conversion point)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(inquirySection);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`safe-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      id="mobile-bottom-bar"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="flex h-[60px] items-center gap-3 px-4">
        <a
          className="inline-flex h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border-2 border-white/20 font-label-caps text-xs font-black tracking-wider text-white transition-all active:scale-95"
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          id="bottom-bar-call"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Call Now
        </a>
        <a
          className="btn-racing-red red-glow inline-flex h-[44px] flex-1 items-center justify-center gap-2 rounded-lg font-label-caps text-xs font-black tracking-wider text-white transition-all active:scale-95"
          href="#inquiry"
          id="bottom-bar-join"
        >
          <Dumbbell aria-hidden="true" className="h-4 w-4" />
          Join Now
        </a>
      </div>
    </div>
  );
}
