import Image from "next/image";
import { edgeFeatures, facilityImage } from "@/data/site";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AimEdge() {
  return (
    <section className="px-margin-mobile py-12 md:px-margin-desktop md:py-32" id="training">
      <div className="mx-auto grid max-w-max-width grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <ScrollReveal>
            <h2 className="brand-typography mb-4 text-[clamp(2.2rem,11vw,4.5rem)] md:mb-8">
              <span className="section-heading-gradient">The </span>
              <span className="section-heading-red-gradient">AIM Edge</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delayClass="delay-100">
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-on-surface-variant md:mb-12 md:text-lg">
              We do not just provide a gym; we provide a high-octane training ecosystem designed to push you beyond your
              perceived limits. Our facility is an industrial-strength cathedral for physical excellence.
            </p>
          </ScrollReveal>
          <div className="space-y-4 md:space-y-10">
            {edgeFeatures.map(({ title, description, icon: Icon }, index) => (
              <ScrollReveal delayClass={`delay-${(index + 1) * 200}`} key={title}>
                <div className="group flex items-center gap-3 md:items-start md:gap-6">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 md:p-3">
                    <Icon aria-hidden="true" className="h-6 w-6 text-primary md:h-10 md:w-10" strokeWidth={2.3} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="brand-typography mb-0.5 text-base text-white md:mb-2 md:text-xl">{title}</h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-on-surface-variant md:line-clamp-none md:text-base">{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal animationClass="scale-in-anim" className="relative hidden md:block">
          <div className="absolute -left-3 -top-3 h-20 w-20 border-l-4 border-t-4 border-primary/20 md:-left-6 md:-top-6 md:h-32 md:w-32 md:border-l-8 md:border-t-8" />
          <div className="premium-glow relative aspect-square overflow-hidden rounded-xl">
            <Image
              alt="Elite training facility interior"
              className="scale-105 object-cover brightness-90 saturate-125 transition-all duration-1000 hover:scale-100 hover:brightness-105"
              fill
              quality={100}
              sizes="(min-width: 768px) 50vw, 100vw"
              src={facilityImage}
              unoptimized
            />
          </div>
          <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-4 border-r-4 border-primary/20 md:-bottom-6 md:-right-6 md:h-32 md:w-32 md:border-b-8 md:border-r-8" />
        </ScrollReveal>
      </div>
    </section>
  );
}
