import type { Metadata } from "next";
import { CompanyPage } from "../../src/components/company";
import { routes } from "../../src/config/routes";
import { siteConfig } from "../../src/config/site.config";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça a Kraftcode, empresa fundada em fevereiro de 2023 para criar aplicações web, produtos digitais e soluções com IA.",
  alternates: {
    canonical: `${siteConfig.url}${routes.about}`,
  },
};

export default function Empresa() {
  return <CompanyPage />;
}
