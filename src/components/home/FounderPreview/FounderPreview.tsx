import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button, Container, Flex, Overline, Section, Typography } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import styles from "./FounderPreview.module.css";

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.3 8.7h3.1v10H5.3v-10Zm1.6-4.9c1 0 1.7.7 1.7 1.6s-.7 1.6-1.7 1.6-1.7-.7-1.7-1.6.7-1.6 1.7-1.6Zm5 4.9h3v1.4h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v5.5h-3.1v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3.1v-10Z"
        fill="currentColor"
      />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.6 8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.2 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"
        fill="currentColor"
      />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.8 2.8h8.4a5 5 0 0 1 5 5v8.4a5 5 0 0 1-5 5H7.8a5 5 0 0 1-5-5V7.8a5 5 0 0 1 5-5Zm0 1.9a3.1 3.1 0 0 0-3.1 3.1v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm4.2 3.2a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.9a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.7-2.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const socialLinks: Partial<Record<string, string>> = {
  LinkedIn: "https://www.linkedin.com/in/lucasalveseng/",
  GitHub: "https://github.com/lucasoliver-dev",
};

export function FounderPreview() {
  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.layout}>
          <div className={styles.heading}>
            <Overline>{homeContent.founder.label}</Overline>
            <Typography as="h2" className={styles.title} size="3xl" variant="heading" weight="semibold">
              <span className={styles.titleLine}>Liderança técnica.</span>
              <span className={styles.titleLine}>Visão de produto.</span>
            </Typography>
          </div>

          <Flex className={styles.content} direction="column" gap="md">
            <Typography className={styles.text} size="md" tone="secondary">
              {homeContent.founder.text}
            </Typography>
            <Button
              href={homeContent.founder.cta.href}
              iconRight={<ArrowRight strokeWidth={1.8} />}
              label={homeContent.founder.cta.label}
              size="md"
              variant="outline"
            />
          </Flex>

          <div className={styles.portrait}>
            <img
              alt="Lucas Oliveira, fundador da Kraftcode"
              className={styles.photo}
              src="/images/founder/perfil-lucas.png"
            />
          </div>

          <div className={styles.socials} aria-label="Links sociais">
            {homeContent.founder.socials.map((social) => {
              const icon = socialIcons[social];
              const href = socialLinks[social];

              if (!icon) {
                return null;
              }

              return href ? (
                <a
                  className={styles.social}
                  href={href}
                  key={social}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={social}
                >
                  {icon}
                </a>
              ) : (
                <span className={styles.social} key={social} aria-label={social} role="img">
                  {icon}
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
