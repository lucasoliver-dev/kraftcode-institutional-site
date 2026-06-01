import { routes } from "../config/routes";

export const mainNavigation = [
  { label: "Empresa", href: routes.about },
  { label: "Soluções", href: routes.solutions },
  { label: "Produtos", href: routes.products },
  { label: "Enterprise", href: routes.enterprise },
  { label: "Fundador", href: routes.founder },
  { label: "Contato", href: routes.contact },
] as const;
