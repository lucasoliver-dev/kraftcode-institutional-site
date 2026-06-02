import { SmoothScrollProvider } from '../src/components/providers/SmoothScrollProvider'
import 'lenis/dist/lenis.css'
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { AppShell } from "../src/components/layout/AppShell";
import { siteConfig } from "../src/config/site.config";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const socialImage = {
  url: `${siteConfig.url}/og/kraftcode-og-v2.png`,
  width: 1200,
  height: 630,
  alt: "Kraftcode - Software, IA e produtos digitais escaláveis",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [socialImage.url],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [socialImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={instrumentSans.variable} lang="pt-BR">
      <body>
        <SmoothScrollProvider>
          <AppShell>{children}</AppShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
