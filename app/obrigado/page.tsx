import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Button, Container, Section, Typography } from "../../src/lib/ui";
import { routes } from "../../src/config/routes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Obrigado",
  description: "Recebemos sua proposta de projeto.",
};

export default function ObrigadoPage() {
  return (
    <Section className={styles.section} spacing="lg">
      <Container size="md">
        <div className={styles.content}>
          <img className={styles.brand} src="/images/logos/brand-ligth.png" alt="Kraftcode" />
          <CheckCircle className={styles.icon} aria-hidden="true" strokeWidth={1.6} />
          <Typography as="h1" className={styles.title} size="4xl" weight="bold">
            Recebemos sua mensagem
          </Typography>
          <Typography className={styles.text} tone="secondary">
            Obrigado por compartilhar sua ideia. Em breve vamos analisar as informações e retornar pelo contato informado.
          </Typography>
          <Button href={routes.home} label="Voltar para o início" size="md" variant="filled" />
        </div>
      </Container>
    </Section>
  );
}
