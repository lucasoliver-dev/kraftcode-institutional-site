import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./ImageFrame.module.css";

type ImageFrameProps = {
  children: ReactNode;
  ratio?: "16/9" | "4/3" | "1/1" | "auto";
  accent?: "neutral" | "kraftchat" | "kraftscore";
  className?: string;
};

const ratioClass = {
  "16/9": styles.ratio169,
  "4/3": styles.ratio43,
  "1/1": styles.ratio11,
  auto: styles.auto,
};

export function ImageFrame({
  children,
  ratio = "16/9",
  accent = "neutral",
  className,
}: ImageFrameProps) {
  return (
    <div className={classNames(styles.root, ratioClass[ratio], styles[accent], className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
