import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ContactProjectFormData } from "../../components/contact/ContactProjectModal/contactProjectSchema";
import { siteConfig } from "../../config/site.config";
import { createResendClient } from "./resend";

const defaultFromEmail = "Kraftcode <onboarding@resend.dev>";
const emailCss = readFileSync(join(process.cwd(), "src/lib/email/contactProposalEmail.css"), "utf8");

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
  return `${siteConfig.url}/images/logos/email-brand-light.png`;
}

function getTicketImageUrl() {
  return `${siteConfig.url}/images/email/proposal-ticket.png`;
}

function getEmailCss(ticketImageUrl: string) {
  return emailCss.replaceAll("__TICKET_IMAGE_URL__", ticketImageUrl);
}

type SafeContactProjectData = {
  name: string;
  email: string;
  whatsapp: string;
  projectProposal: string;
  questions: string;
  firstName: string;
};

function renderTicketRow(label: string, value: string) {
  return `
    <tr>
      <td class="proposal-ticket-row">
        <p class="proposal-ticket-row-label">${label}</p>
        <p class="proposal-ticket-row-value">${value}</p>
      </td>
    </tr>
  `;
}

function renderProposalTicket(data: SafeContactProjectData) {
  const ticketImageUrl = getTicketImageUrl();

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" class="proposal-ticket-wrap">
      <tr>
        <td class="proposal-ticket-background">
          <table role="presentation" cellpadding="0" cellspacing="0" class="proposal-ticket">
            <tr>
              <td background="${ticketImageUrl}" class="proposal-ticket-content">
                <p class="proposal-ticket-label">Ticket de proposta</p>
                <p class="proposal-ticket-title">Kraftchat</p>
                <table role="presentation" cellpadding="0" cellspacing="0" class="proposal-ticket-table">
            ${renderTicketRow("Nome", data.name)}
            ${renderTicketRow("E-mail", data.email)}
            ${renderTicketRow("WhatsApp", data.whatsapp)}
            ${renderTicketRow("Ideia de projeto", data.projectProposal)}
            ${renderTicketRow("Dúvidas", data.questions)}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

export async function sendContactProposalConfirmationEmail(data: ContactProjectFormData) {
  const resend = createResendClient();
  const firstName = getFirstName(data.name);
  const logoUrl = getLogoUrl();
  const ticketImageUrl = getTicketImageUrl();
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
      <style>${getEmailCss(ticketImageUrl)}</style>
      <div class="email-root">
        <div class="email-preheader">
          Recebemos sua proposta de projeto e vamos retornar o mais breve possível.
        </div>
        <table role="presentation" cellpadding="0" cellspacing="0" class="email-page">
          <tr>
            <td class="email-shell-cell">
              <table role="presentation" cellpadding="0" cellspacing="0" class="email-card">
                <tr>
                  <td class="email-header">
                    <img src="${logoUrl}" width="168" alt="Kraftcode" class="email-logo" />
                  </td>
                </tr>
                <tr>
                  <td class="email-content">
                    <p class="email-eyebrow">Proposta recebida</p>
                    <h1 class="email-title">Olá, ${safe.firstName}. Já recebemos sua ideia.</h1>
                    <p class="email-copy">Sua proposta de projeto foi registrada com a equipe Kraftcode.</p>
                    <p class="email-copy email-copy-last">Nos próximos passos, vamos avaliar as informações enviadas, entender o melhor caminho para o seu projeto e retornar o mais breve possível pelo contato informado.</p>

                    ${renderProposalTicket(safe)}

                    <table role="presentation" cellpadding="0" cellspacing="0" class="email-signature">
                      <tr>
                        <td class="email-signature-cell">
                          <p class="email-signature-name"><strong>Equipe Kraftcode</strong></p>
                          <p class="email-signature-copy">Software, IA e produtos digitais escaláveis.</p>
                          <p class="email-signature-link-row">
                            <a href="${siteConfig.url}" class="email-signature-link">${siteConfig.url.replace("https://", "")}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="email-footer">
                    <p class="email-footer-copy">Este e-mail confirma o recebimento da sua proposta enviada pelo site da Kraftcode.</p>
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
