"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/site";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Extract only the md: prefixed classes from a className string
 * so mobile defaults aren't overridden by the image's built-in
 * non-responsive height/span classes.
 */
function getMdClasses(className: string): string {
  return className
    .split(" ")
    .filter((cls) => cls.startsWith("md:"))
    .join(" ");
}

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  /* Close on Escape, navigate with arrow keys */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    /* Lock body scroll while lightbox is open */
    document.body.classList.add("body-scroll-lock");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("body-scroll-lock");
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <section className="py-12 md:py-32" id="gallery">
      {/* ── Heading ── */}
      <ScrollReveal className="mb-8 px-margin-mobile text-center md:mb-20 md:px-margin-desktop">
        <h2 className="brand-typography text-[clamp(2.8rem,13vw,5rem)]">
          <span className="section-heading-gradient">The </span>
          <span className="section-heading-red-gradient">Arena</span>
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-32 bg-gradient-to-r from-transparent via-primary to-transparent md:mt-6" />
      </ScrollReveal>

      {/* ── Image Grid ── */}
      <div className="grid grid-cols-2 gap-2 px-margin-mobile md:grid-cols-4 md:gap-4 md:px-4">
        {galleryImages.map((image, index) => (
          <ScrollReveal
            delayClass={`delay-${(index + 1) * 100}`}
            key={image.alt}
            className={`${getMdClasses(image.className)}`}
          >
            <button
              aria-label={`View ${image.alt} fullscreen`}
              className="group relative w-full h-[180px] sm:h-[200px] md:h-full cursor-pointer overflow-hidden rounded-xl transition-transform duration-200 active:scale-[0.97]"
              id={`gallery-image-${index}`}
              onClick={() => setLightboxIndex(index)}
              type="button"
            >
              <Image
                alt={image.alt}
                className="object-cover brightness-75 saturate-125 transition-all duration-1000 group-hover:brightness-105"
                fill
                quality={100}
                sizes={image.sizes}
                src={image.src}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Fullscreen Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          aria-label="Image lightbox"
          aria-modal="true"
          className={`lightbox-overlay fixed inset-0 z-[60] flex items-center justify-center bg-black/95 safe-bottom ${lightboxIndex !== null ? "open" : ""}`}
          id="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
        >
          {/* Close button */}
          <button
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            id="lightbox-close"
            onClick={closeLightbox}
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-4 md:p-3"
            id="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            type="button"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Lightbox image */}
          <div
            className="relative mx-12 h-[70vh] w-full max-w-4xl md:mx-20 md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              alt={galleryImages[lightboxIndex].alt}
              className="object-contain"
              fill
              priority
              quality={100}
              sizes="100vw"
              src={galleryImages[lightboxIndex].src}
              unoptimized
            />
          </div>

          {/* Next button */}
          <button
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-4 md:p-3"
            id="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            type="button"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Image counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60 md:bottom-6 md:text-base">
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
