import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import { Typography, type TypographySize } from "../Typography";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  label?: ReactNode;
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: "filled" | "outline" | "ghost" | "primary" | "secondary";
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
  label,
  href,
  iconLeft,
  iconRight,
  variant = "primary",
  accent = "neutral",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const content = label ?? children;
  const resolvedVariant =
    variant === "primary" ? "filled" : variant === "secondary" ? "outline" : variant;
  const classNamesValue = classNames(
    styles.root,
    styles[resolvedVariant],
    styles[accent],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  );

  const inner = (
    <>
      {iconLeft ? <span className={styles.icon}>{iconLeft}</span> : null}
      {content ? (
        <Typography
          as="span"
          className={styles.label}
          size={typographySize[size]}
          variant="label"
          weight="semibold"
        >
          {content}
        </Typography>
      ) : null}
      {iconRight ? <span className={styles.icon}>{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link className={classNamesValue} href={href}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classNamesValue} type={type} {...props}>
      {inner}
    </button>
  );
}
