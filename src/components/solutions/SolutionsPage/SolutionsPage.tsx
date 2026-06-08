import { Container, Display, Paragraph, Section, Typography } from "../../../lib/ui";
import { classNames } from "../../../lib/ui";
import { solutionsPageContent } from "../../../content/solutions";
import styles from "./SolutionsPage.module.css";

function SolutionCard({ solution }: { solution: (typeof solutionsPageContent.items)[number] }) {
  const content = (
    <>
      <div className={styles.media}>
        <img className={styles.image} src={solution.image} alt={`${solution.title} dashboard`} />
      </div>

      <div className={styles.cardContent}>
        <Typography as="span" className={styles.eyebrow} size="xs" variant="overline" tone="muted">
          {solution.eyebrow}
        </Typography>
        <Typography as="h2" className={styles.cardTitle} size="xl" variant="heading" weight="semibold">
          {solution.title}
        </Typography>
        <Paragraph className={styles.description} size="sm" tone="secondary">
          {solution.description}
        </Paragraph>
        <Paragraph className={styles.details} size="sm" tone="muted">
          {solution.details}
        </Paragraph>
      </div>
    </>
  );

  if ("href" in solution) {
    return (
      <a
        className={classNames(styles.card, styles.interactive)}
        href={solution.href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return <article className={styles.card}>{content}</article>;
}

export function SolutionsPage() {
  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.header}>
          <Display className={styles.title} weight="bold">
            {solutionsPageContent.hero.title}
          </Display>
          <Paragraph className={styles.lead} tone="secondary">
            {solutionsPageContent.hero.text}
          </Paragraph>
        </div>

        <div className={styles.grid}>
          {solutionsPageContent.items.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
