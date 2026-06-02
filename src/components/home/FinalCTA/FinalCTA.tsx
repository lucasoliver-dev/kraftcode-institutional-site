import { ArrowRight } from "lucide-react";
import { Button, Caption, Display, Section, Typography } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <Section className={styles.section} spacing="sm">
      <div className={styles.rail}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <Caption className={styles.title}>
              {homeContent.finalCta.title}
            </Caption>
            <Typography className={styles.text} tone="secondary">
              {homeContent.finalCta.text}
            </Typography>
          </div>
          <Button
            href={homeContent.finalCta.href}
            iconRight={<ArrowRight strokeWidth={1.8} />}
            label={homeContent.finalCta.label}
            size="md"
            variant="filled"
          />
        </div>
      </div>
    </Section>
  );
}
