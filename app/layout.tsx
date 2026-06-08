import type { Metadata, Viewport } from "next";
import { Anybody, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIM FITNESS | Unleash Your Power",
  description:
    "A high-performance gym experience with elite equipment, expert coaching, strength training, cardio, nutrition guidance, and 24/7 access.",
  applicationName: "AIM FITNESS",
  authors: [{ name: "AIM FITNESS" }],
  keywords: [
    "AIM Fitness",
    "gym",
    "strength training",
    "personal training",
    "HIIT",
    "fitness coaching",
  ],
  metadataBase: new URL("https://aimfitness.com"),
  openGraph: {
    title: "AIM FITNESS | Unleash Your Power",
    description:
      "Engineered for performance. Elite equipment, expert coaching, and a driven training community.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0e0f",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        suppressHydrationWarning
        className={`${anybody.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable} font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container`}
      >
        {children}
      </body>
    </html>
  );
}
