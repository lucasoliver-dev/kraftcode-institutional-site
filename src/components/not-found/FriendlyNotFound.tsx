import Link from "next/link";

import styles from "./FriendlyNotFound.module.scss";

export function FriendlyNotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.content} aria-labelledby="not-found-title">
        <div className={styles.textBlock}>
          <span className={styles.eyebrow}>Erro 404</span>

          <h1 id="not-found-title" className={styles.title}>
            Opa, essa página ficará pronta em breve.
          </h1>

          <p className={styles.description}>
            Parece que esse caminho ainda está em construção. Enquanto isso,
            você pode voltar para a página inicial ou explorar outras áreas do site.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={`${styles.button} ${styles.primaryButton}`}>
              Voltar para o início
            </Link>

            <Link href="/#solucoes" className={`${styles.button} ${styles.secondaryButton}`}>
              Explorar soluções
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/illustrations/404-mascot.svg"
            alt="Ilustração amigável para página não encontrada"
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
}
