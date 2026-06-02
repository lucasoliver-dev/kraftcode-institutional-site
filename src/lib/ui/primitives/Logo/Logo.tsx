import { classNames } from "../../utils/classNames";
import styles from "./Logo.module.css";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const source = showText ? "/images/logos/brand-ligth.png" : "/images/logos/logo.png";

  return (
    <span className={classNames(styles.root, styles[size], className)} aria-label="Kraftcode">
      <img className={styles.image} src={source} alt="" aria-hidden="true" />
    </span>
  );
}
