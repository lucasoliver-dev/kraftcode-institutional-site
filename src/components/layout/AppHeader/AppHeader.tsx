import Link from "next/link";
import { routes } from "../../../config/routes";
import { mainNavigation } from "../../../content/navigation";
import { Container, Logo, Typography } from "../../../lib/ui";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  return (
    <header className={styles.root}>
      <Container size="xl">
        <div className={styles.inner}>
          <Link href={routes.home} aria-label="Ir para a página inicial">
            <Logo size="md" />
          </Link>

          <nav className={styles.nav} aria-label="Navegação principal">
            {mainNavigation.map((item) => (
              <Link className={styles.link} href={item.href} key={item.href}>
                <Typography as="span" size="sm" tone="secondary" variant="label" weight="medium">
                  {item.label}
                </Typography>
              </Link>
            ))}
          </nav>

          <Link className={styles.cta} href={routes.contact}>
            <Typography as="span" size="sm" variant="label" weight="bold">
              Conversar
            </Typography>
          </Link>
        </div>
      </Container>
    </header>
  );
}
