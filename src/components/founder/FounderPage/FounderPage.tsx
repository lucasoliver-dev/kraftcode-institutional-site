import type { ReactNode } from "react";
import { Container, Display, Paragraph, Section, Typography } from "../../../lib/ui";
import { CompanyLogo } from "../../common";
import { founderContent } from "../../../content/founder";
import styles from "./FounderPage.module.css";

const socialIcons: Record<string, ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.3 8.7h3.1v10H5.3v-10Zm1.6-4.9c1 0 1.7.7 1.7 1.6s-.7 1.6-1.7 1.6-1.7-.7-1.7-1.6.7-1.6 1.7-1.6Zm5 4.9h3v1.4h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v5.5h-3.1v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3.1v-10Z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.6 8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.2 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.8 2.8h8.4a5 5 0 0 1 5 5v8.4a5 5 0 0 1-5 5H7.8a5 5 0 0 1-5-5V7.8a5 5 0 0 1 5-5Zm0 1.9a3.1 3.1 0 0 0-3.1 3.1v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm4.2 3.2a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.9a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.7-2.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export function FounderPage() {
  const technologyLoop = [...founderContent.technologies, ...founderContent.technologies];

  return (
    <>
      <Section className={styles.heroSection} spacing="lg">
        <Container size="xl">
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <Display className={styles.title} weight="bold">
                {founderContent.hero.title}
              </Display>
              <div className={styles.identity}>
                <Typography as="h2" className={styles.name} size="2xl" variant="heading" weight="semibold">
                  {founderContent.hero.name}
                </Typography>
                <Paragraph className={styles.role} tone="secondary">
                  {founderContent.hero.role}
                </Paragraph>
              </div>

              <div className={styles.socials} aria-label="Redes sociais">
                {founderContent.socials.map((social) => {
                  const icon = socialIcons[social.icon];

                  if (!icon) {
                    return null;
                  }

                  return social.href ? (
                    <a
                      className={styles.social}
                      href={social.href}
                      key={social.label}
                      rel="noreferrer"
                      target="_blank"
                      aria-label={social.label}
                    >
                      {icon}
                    </a>
                  ) : (
                    <span className={styles.social} key={social.label} aria-label={social.label} role="img">
                      {icon}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className={styles.portrait}>
              <img
                alt="Lucas Oliveira, fundador da Kraftcode"
                className={styles.photo}
                src={founderContent.hero.photo}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.bioSection} spacing="md" tone="muted">
        <Container size="xl">
          <div className={styles.bioGrid}>
            <Typography as="h2" className={styles.sectionTitle} size="2xl" variant="heading" weight="semibold">
              Biografia
            </Typography>
            <div className={styles.bioCopy}>
              {founderContent.bio.map((paragraph) => (
                <Paragraph className={styles.bioText} key={paragraph} tone="secondary">
                  {paragraph}
                </Paragraph>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.techSection} spacing="md">
        <Container size="xl">
          <div className={styles.techHeader}>
            <Typography as="h2" className={styles.sectionTitle} size="2xl" variant="heading" weight="semibold">
              Tecnologias
            </Typography>
            <Paragraph className={styles.techLead} tone="secondary">
              Principais ferramentas e frentes técnicas presentes na minha atuação em produtos digitais, backend, IA e integrações.
            </Paragraph>
          </div>

          <div className={styles.techViewport} aria-label="Tecnologias de atuação">
            <div className={styles.techTrack}>
              {technologyLoop.map((technology, index) => (
                <div
                  className={styles.techPill}
                  key={`${technology.name}-${index}`}
                  aria-hidden={index >= founderContent.technologies.length}
                >
                  {"logo" in technology ? (
                    <>
                      <img className={styles.techLogo} src={technology.logo} alt="" loading="lazy" />
                      <Typography as="span" className={styles.techName} size="sm" variant="label" weight="medium">
                        {technology.name}
                      </Typography>
                    </>
                  ) : (
                    <Typography as="span" className={styles.techWordmark} size="xl" variant="label" weight="semibold">
                      {technology.name}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.projectsSection} spacing="lg">
        <Container size="xl">
          <div className={styles.projectsHeader}>
            <Typography as="h2" className={styles.sectionTitle} size="2xl" variant="heading" weight="semibold">
              Empresas e projetos
            </Typography>
            <Paragraph className={styles.projectsLead} tone="secondary">
              Experiências técnicas em produtos digitais, e-commerce, pagamentos, backoffice e operações de grande escala.
            </Paragraph>
          </div>

          <div className={styles.projectsGrid}>
            {founderContent.projects.map((project) => (
              <article className={styles.projectCard} key={project.company}>
                <CompanyLogo name={project.company} src={project.logo} />
                <Paragraph className={styles.projectText} size="sm" tone="secondary">
                  {project.context}
                </Paragraph>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
