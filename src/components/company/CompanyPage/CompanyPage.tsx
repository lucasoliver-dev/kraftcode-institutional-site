import { Bot, ChartNoAxesCombined, Code2 } from "lucide-react";
import type { ReactNode } from "react";
import { Container, Display, Paragraph, Section } from "../../../lib/ui";
import { companyContent } from "../../../content/company";
import styles from "./CompanyPage.module.css";

const frontIcons: Record<string, ReactNode> = {
  code: <Code2 strokeWidth={1.7} />,
  bot: <Bot strokeWidth={1.7} />,
  chart: <ChartNoAxesCombined strokeWidth={1.7} />,
};

export function CompanyPage() {
  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.layout}>
          <div className={styles.content}>
            <Display className={styles.title} weight="bold">
              {companyContent.hero.title}
            </Display>
            <div className={styles.copy}>
              {companyContent.hero.paragraphs.map((paragraph) => (
                <Paragraph className={styles.text} key={paragraph} tone="secondary">
                  {paragraph}
                </Paragraph>
              ))}
            </div>
          </div>

          <aside className={styles.frontsPanel} aria-label="Frentes de atuação da Kraftcode">
            {companyContent.fronts.map((front) => (
              <article className={styles.frontCard} key={front.title}>
                <span className={styles.icon} aria-hidden="true">
                  {frontIcons[front.icon]}
                </span>
                <div className={styles.frontContent}>
                  <Paragraph className={styles.frontTitle} weight="semibold">
                    {front.title}
                  </Paragraph>
                  <Paragraph className={styles.frontText} size="sm" tone="secondary">
                    {front.text}
                  </Paragraph>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </Container>
    </Section>
  );
}
