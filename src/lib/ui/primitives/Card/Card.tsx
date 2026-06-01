import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  variant?: "default" | "elevated" | "outline" | "glass";
  accent?: "neutral" | "kraftchat" | "kraftscore";
  className?: string;
};

export function Card({
  children,
  variant = "default",
  accent = "neutral",
  className,
}: CardProps) {
  return (
    <div className={classNames(styles.root, styles[variant], styles[accent], className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
