import type { Metadata } from "next";
import { EnterprisePage } from "../../src/components/enterprise";
import { routes } from "../../src/config/routes";
import { siteConfig } from "../../src/config/site.config";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Soluções enterprise da Kraftcode para sistemas sob medida, integrações complexas, IA aplicada e arquitetura escalável.",
  alternates: {
    canonical: `${siteConfig.url}${routes.enterprise}`,
  },
};

export default function Enterprise() {
  return <EnterprisePage />;
}
