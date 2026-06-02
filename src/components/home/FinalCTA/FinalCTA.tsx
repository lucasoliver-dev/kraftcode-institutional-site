"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactProjectModal } from "../../contact/ContactProjectModal";
import { Button, Caption, Section, Typography } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
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
              iconRight={<ArrowRight strokeWidth={1.8} />}
              label={homeContent.finalCta.label}
              onClick={() => setIsContactOpen(true)}
              size="md"
              variant="filled"
            />
          </div>
        </div>
      </Section>
      <ContactProjectModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
