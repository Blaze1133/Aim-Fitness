import { disciplines } from "@/data/site";

function DisciplineItems() {
  return (
    <>
      {disciplines.map(({ label, icon: Icon }) => (
        <div className="flex w-[180px] shrink-0 items-center justify-center gap-2.5 sm:w-[220px] md:w-[300px] md:gap-4" key={label}>
          <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-primary md:h-7 md:w-7" strokeWidth={2.5} />
          <h3 className="brand-typography text-center text-xs leading-none text-white sm:text-sm md:text-2xl">{label}</h3>
        </div>
      ))}
    </>
  );
}

export function DisciplinesMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-black/40 py-2.5 md:py-4" id="classes">
      <div className="marquee-container flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-6 py-1 shrink-0 md:gap-8 md:py-3">
          <DisciplineItems />
        </div>
        <div aria-hidden="true" className="flex animate-marquee gap-6 py-1 shrink-0 md:gap-8 md:py-3">
          <DisciplineItems />
        </div>
      </div>
    </section>
  );
}
