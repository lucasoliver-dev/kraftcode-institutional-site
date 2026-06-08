import type { Metadata } from "next";
import { FounderPage } from "../../src/components/founder";
import { routes } from "../../src/config/routes";
import { siteConfig } from "../../src/config/site.config";

export const metadata: Metadata = {
  title: "Fundador",
  description:
    "Conheça Lucas Oliveira, fundador da Kraftcode, engenheiro de software com atuação em web, backend, IA, MCP e produtos digitais.",
  alternates: {
    canonical: `${siteConfig.url}${routes.founder}`,
  },
};

export default function Fundador() {
  return <FounderPage />;
}
