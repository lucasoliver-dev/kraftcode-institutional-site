export type ProductAccent = "kraftchat" | "kraftscore" | "kraftflow" | "kraftops";

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

export const saasShowcaseItems = [
  {
    product: "kraftchat",
    title: "Kraftchat",
    description:
      "Atendimento omnichannel com IA, automações e base de conhecimento para empresas.",
    image: "/images/products/kraftchat-dashboard.png",
    accent: "kraftchat",
  },
  {
    product: "kraftscore",
    title: "Kraftscore",
    description:
      "Inteligência esportiva com dados, contexto humano e IA para análises mais estratégicas.",
    image: "/images/products/kraftscore-dashboard.png",
    accent: "kraftscore",
  },
  {
    product: "kraftflow",
    title: "Kraftflow",
    description:
      "Plataforma de automações, workflows e integrações inteligentes para operações digitais.",
    image: "/images/products/kraftflow-automation-dashboard.png",
    accent: "kraftflow",
  },
  {
    product: "kraftops",
    title: "KraftOps",
    description:
      "Central de operações enterprise com indicadores, alertas, processos e recomendações com IA.",
    image: "/images/products/kraftops-enterprise-dashboard.png",
    accent: "kraftops",
  },
] as const;
