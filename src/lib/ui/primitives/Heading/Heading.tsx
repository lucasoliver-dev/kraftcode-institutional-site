import type { ReactNode } from "react";
import { Typography, type TypographySize } from "../Typography";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p";
  size?: "hero" | "xl" | "lg" | "md" | "sm";
  align?: "left" | "center";
  className?: string;
};

export function Heading({
  children,
  as = "h2",
  size = "lg",
  align = "left",
  className,
}: HeadingProps) {
  const sizeMap: Record<NonNullable<HeadingProps["size"]>, TypographySize> = {
    hero: "5xl",
    xl: "4xl",
    lg: "3xl",
    md: "2xl",
    sm: "lg",
  };

  return (
    <Typography
      align={align}
      as={as}
      className={className}
      size={sizeMap[size]}
      variant={size === "hero" ? "display" : "heading"}
      weight="bold"
    >
      {children}
    </Typography>
  );
}
