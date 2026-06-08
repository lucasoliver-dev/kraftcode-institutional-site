import { Bot, Boxes, Code2, Compass, Layers3, Network, PencilRuler, TrendingUp, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Display, Paragraph, Section, Typography } from "../../../lib/ui";
import { enterpriseContent } from "../../../content/enterprise";
import styles from "./EnterprisePage.module.css";

const capabilityIcons: Record<string, ReactNode> = {
  layers: <Layers3 strokeWidth={1.7} />,
  workflow: <Workflow strokeWidth={1.7} />,
  sparkles: <Bot strokeWidth={1.7} />,
  network: <Network strokeWidth={1.7} />,
};

const processIcons: Record<string, ReactNode> = {
  Diagnóstico: <Compass strokeWidth={1.7} />,
  Arquitetura: <Boxes strokeWidth={1.7} />,
  Protótipo: <PencilRuler strokeWidth={1.7} />,
  Desenvolvimento: <Code2 strokeWidth={1.7} />,
  Evolução: <TrendingUp strokeWidth={1.7} />,
};

export function EnterprisePage() {
  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <Display className={styles.title} weight="bold">
              {enterpriseContent.hero.title}
            </Display>
            <div className={styles.copy}>
              <Paragraph className={styles.lead} tone="secondary">
                {enterpriseContent.hero.text}
              </Paragraph>
              <Paragraph className={styles.text} tone="secondary">
                {enterpriseContent.hero.complement}
              </Paragraph>
            </div>
          </div>

          <aside className={styles.summary} aria-label="Resumo enterprise">
            <Typography as="h2" className={styles.summaryTitle} size="xl" variant="heading" weight="semibold">
              {enterpriseContent.audience.title}
            </Typography>
            <Paragraph className={styles.summaryText} size="sm" tone="secondary">
              {enterpriseContent.audience.text}
            </Paragraph>
          </aside>
        </div>

        <div className={styles.capabilities}>
          {enterpriseContent.capabilities.map((capability) => (
            <article className={styles.capabilityCard} key={capability.title}>
              <span className={styles.icon} aria-hidden="true">
                {capabilityIcons[capability.icon]}
              </span>
              <Typography as="h2" className={styles.capabilityTitle} size="xl" variant="heading" weight="semibold">
                {capability.title}
              </Typography>
              <Paragraph className={styles.capabilityText} size="sm" tone="secondary">
                {capability.text}
              </Paragraph>
            </article>
          ))}
        </div>

        <div className={styles.process}>
          <div className={styles.processIntro}>
            <Typography as="h2" className={styles.processTitle} size="2xl" variant="heading" weight="semibold">
              {enterpriseContent.process.title}
            </Typography>
            <Paragraph className={styles.processText} tone="secondary">
              {enterpriseContent.process.text}
            </Paragraph>
          </div>

          <ol className={styles.steps}>
            {enterpriseContent.process.steps.map((step) => (
              <li className={styles.step} key={step}>
                <span className={styles.stepIcon} aria-hidden="true">
                  {processIcons[step]}
                </span>
                <Typography as="span" size="sm" variant="label" weight="medium">
                  {step}
                </Typography>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
