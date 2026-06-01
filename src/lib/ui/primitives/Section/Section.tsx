import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: "default" | "muted" | "kraftchat" | "kraftscore";
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export function Section({
  children,
  id,
  tone = "default",
  spacing = "lg",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(styles.root, styles[tone], styles[spacing], className)}
    >
      {children}
    </section>
  );
}
