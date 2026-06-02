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


function getEmailCss() {
  return emailCss;
}

type SafeContactProjectData = {
  name: string;
  email: string;
  whatsapp: string;
  projectProposal: string;
  questions: string;
  firstName: string;
};

function renderSummaryRow(label: string, value: string, isLast = false) {
  return `
    <tr>
      <td class="proposal-summary-row${isLast ? " proposal-summary-row-last" : ""}">
        <p class="proposal-summary-label">${label}</p>
        <p class="proposal-summary-value">${value}</p>
      </td>
    </tr>
  `;
}

function renderProposalSummary(data: SafeContactProjectData) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" class="proposal-summary">
      <tr>
        <td class="proposal-summary-header">
          <p class="proposal-summary-eyebrow">Resumo da proposta</p>
          <h2 class="proposal-summary-title">Informações enviadas</h2>
        </td>
      </tr>
      <tr>
        <td class="proposal-summary-body">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            ${renderSummaryRow("Nome", data.name)}
            ${renderSummaryRow("E-mail", data.email)}
            ${renderSummaryRow("WhatsApp", data.whatsapp)}
            ${renderSummaryRow("Ideia de projeto", data.projectProposal)}
            ${renderSummaryRow("Dúvidas", data.questions, true)}
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
      <style>${getEmailCss()}</style>
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

                    ${renderProposalSummary(safe)}

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
