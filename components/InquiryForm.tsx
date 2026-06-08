"use client";

import { FormEvent, useState } from "react";
import { contact, inquiryGoals } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

export function InquiryForm() {
  const SubmitIcon = contact.submitIcon;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      event.currentTarget.reset();
      setStatus("success");
      return;
    }

    setStatus("error");
  }

  return (
    <section className="relative overflow-hidden bg-black px-margin-mobile py-12 md:px-margin-desktop md:py-32" id="inquiry">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,30,30,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <ScrollReveal className="mx-auto mb-8 max-w-5xl text-center md:mb-20">
          <h2 className="brand-typography text-shadow-3d mx-auto mb-4 max-w-full text-center text-[clamp(2rem,5.9vw,5.5rem)] leading-none md:mb-8">
            <span className="section-heading-gradient">Start Your </span>
            <span className="section-heading-red-gradient">Enquiry</span>
          </h2>
          <p className="mx-auto max-w-2xl border-x-2 border-primary/30 px-3 py-2 text-xs font-bold uppercase leading-relaxed tracking-wide text-on-surface-variant md:px-10 md:py-3 md:text-xl">
            Tell us your goal and our team will contact you with membership details, timings, and trainer guidance.
          </p>
        </ScrollReveal>

        <form
          className="glass-card premium-glow relative overflow-hidden rounded-2xl border border-white/10"
          onSubmit={handleSubmit}
        >
          <ScrollReveal delayClass="delay-200" className="space-y-5 bg-gradient-to-br from-black/60 to-black/95 p-4 sm:p-8 md:space-y-10 md:p-16">
            <input aria-hidden="true" autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
              <FormField id="name" label="Your Name" placeholder="Full Name" type="text" />
              <FormField id="phone" label="Contact Number" placeholder="Phone Number" type="tel" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="brand-typography ml-1 block text-[10px] font-black tracking-[0.22em] text-primary md:text-xs md:tracking-[0.3em]" htmlFor="goal">
                Fitness Goal
              </label>
              <div className="relative">
                <select
                  className="recruitment-input w-full cursor-pointer appearance-none rounded-xl p-3.5 pr-12 font-label-caps text-xs uppercase text-white md:p-6 md:text-sm"
                  id="goal"
                  name="goal"
                >
                  {inquiryGoals.map((goal) => (
                    <option key={goal}>{goal}</option>
                  ))}
                </select>
                <SubmitIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-primary md:right-6"
                />
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="brand-typography ml-1 block text-[10px] font-black tracking-[0.22em] text-primary md:text-xs md:tracking-[0.3em]" htmlFor="message">
                Message
              </label>
              <textarea
                className="recruitment-input w-full resize-none rounded-xl p-3.5 font-label-caps text-xs uppercase text-white placeholder:text-white/10 md:p-6 md:text-sm"
                id="message"
                name="message"
                placeholder="Ask about membership, personal training, timings, or anything else..."
                rows={3}
              />
            </div>

            <div aria-live="polite" className="min-h-6 text-center font-label-caps text-xs font-black uppercase tracking-[0.2em]">
              {status === "success" ? <p className="text-primary">Enquiry received. Our team will contact you soon.</p> : null}
              {status === "error" ? <p className="text-error">Transmission failed. Check your details and try again.</p> : null}
            </div>

            <div className="group relative pt-2 md:pt-8">
              <div className="absolute -inset-1.5 rounded-xl bg-primary opacity-30 blur-xl transition-opacity group-hover:opacity-60" />
              <button
                disabled={status === "submitting"}
                className="btn-racing-red relative flex w-full items-center justify-center gap-3 rounded-xl py-4 font-label-caps text-sm font-black tracking-[0.16em] text-white transition-all hover:scale-[1.01] active:scale-[0.98] md:gap-6 md:py-7 md:text-xl md:tracking-[0.3em]"
                type="submit"
              >
                <span>{status === "submitting" ? "Submitting" : "Send Enquiry"}</span>
                <SubmitIcon aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-3 md:h-6 md:w-6" />
              </button>
            </div>
          </ScrollReveal>
          <div className="scanline opacity-40" />
        </form>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  placeholder,
  type,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: "tel" | "text";
}) {
  return (
    <div className="space-y-3 md:space-y-4">
      <label className="brand-typography ml-1 block text-[10px] font-black tracking-[0.22em] text-primary md:text-xs md:tracking-[0.3em]" htmlFor={id}>
        {label}
      </label>
      <input
        className="recruitment-input w-full rounded-xl p-3.5 font-label-caps text-xs uppercase text-white placeholder:text-white/10 md:p-6 md:text-sm"
        id={id}
        name={id}
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  );
}
