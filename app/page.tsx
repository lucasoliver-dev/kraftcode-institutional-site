import Link from "next/link";
import {
  Badge,
  Card,
  Container,
  Flex,
  Grid,
  ImageFrame,
  Section,
  Typography,
} from "../src/lib/ui";
import { homeContent } from "../src/content/home";
import { products } from "../src/content/products";
import { solutions } from "../src/content/solutions";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Section spacing="xl" tone="muted">
        <Container size="xl">
          <div className={styles.heroShell}>
            <div className={styles.heroContent}>
              <Flex direction="column" gap="lg">
                <Badge>{homeContent.hero.badge}</Badge>
                <Typography as="h1" variant="display" size="5xl" weight="bold">
                  {homeContent.hero.title}
                </Typography>
                <Typography variant="subtitle" size="lg" tone="secondary">
                  {homeContent.hero.subtitle}
                </Typography>
              </Flex>

              <Flex className={styles.heroActions} gap="sm" wrap>
                {homeContent.hero.ctas.map((cta) => (
                  <Link
                    className={`${styles.linkButton} ${
                      cta.variant === "primary" ? styles.primaryLink : styles.secondaryLink
                    }`}
                    href={cta.href}
                    key={cta.href}
                  >
                    <Typography as="span" size="md" variant="label" weight="bold">
                      {cta.label}
                    </Typography>
                  </Link>
                ))}
              </Flex>
            </div>

            <ImageFrame ratio="16/9">
              <div className={styles.visual} aria-hidden="true">
                <div className={styles.signal} />
              </div>
            </ImageFrame>
          </div>

          <Grid className={styles.cards} columns={3} gap="md">
            {homeContent.cards.map((card) => (
              <Card key={card.title} accent={card.accent} variant="glass">
                <Flex className={styles.cardContent} direction="column" gap="xl">
                  <div className={styles.cardMeta}>
                    <Badge accent={card.accent}>{card.label}</Badge>
                    <Typography as="h2" variant="heading" size="lg" weight="bold">
                      {card.title}
                    </Typography>
                    <Typography size="sm" tone="secondary">
                      {card.text}
                    </Typography>
                  </div>
                  <Link href={card.href}>
                    <Typography as="span" size="sm" tone="secondary" variant="label" weight="bold">
                      Explorar
                    </Typography>
                  </Link>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="xl">
          <div className={styles.sectionHeader}>
            <Typography as="h2" size="3xl" variant="heading" weight="bold">
              Produtos e soluções para escalar.
            </Typography>
          </div>

          <Grid columns={3} gap="md">
            {products.map((product) => (
              <Card accent={product.accent} key={product.slug} variant="outline">
                <Flex direction="column" gap="sm">
                  <Badge accent={product.accent}>{product.name}</Badge>
                  <Typography tone="secondary">{product.description}</Typography>
                </Flex>
              </Card>
            ))}

            <Card variant="outline">
              <Flex direction="column" gap="sm">
                <Badge>Solutions</Badge>
                <Typography tone="secondary">
                  {solutions
                    .slice(0, 3)
                    .map((solution) => solution.title)
                    .join(", ")}
                </Typography>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section spacing="lg" tone="muted">
        <Container size="xl">
          <div className={styles.authority}>
            <Flex direction="column" gap="md">
              <Badge>{homeContent.authority.label}</Badge>
              <Typography as="h2" size="3xl" variant="heading" weight="bold">
                {homeContent.authority.title}
              </Typography>
            </Flex>

            <Card className={styles.authorityPanel} variant="glass">
              <Typography size="lg" tone="secondary">
                {homeContent.authority.text}
              </Typography>
            </Card>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="lg">
          <Card className={styles.ctaPanel} variant="elevated">
            <Typography as="h2" size="3xl" variant="heading" weight="bold">
              {homeContent.finalCta.title}
            </Typography>
            <Typography tone="secondary">{homeContent.finalCta.text}</Typography>
            <Link className={`${styles.linkButton} ${styles.primaryLink}`} href={homeContent.finalCta.href}>
              <Typography as="span" size="md" variant="label" weight="bold">
                {homeContent.finalCta.label}
              </Typography>
            </Link>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
