import { routes } from "./routes";

export const siteConfig = {
  name: "Kraftcode",
  description: "Software, IA e produtos digitais escaláveis.",
  founder: "Lucas Oliveira",
  url: "https://www.kraftcode.com.br",
  products: [
    {
      name: "Kraftchat",
      href: routes.kraftchat,
      accent: "kraftchat",
    },
    {
      name: "Kraftscore",
      href: routes.kraftscore,
      accent: "kraftscore",
    },
  ],
  social: {
    // linkedin: "",
    // github: "",
    // instagram: "",
  },
} as const;
