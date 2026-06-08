import { contact } from "@/data/site";
import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-margin-mobile py-10 md:px-margin-desktop md:py-16" id="contact">
      <div className="mx-auto max-w-max-width">
        {/* Mobile Call/Directions CTAs — hidden on desktop */}
        <div className="flex gap-3 mb-8 md:hidden">
          <a
            className="btn-racing-red red-glow angled-corner inline-flex h-[50px] flex-1 items-center justify-center gap-2 font-label-caps text-xs font-black tracking-wider text-white transition-all active:scale-95"
            href="tel:+919550662004"
            id="footer-call-btn"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call Gym
          </a>
          <a
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 angled-corner inline-flex h-[50px] flex-1 items-center justify-center gap-2 font-label-caps text-xs font-black tracking-wider text-white transition-all active:scale-95"
            href="https://www.google.com/maps/dir//First+floor,+AIM+Fitness+Unisex+Gym,+Devi+Priya+Residency,+D%2Fno:+1-69-6,+Rythu+Bazaar+Rd,+Sector+4,+Sector+3,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a394300035aa90f:0xcc5ad3910a923917?sa=X&ved=1t:57443&ictx=111"
            id="footer-maps-btn"
            rel="noreferrer"
            target="_blank"
          >
            <MapPin aria-hidden="true" className="h-4 w-4 text-primary" />
            Directions
          </a>
        </div>

        {/* Brand coordinates and info */}
        <div className="grid grid-cols-1 gap-8 pb-8 md:pb-12 lg:grid-cols-3 lg:gap-12">
          {/* Col 1: Logo & Brand statement */}
          <div className="space-y-4">
            <a
              className="brand-typography text-2xl leading-none text-primary md:text-3xl"
              href="#top"
              aria-label="AIM FITNESS home"
            >
              AIM FITNESS
            </a>
            <p className="font-body-md text-xs leading-relaxed text-white/50 max-w-sm">
              Raw intensity meets industrial precision. Elevate your training in an environment built for those who refuse to settle.
            </p>
          </div>

          {/* Col 2 & 3: Grouped in a 2-column sub-grid on mobile/tablet */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:gap-12">
            {/* Coordinates */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-label-caps text-[10px] font-black uppercase tracking-[0.22em] text-primary">Coordinates</h3>
              <a
                href="https://www.google.com/maps/dir//First+floor,+AIM+Fitness+Unisex+Gym,+Devi+Priya+Residency,+D%2Fno:+1-69-6,+Rythu+Bazaar+Rd,+Sector+4,+Sector+3,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a394300035aa90f:0xcc5ad3910a923917?sa=X&ved=1t:57443&ictx=111"
                rel="noreferrer"
                target="_blank"
                className="font-body-md text-xs leading-relaxed text-white/70 hover:text-primary transition-colors block lg:max-w-[260px]"
              >
                First Floor, Devi Priya Residency, Opposite Rythu Bazar, MVP, Visakhapatnam 530017
              </a>
            </div>

            {/* Communication & Social */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-label-caps text-[10px] font-black uppercase tracking-[0.22em] text-primary">Phone</h3>
                <a
                  href="tel:+919550662004"
                  className="font-body-md text-xs text-white/70 hover:text-primary transition-colors block"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="space-y-1">
                <h3 className="font-label-caps text-[10px] font-black uppercase tracking-[0.22em] text-primary">Instagram</h3>
                <a
                  href="https://www.instagram.com/aimfitnessgym/"
                  rel="noreferrer"
                  target="_blank"
                  className="font-body-md text-xs text-white/70 hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
                  @aimfitnessgym
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom utility row */}
        <div className="border-t border-white/10 mt-8 pt-6 md:mt-12 md:pt-8 text-center font-label-caps text-[8.5px] min-[360px]:text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
          <p>© {currentYear} // ENGINEERED FOR PERFORMANCE.</p>
        </div>
      </div>
    </footer>
  );
}
