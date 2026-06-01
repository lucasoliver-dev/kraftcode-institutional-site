import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import { Typography } from "../Typography";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  accent?: "neutral" | "kraftchat" | "kraftscore";
  className?: string;
};

export function Badge({ children, accent = "neutral", className }: BadgeProps) {
  return (
    <span className={classNames(styles.root, styles[accent], className)}>
      <Typography
        as="span"
        className={styles.text}
        size="xs"
        transform="none"
        variant="label"
        weight="bold"
      >
        {children}
      </Typography>
    </span>
  );
}
