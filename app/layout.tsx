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
  url: "/images/products/kraftflow-automation-dashboard.png",
  width: 1672,
  height: 941,
  alt: "Dashboard Kraftflow Automation da Kraftcode",
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
    images: [socialImage],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [socialImage],
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
