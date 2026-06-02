import styles from "./HeroVisual.module.css";

export function HeroVisual() {
  return (
    <figure className={styles.root} aria-label="Arquitetura digital em camadas">
      <img
        className={styles.image}
        src="/images/products/background-icon.png"
        alt=""
        aria-hidden="true"
      />
    </figure>
  );
}
