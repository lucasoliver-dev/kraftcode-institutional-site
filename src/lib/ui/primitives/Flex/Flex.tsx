import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Flex.module.css";

type FlexProps = {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "between" | "end";
  wrap?: boolean;
  className?: string;
};

const alignClass = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
};

const justifyClass = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
  end: styles.justifyEnd,
};

export function Flex({
  children,
  direction = "row",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  className,
}: FlexProps) {
  return (
    <div
      className={classNames(
        styles.root,
        styles[direction],
        styles[gap],
        alignClass[align],
        justifyClass[justify],
        wrap && styles.wrap,
        className,
      )}
    >
      {children}
    </div>
  );
}
