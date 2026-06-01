import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export function Container({ children, size = "lg", className }: ContainerProps) {
  return (
    <div className={classNames(styles.root, styles[size], className)}>
      {children}
    </div>
  );
}
