import { ArrowRight } from "lucide-react";
import { Button, Container, Display, Flex, Overline, Paragraph, Section } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import { HomeHighlights } from "../HomeHighlights";
import { HeroVisual } from "../HeroVisual";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <div className={styles.layout}>
          <div className={styles.content}>
            <Flex direction="column" gap="lg">
              <Overline className={styles.eyebrow}>{homeContent.hero.badge}</Overline>
              <Display
                className={styles.title}
                weight="bold"
                >
                Construímos tecnologia que gera
                <span className={styles.titleMuted}> impacto real.</span>
              </Display>
              <Paragraph className={styles.subtitle} tone="secondary">
                {homeContent.hero.subtitle}
              </Paragraph>
            </Flex>

            <Flex className={styles.actions} gap="sm" wrap>
              {homeContent.hero.ctas.map((cta) => (
                <Button
                  href={cta.href}
                  iconRight={cta.variant === "primary" ? <ArrowRight strokeWidth={1.8} /> : undefined}
                  key={cta.href}
                  label={cta.label}
                  size="md"
                  variant={cta.variant === "primary" ? "filled" : "outline"}
                />
              ))}
            </Flex>
          </div>

          <HeroVisual />
        </div>
        <HomeHighlights />
      </Container>
    </Section>
  );
}
