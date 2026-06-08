import type { Metadata } from "next";
import { ContactPage } from "../../src/components/contact/ContactPage";
import { routes } from "../../src/config/routes";
import { siteConfig } from "../../src/config/site.config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Kraftcode por e-mail, WhatsApp ou redes sociais para conversar sobre projetos digitais.",
  alternates: {
    canonical: `${siteConfig.url}${routes.contact}`,
  },
};

export default function Contato() {
  return <ContactPage />;
}
