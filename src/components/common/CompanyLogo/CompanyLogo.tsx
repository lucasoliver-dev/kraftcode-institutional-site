import { Typography } from "../../../lib/ui";
import { classNames } from "../../../lib/ui";
import styles from "./CompanyLogo.module.css";

type CompanyLogoProps = {
  name: string;
  src?: string;
  size?: "sm" | "md";
  className?: string;
};

export function CompanyLogo({ name, src, size = "md", className }: CompanyLogoProps) {
  return (
    <div className={classNames(styles.root, styles[size], className)} aria-label={`Logo ${name}`}>
      {src ? (
        <img className={styles.image} src={src} alt="" loading="lazy" />
      ) : (
        <Typography as="span" size="sm" variant="label" weight="semibold">
          {name}
        </Typography>
      )}
    </div>
  );
}
