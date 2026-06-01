import type { ReactNode } from "react";
import { Typography } from "../Typography";

type TextProps = {
  children: ReactNode;
  as?: "p" | "span" | "strong";
  size?: "sm" | "md" | "lg";
  tone?: "primary" | "secondary" | "muted";
  align?: "left" | "center";
  className?: string;
};

export function Text({
  children,
  as = "p",
  size = "md",
  tone = "secondary",
  align = "left",
  className,
}: TextProps) {
  return (
    <Typography
      align={align}
      as={as}
      className={className}
      size={size}
      tone={tone}
      variant="paragraph"
    >
      {children}
    </Typography>
  );
}
