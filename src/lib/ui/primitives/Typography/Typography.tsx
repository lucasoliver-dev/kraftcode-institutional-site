import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Typography.module.css";

export type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "small"
  | "strong";

export type TypographyVariant =
  | "display"
  | "heading"
  | "subtitle"
  | "paragraph"
  | "label"
  | "caption"
  | "overline";

export type TypographySize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export type TypographyTone =
  | "primary"
  | "secondary"
  | "muted"
  | "inverse"
  | "kraftchat"
  | "kraftscore"
  | "danger"
  | "success";

export type TypographyAlign = "left" | "center" | "right";

export type TypographyTransform = "none" | "uppercase" | "lowercase" | "capitalize";

type TypographyProps<T extends TypographyElement = "p"> = {
  children: ReactNode;
  as?: T;
  variant?: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  tone?: TypographyTone;
  align?: TypographyAlign;
  transform?: TypographyTransform;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const defaultElementByVariant: Record<TypographyVariant, TypographyElement> = {
  display: "h1",
  heading: "h2",
  subtitle: "p",
  paragraph: "p",
  label: "span",
  caption: "small",
  overline: "span",
};

const defaultSizeByVariant: Record<TypographyVariant, TypographySize> = {
  display: "5xl",
  heading: "3xl",
  subtitle: "xl",
  paragraph: "md",
  label: "sm",
  caption: "xs",
  overline: "xs",
};

const defaultWeightByVariant: Record<TypographyVariant, TypographyWeight> = {
  display: "bold",
  heading: "bold",
  subtitle: "medium",
  paragraph: "regular",
  label: "semibold",
  caption: "regular",
  overline: "bold",
};

export function Typography<T extends TypographyElement = "p">({
  children,
  as,
  variant = "paragraph",
  size,
  weight,
  tone = "primary",
  align = "left",
  transform,
  className,
  ...props
}: TypographyProps<T>) {
  const Component = (as ?? defaultElementByVariant[variant]) as ElementType;
  const resolvedSize = size ?? defaultSizeByVariant[variant];
  const resolvedWeight = weight ?? defaultWeightByVariant[variant];
  const resolvedTransform = transform ?? (variant === "overline" ? "uppercase" : "none");

  return (
    <Component
      className={classNames(
        styles.root,
        styles[variant],
        styles[resolvedSize],
        styles[resolvedWeight],
        styles[tone],
        styles[align],
        styles[resolvedTransform],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
