import { routes } from "../config/routes";

export const homeContent = {
  hero: {
    badge: "Kraftcode Studio",
    title: "Software, IA e produtos digitais escaláveis.",
    subtitle:
      "Criamos plataformas, automações e produtos SaaS com design preciso, engenharia sólida e foco em escala.",
    ctas: [
      { label: "Conhecer soluções", href: routes.solutions, variant: "primary" },
      { label: "Ver produtos", href: routes.products, variant: "secondary" },
    ],
  },
  cards: [
    {
      title: "Kraftchat",
      label: "Conversas com IA",
      accent: "kraftchat",
      text: "Atendimento e automação para operações digitais.",
      href: routes.kraftchat,
    },
    {
      title: "Kraftscore",
      label: "Inteligência analítica",
      accent: "kraftscore",
      text: "Dados, sinais e performance para decisões rápidas.",
      href: routes.kraftscore,
    },
    {
      title: "Enterprise Software",
      label: "Projetos sob medida",
      accent: "neutral",
      text: "Sistemas críticos para empresas em crescimento.",
      href: routes.enterprise,
    },
  ],
  authority: {
    label: "Engineering partner",
    title: "Produto, engenharia e IA no mesmo ritmo.",
    text: "A Kraftcode combina estratégia técnica, execução enxuta e visão de produto para criar software pronto para crescer.",
  },
  finalCta: {
    title: "Vamos desenhar o próximo sistema?",
    text: "Uma conversa curta já revela o caminho técnico certo.",
    label: "Falar com a Kraftcode",
    href: routes.contact,
  },
} as const;
