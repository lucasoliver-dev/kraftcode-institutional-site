import { routes } from "../config/routes";

export const homeContent = {
  hero: {
    badge: "Software · IA · Produtos digitais",
    title: "Construímos tecnologia que gera impacto real.",
    subtitle:
      "Da estratégia à execução, criamos soluções digitais escaláveis, inteligentes e centradas em resultado.",
    ctas: [
      { label: "Conhecer soluções", href: routes.solutions, variant: "primary" },
    ],
  },
  highlights: [
    {
      title: "Foco em resultados",
      description: "Tecnologia com propósito.",
    },
    {
      title: "Equipes especializadas",
      description: "Engenharia de alto nível.",
    },
    {
      title: "Produtos escaláveis",
      description: "SaaS com IA embarcada.",
    },
    {
      title: "Parceiro estratégico",
      description: "Do MVP à escala global.",
    },
  ],
  solutions: {
    label: "Soluções",
    title: "Tecnologia para resolver problemas complexos.",
    text: "Atuamos em diferentes frentes para acelerar negócios e criar vantagens competitivas.",
  },
  saasShowcase: {
    label: "Nossos produtos",
    title: "SaaS próprios. Focados em IA.",
    cta: { label: "Conhecer soluções", href: routes.solutions },
  },
  enterprise: {
    label: "Enterprise",
    title: "Projetos que exigem experiência real.",
    text: "Participamos do desenvolvimento de soluções enterprise em operações de grande escala.",
    cta: { label: "Ver projetos enterprise", href: routes.enterprise },
    segments: ["Enterprise", "Retail", "Fintech", "Sports", "Data"],
  },
  founder: {
    label: "Fundador",
    title: "Liderança técnica. Visão de produto.",
    text: "Lucas Oliveira, engenheiro de software e IA, atua na criação de produtos digitais com foco em arquitetura, experiência e impacto real.",
    cta: { label: "Conhecer minha história", href: routes.founder },
    socials: ["LinkedIn", "GitHub", "Instagram"],
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
  finalCta: {
    title: "Vamos construir algo incrível juntos?",
    text: "Conte sua ideia ou desafio. Vamos conversar.",
    label: "Falar com a gente",
    href: routes.contact,
  },
} as const;
