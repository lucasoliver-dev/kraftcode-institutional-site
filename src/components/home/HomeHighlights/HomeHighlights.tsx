import { Handshake, Layers3, Target, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Heading, Paragraph } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import styles from "./HomeHighlights.module.css";

const icons: LucideIcon[] = [Target, Users, Layers3, Handshake];

export function HomeHighlights() {
  return (
    <div className={styles.grid}>
      {homeContent.highlights.map((item, index) => {
        const Icon = icons[index];

        return (
          <div className={styles.item} key={item.title}>
            <Icon className={styles.icon} aria-hidden="true" strokeWidth={1.6} />
            <div className={styles.copy}>
              <Heading as="h2" size="sm" weight="semibold">
                {item.title}
              </Heading>
              <Paragraph size="sm" tone="muted">
                {item.description}
              </Paragraph>
            </div>
          </div>
        );
      })}
        </div>
  );
}
