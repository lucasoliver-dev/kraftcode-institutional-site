export const routes = {
  home: "/",
  about: "/sobre",
  founder: "/fundador",
  solutions: "/solucoes",
  products: "/produtos",
  kraftchat: "/produtos/kraftchat",
  kraftscore: "/produtos/kraftscore",
  enterprise: "/enterprise",
  contact: "/contato",
} as const;

export type RouteKey = keyof typeof routes;
