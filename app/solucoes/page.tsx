import type { Metadata } from "next";
import { SolutionsPage } from "../../src/components/solutions";
import { routes } from "../../src/config/routes";
import { siteConfig } from "../../src/config/site.config";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Conheça as soluções digitais da Kraftcode para atendimento com IA, análise esportiva, automações e operações enterprise.",
  alternates: {
    canonical: `${siteConfig.url}${routes.solutions}`,
  },
};

export default function Solucoes() {
  return <SolutionsPage />;
}
