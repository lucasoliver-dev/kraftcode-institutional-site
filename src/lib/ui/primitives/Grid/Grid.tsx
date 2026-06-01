import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Grid.module.css";

type GridProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
};

export function Grid({ children, columns = 3, gap = "md", className }: GridProps) {
  return (
    <div
      className={classNames(
        styles.root,
        styles[`columns${columns}`],
        styles[gap],
        className,
      )}
    >
      {children}
    </div>
  );
}
