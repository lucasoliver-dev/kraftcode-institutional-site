import { ArrowRight, Building2, ChartNoAxesCombined, DatabaseZap, Landmark, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button, Container, Flex, Overline, Section, Typography } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import styles from "./EnterpriseSection.module.css";

const segmentIcons: Record<string, LucideIcon> = {
  Enterprise: Building2,
  Retail: Landmark,
  Fintech: ChartNoAxesCombined,
  Sports: Trophy,
  Data: DatabaseZap,
};

export function EnterpriseSection() {
  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.layout}>
          <Flex className={styles.content} direction="column" gap="lg">
            <Overline>{homeContent.enterprise.label}</Overline>
            <Typography as="h2" className={styles.title} size="3xl" variant="heading" weight="semibold">
              <span className={styles.titleLine}>Projetos que exigem</span>
              <span className={styles.titleLine}>experiência real.</span>
            </Typography>
          </Flex>

          <Flex className={styles.summary} direction="column" gap="md">
            <Typography className={styles.text} size="md" tone="secondary">
              {homeContent.enterprise.text}
            </Typography>
            <Button
              href={homeContent.enterprise.cta.href}
              iconRight={<ArrowRight strokeWidth={1.8} />}
              label={homeContent.enterprise.cta.label}
              size="md"
              variant="outline"
            />
          </Flex>

          <div className={styles.logoGrid} aria-label="Segmentos enterprise">
            {homeContent.enterprise.segments.map((segment) => {
              const Icon = segmentIcons[segment] ?? Building2;

              return (
                <div className={styles.logo} key={segment}>
                  <Icon className={styles.logoIcon} aria-hidden="true" strokeWidth={1.45} />
                  <Typography as="span" size="sm" tone="muted" variant="label" weight="semibold">
                  {segment}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
