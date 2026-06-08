import Image from "next/image";
import { Dumbbell, Play } from "lucide-react";
import { heroImage } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-black pb-8 pt-16 sm:min-h-[calc(100svh-48px)] sm:pt-20 md:min-h-[calc(100vh-80px)] md:py-0" id="top">
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Image
          alt="Powerful athlete training in a dramatic gym environment"
          className="scale-in-anim object-cover object-[62%_center] brightness-[0.82] contrast-102 saturate-110 md:object-center md:brightness-[0.88]"
          fill
          priority
          quality={100}
          sizes="100vw"
          src={heroImage}
          unoptimized
        />
        <div className="fade-in-anim absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 md:via-black/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-max-width px-4 sm:px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto flex flex-col items-center text-center max-w-[24rem] sm:max-w-xl md:max-w-4xl md:items-start md:text-left md:mx-0">
          <h1 className="reveal-anim hero-title-typography mb-4 text-[40px] uppercase text-white min-[390px]:text-[44px] sm:mb-5 sm:text-[68px] md:mb-6 md:text-[110px]">
            <span className="text-shadow-3d relative z-20 block">Unleash</span>
            <span className="text-depth-red mt-[-0.1em] block text-primary opacity-95 md:ml-4">Your Power</span>
          </h1>
          <p className="reveal-anim delay-200 mb-6 max-w-md bg-transparent px-4 py-1.5 font-body-md text-[13px] leading-relaxed text-on-surface-variant backdrop-blur-none sm:mb-8 sm:max-w-lg sm:text-body-md sm:text-left md:mb-10 md:border-l-4 md:border-primary md:bg-black/55 md:py-4 md:pl-6 md:pr-3">
            Engineered for performance. AIM FITNESS is where raw intensity meets industrial precision. Elevate your
            training in an environment built for those who refuse to settle.
          </p>
          <div className="reveal-anim delay-400 flex w-full max-w-[22rem] flex-row gap-2 sm:max-w-none sm:gap-4 md:justify-start">
            <a
              className="btn-racing-red red-glow angled-corner inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-3 font-label-caps text-[11px] font-black text-on-primary transition-all active:scale-95 sm:flex-initial sm:gap-3 sm:px-10 sm:py-5 sm:text-lg"
              href="#inquiry"
            >
              <Play aria-hidden="true" className="h-3.5 w-3.5 fill-current sm:h-5 sm:w-5" />
              Get Started
            </a>
            <a
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 angled-corner inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-3 font-label-caps text-[11px] font-black text-white transition-all active:scale-95 sm:flex-initial sm:gap-3 sm:px-10 sm:py-5 sm:text-lg md:bg-transparent md:backdrop-blur-none md:border-2 md:border-white/40 md:clip-none md:hover:bg-white md:hover:text-black"
              href="#training"
            >
              <Dumbbell aria-hidden="true" className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              Explore Training
            </a>
          </div>
          <div className="reveal-anim delay-500 mt-8 flex items-center justify-center gap-2 min-[360px]:gap-3 text-[8.5px] min-[375px]:text-[9px] font-black uppercase tracking-[0.22em] text-white/50 font-label-caps md:hidden">
            <span className="text-white whitespace-nowrap">5.0 ★ Rating</span>
            <span className="text-primary font-black shrink-0">//</span>
            <span className="text-white whitespace-nowrap">Strength</span>
            <span className="text-primary font-black shrink-0">//</span>
            <span className="text-white whitespace-nowrap">Premium</span>
          </div>
        </div>
      </div>

      <div className="brand-typography pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[35vw] font-black text-white/5">
        Power
      </div>
    </section>
  );
}
