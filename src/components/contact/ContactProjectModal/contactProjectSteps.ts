import type { ContactProjectField } from "./contactProjectSchema";

export type ContactProjectStep = {
  field: ContactProjectField;
  question: string;
  helper: string;
  placeholder?: string;
  inputType?: "text" | "email" | "tel";
  inputMode?: "text" | "email" | "tel";
  autoComplete?: string;
  rows?: number;
  optional?: boolean;
};

export const contactProjectSteps: ContactProjectStep[] = [
  {
    field: "name",
    question: "Como você prefere ser chamado?",
    helper: "Pode ser seu primeiro nome ou o nome que você usa no dia a dia.",
    placeholder: "Ex: Lucas",
    inputType: "text",
    autoComplete: "name",
  },
  {
    field: "projectProposal",
    question: "Qual é a sua ideia de projeto?",
    helper: "Conte o que você quer construir, melhorar ou automatizar.",
    placeholder: "Ex: Quero criar uma plataforma para...",
    rows: 5,
  },
  {
    field: "questions",
    question: "Você tem alguma dúvida?",
    helper: "Se ainda estiver explorando possibilidades, pode deixar esse campo em branco.",
    placeholder: "Ex: Tenho dúvidas sobre prazo, escopo ou investimento...",
    rows: 4,
    optional: true,
  },
  {
    field: "email",
    question: "Qual é o seu melhor e-mail?",
    helper: "Vamos usar esse contato para retornar com os próximos passos.",
    placeholder: "voce@empresa.com",
    inputType: "email",
    inputMode: "email",
    autoComplete: "email",
  },
  {
    field: "whatsapp",
    question: "Qual é o seu WhatsApp?",
    helper: "Inclua DDI e DDD. A máscara completa automaticamente para o Brasil.",
    placeholder: "+55 (11) 99999-9999",
    inputType: "tel",
    inputMode: "tel",
    autoComplete: "tel",
  },
];
