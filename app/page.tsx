import { AimEdge } from "@/components/AimEdge";
import { DisciplinesMarquee } from "@/components/DisciplinesMarquee";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { InquiryForm } from "@/components/InquiryForm";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <DisciplinesMarquee />
        <AimEdge />
        <Gallery />
        <Testimonials />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
