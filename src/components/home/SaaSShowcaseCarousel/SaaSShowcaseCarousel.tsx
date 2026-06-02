"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Badge, Button, Container, Flex, Section, Typography, classNames } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import { saasShowcaseItems } from "../../../content/products";
import styles from "./SaaSShowcaseCarousel.module.css";

type ShowcaseAccent = "kraftchat" | "kraftscore" | "kraftflow" | "kraftops";

type ShowcaseBanner = {
  product: string;
  title: string;
  description: string;
  image: string;
  accent: ShowcaseAccent;
};

type SaaSShowcaseCarouselProps = {
  label?: string;
  title?: string;
  cta?: { label: string; href: string };
  banners?: readonly ShowcaseBanner[];
};

export function SaaSShowcaseCarousel({
  label = homeContent.saasShowcase.label,
  title = homeContent.saasShowcase.title,
  cta = homeContent.saasShowcase.cta,
  banners = saasShowcaseItems,
}: SaaSShowcaseCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const loopItems = [...banners, ...banners];
  const getBadgeAccent = (accent: ShowcaseAccent) => {
    if (accent === "kraftchat" || accent === "kraftscore") {
      return accent;
    }

    return "neutral";
  };

  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.root} aria-label="Produtos SaaS Kraftcode">
          <div className={styles.header}>
            <Flex direction="column" gap="md">
              <Badge>{label}</Badge>
              <Typography as="h2" className={styles.title} size="2xl" variant="heading" weight="semibold">
                <span className={styles.titleLine}>{title}</span>
                <span className={styles.titleLine}>Feitos para escalar.</span>
              </Typography>
            </Flex>

            <Button
              href={cta.href}
              iconRight={<ArrowRight strokeWidth={1.8} />}
              label={cta.label}
              size="md"
              variant="outline"
            />
          </div>

          <div
            className={styles.viewport}
            onPointerCancel={() => setIsPaused(false)}
            onPointerDown={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
            onPointerUp={() => setIsPaused(false)}
          >
            <div className={classNames(styles.track, isPaused && styles.paused)}>
              {loopItems.map((banner, index) => (
                <article
                  aria-hidden={index >= banners.length}
                  className={classNames(styles.banner, styles[banner.accent])}
                  data-loop-copy={index >= banners.length}
                  key={`${banner.title}-${index}`}
                  tabIndex={index >= banners.length ? -1 : 0}
                >
                  <div className={styles.media}>
                    <img
                      alt={`${banner.title} dashboard`}
                      className={styles.image}
                      loading="lazy"
                      src={banner.image}
                    />
                  </div>

                  <Flex className={styles.content} direction="column" gap="sm">
                    <Badge accent={getBadgeAccent(banner.accent)}>{banner.title}</Badge>
                    <Typography as="h3" size="xl" variant="heading" weight="bold">
                      {banner.title}
                    </Typography>
                    <Typography size="sm" tone="secondary">
                      {banner.description}
                    </Typography>
                  </Flex>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
