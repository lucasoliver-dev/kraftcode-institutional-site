import Link from "next/link";
import { routes } from "../../../config/routes";
import { siteConfig } from "../../../config/site.config";
import { mainNavigation } from "../../../content/navigation";
import { Container, Flex, Logo, Typography } from "../../../lib/ui";
import styles from "./AppFooter.module.css";

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <Container size="xl">
        <div className={styles.inner}>
          <Flex className={styles.brand} direction="column" gap="md">
            <Logo size="md" />
            <Typography tone="secondary">{siteConfig.description}</Typography>
          </Flex>

          <div className={styles.group}>
            <Typography as="h2" size="sm" variant="label" weight="bold">
              Navegação
            </Typography>
            <div className={styles.links}>
              {mainNavigation.map((item) => (
                <Link className={styles.link} href={item.href} key={item.href}>
                  <Typography as="span" size="sm" tone="secondary">
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.group}>
            <Typography as="h2" size="sm" variant="label" weight="bold">
              Produtos
            </Typography>
            <div className={styles.links}>
              {siteConfig.products.map((product) => (
                <Link className={styles.link} href={product.href} key={product.href}>
                  <Typography as="span" size="sm" tone="secondary">
                    {product.name}
                  </Typography>
                </Link>
              ))}
              <Link className={styles.link} href={routes.enterprise}>
                <Typography as="span" size="sm" tone="secondary">
                  Enterprise Software
                </Typography>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <Typography size="sm" tone="muted">
            © {year} {siteConfig.name}. Fundada por {siteConfig.founder}.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
