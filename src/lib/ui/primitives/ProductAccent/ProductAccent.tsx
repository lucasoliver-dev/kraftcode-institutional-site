import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./ProductAccent.module.css";

type ProductAccentProps = {
  product: "kraftchat" | "kraftscore";
  children?: ReactNode;
  className?: string;
};

export function ProductAccent({ product, children, className }: ProductAccentProps) {
  return <div className={classNames(styles.root, styles[product], className)}>{children}</div>;
}
