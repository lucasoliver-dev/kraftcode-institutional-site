import { z } from "zod";
import { getPhoneDigits } from "../../../lib/utils/masks";

export type ContactProjectValues = {
  name: string;
  email: string;
  whatsapp: string;
  questions: string;
  projectProposal: string;
};

export const contactProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Informe seu nome.")
    .min(2, "Seu nome precisa ter pelo menos 2 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .trim()
    .min(1, "Informe seu WhatsApp.")
    .refine((value) => {
      const digits = getPhoneDigits(value);

      return digits.length >= 12 && digits.length <= 13;
    }, "Informe um WhatsApp com DDI, DDD e número."),
  questions: z.string().trim().optional(),
  projectProposal: z
    .string()
    .trim()
    .min(1, "Conte um pouco sobre sua proposta de projeto.")
    .min(10, "A proposta precisa ter pelo menos 10 caracteres."),
});

export type ContactProjectFormData = z.infer<typeof contactProjectSchema>;
export type ContactProjectField = keyof ContactProjectFormData;
export type ContactProjectErrors = Partial<Record<ContactProjectField, string>>;

export const contactProjectInitialValues: ContactProjectValues = {
  name: "",
  email: "",
  whatsapp: "",
  questions: "",
  projectProposal: "",
};

export function getContactProjectErrors(
  issues: z.ZodError<ContactProjectFormData>["issues"],
) {
  const errors: ContactProjectErrors = {};

  issues.forEach((issue) => {
    const field = issue.path[0] as ContactProjectField | undefined;

    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  });

  return errors;
}
