import "server-only";
import type { ContactProjectFormData } from "../../components/contact/ContactProjectModal/contactProjectSchema";
import { siteConfig } from "../../config/site.config";
import { createResendClient } from "./resend";

const defaultFromEmail = "Kraftcode <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getFirstName(name: string) {
  return name.trim().split(/\s+/)[0] || "tudo bem";
}

function getFromEmail() {
  return process.env.CONTACT_FROM_EMAIL || defaultFromEmail;
}

function getLogoUrl() {
  return `${siteConfig.url}/images/logos/brand-ligth.png`;
}

export async function sendContactProposalConfirmationEmail(data: ContactProjectFormData) {
  const resend = createResendClient();
  const firstName = getFirstName(data.name);
  const logoUrl = getLogoUrl();
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    whatsapp: escapeHtml(data.whatsapp),
    projectProposal: escapeHtml(data.projectProposal),
    questions: escapeHtml(data.questions || "não informado"),
    firstName: escapeHtml(firstName),
  };

  return resend.emails.send({
    from: getFromEmail(),
    to: data.email,
    subject: "Recebemos sua proposta na Kraftcode",
    text: [
      `Olá, ${firstName}.`,
      "",
      "Recebemos sua proposta de projeto. Ela já está registrada com a equipe Kraftcode.",
      "",
      "Nos próximos passos, vamos avaliar as informações enviadas, entender o melhor caminho para o seu projeto e retornar o mais breve possível pelo contato informado.",
      "",
      "Resumo recebido:",
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      `Ideia de projeto: ${data.projectProposal}`,
      `Dúvidas: ${data.questions || "não informado"}`,
      "",
      "Atenciosamente,",
      "Equipe Kraftcode",
      siteConfig.url,
    ].join("\n"),
    html: `
      <div style="margin: 0; padding: 0; background: #f3f5f8;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
          Recebemos sua proposta de projeto e vamos retornar o mais breve possível.
        </div>
        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; background: #f3f5f8;">
          <tr>
            <td style="padding: 32px 16px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 640px; margin: 0 auto; border-collapse: collapse; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 18px 48px rgba(15, 23, 42, 0.12);">
                <tr>
                  <td style="padding: 28px 32px; background: #070a12;">
                    <img src="${logoUrl}" width="168" alt="Kraftcode" style="display: block; width: 168px; max-width: 60%; height: auto; border: 0;" />
                  </td>
                </tr>
                <tr>
                  <td style="padding: 32px; font-family: Arial, sans-serif; color: #101318;">
                    <p style="margin: 0 0 10px; font-size: 14px; line-height: 1.5; color: #5b5ff7; font-weight: 700; text-transform: uppercase;">Proposta recebida</p>
                    <h1 style="margin: 0 0 16px; font-size: 28px; line-height: 1.15; color: #101318;">Olá, ${safe.firstName}. Já recebemos sua ideia.</h1>
                    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7; color: #374151;">Sua proposta de projeto foi registrada com a equipe Kraftcode.</p>
                    <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">Nos próximos passos, vamos avaliar as informações enviadas, entender o melhor caminho para o seu projeto e retornar o mais breve possível pelo contato informado.</p>

                    <div style="margin: 28px 0; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">
                      <p style="margin: 0 0 14px; font-size: 15px; line-height: 1.5; color: #101318;"><strong>Resumo recebido</strong></p>
                      <p style="margin: 0 0 8px; font-size: 14px; line-height: 1.6; color: #374151;"><strong>Nome:</strong> ${safe.name}</p>
                      <p style="margin: 0 0 8px; font-size: 14px; line-height: 1.6; color: #374151;"><strong>E-mail:</strong> ${safe.email}</p>
                      <p style="margin: 0 0 8px; font-size: 14px; line-height: 1.6; color: #374151;"><strong>WhatsApp:</strong> ${safe.whatsapp}</p>
                      <p style="margin: 0 0 8px; font-size: 14px; line-height: 1.6; color: #374151;"><strong>Ideia de projeto:</strong> ${safe.projectProposal}</p>
                      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #374151;"><strong>Dúvidas:</strong> ${safe.questions}</p>
                    </div>

                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding-top: 4px; font-family: Arial, sans-serif;">
                          <p style="margin: 0 0 8px; font-size: 15px; line-height: 1.6; color: #101318;"><strong>Equipe Kraftcode</strong></p>
                          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #4b5563;">Software, IA e produtos digitais escaláveis.</p>
                          <p style="margin: 8px 0 0; font-size: 14px; line-height: 1.6;">
                            <a href="${siteConfig.url}" style="color: #3948f8; text-decoration: none;">${siteConfig.url.replace("https://", "")}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 18px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-family: Arial, sans-serif;">
                    <p style="margin: 0; font-size: 12px; line-height: 1.6; color: #6b7280;">Este e-mail confirma o recebimento da sua proposta enviada pelo site da Kraftcode.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}
