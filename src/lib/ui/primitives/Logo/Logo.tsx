import { classNames } from "../../utils/classNames";
import { Typography, type TypographySize } from "../Typography";
import styles from "./Logo.module.css";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const textSize: Record<NonNullable<LogoProps["size"]>, TypographySize> = {
  sm: "md",
  md: "lg",
  lg: "xl",
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  return (
    <span className={classNames(styles.root, styles[size], className)} aria-label="Kraftcode">
      <svg
        className={styles.mark}
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="48" height="48" rx="12" fill="#F6F7F9" />
        <path d="M15 12h7v12l10-12h8L28.5 25.4 41 36h-9l-10-9v9h-7V12Z" fill="#08090C" />
        <path d="M29 13h9L25 28l-3-5 7-10Z" fill="#FF3B4F" />
      </svg>
      {showText ? (
        <Typography as="span" className={styles.text} size={textSize[size]} variant="label" weight="bold">
          Kraftcode
        </Typography>
      ) : null}
    </span>
  );
}
