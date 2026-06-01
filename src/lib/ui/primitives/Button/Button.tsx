import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import { Typography, type TypographySize } from "../Typography";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  accent?: "neutral" | "kraftchat" | "kraftscore";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const typographySize: Record<NonNullable<ButtonProps["size"]>, TypographySize> = {
  sm: "sm",
  md: "sm",
  lg: "md",
};

export function Button({
  children,
  variant = "primary",
  accent = "neutral",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.root,
        styles[variant],
        styles[accent],
        styles[size],
        fullWidth && styles.fullWidth,
        className,
      )}
      type={type}
      {...props}
    >
      <Typography
        as="span"
        className={styles.label}
        size={typographySize[size]}
        variant="label"
        weight="bold"
      >
        {children}
      </Typography>
    </button>
  );
}
