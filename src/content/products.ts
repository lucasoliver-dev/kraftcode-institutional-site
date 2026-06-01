export type ProductAccent = "kraftchat" | "kraftscore";

export const products = [
  {
    name: "Kraftchat",
    slug: "kraftchat",
    description: "Atendimento e automação com IA para operações digitais.",
    accent: "kraftchat" as ProductAccent,
  },
  {
    name: "Kraftscore",
    slug: "kraftscore",
    description: "Inteligência analítica para sinais, dados e performance.",
    accent: "kraftscore" as ProductAccent,
  },
] as const;
