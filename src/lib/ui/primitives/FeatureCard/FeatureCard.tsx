import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import { Typography } from "../Typography";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  title: string;
  description: string | readonly string[];
  icon?: ReactNode;
  className?: string;
};

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <article className={classNames(styles.root, className)}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}

      <div className={styles.copy}>
        <Typography as="h3" className={styles.title} size="sm" variant="heading" weight="semibold">
          {title}
        </Typography>

        <Typography as="p" className={styles.description} size="xs" tone="secondary" variant="paragraph">
          {descriptionLines.map((line) => (
            <span className={styles.descriptionLine} key={line}>
              {line}
            </span>
          ))}
        </Typography>
      </div>
    </article>
  );
}
