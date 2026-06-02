"use client";

import { useMemo, useState } from "react";
import {
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Layers3,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Caption, Container, FeatureCard, Heading, Overline, Paragraph, Section } from "../../../lib/ui";
import { homeContent } from "../../../content/home";
import { solutions as defaultSolutions } from "../../../content/solutions";
import styles from "./SolutionsCarousel.module.css";

type Solution = (typeof defaultSolutions)[number];

type SolutionsCarouselProps = {
  items?: readonly Solution[];
};

const solutionIcons: Record<string, LucideIcon> = {
  "Software sob medida": Code2,
  "IA aplicada": BrainCircuit,
  "SaaS products": Database,
  "Arquitetura frontend": Layers3,
  "Integrações e automações": Workflow,
};

const solutionDescriptionLines: Record<string, [string, string]> = {
  "Software sob medida": ["Soluções robustas, escaláveis", "e alinhadas ao seu negócio."],
  "IA aplicada": ["IA para automação,", "atendimento e decisão."],
  "SaaS products": ["Produtos com IA, dados", "e experiência real de mercado."],
  "Arquitetura frontend": ["Interfaces modernas, rápidas", "e centradas no usuário."],
  "Integrações e automações": ["Sistemas conectados", "de ponta a ponta."],
};

export function SolutionsCarousel({ items = defaultSolutions }: SolutionsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = items.length;
  const dotIndexes = useMemo(() => Array.from({ length: itemCount }, (_, index) => index), [itemCount]);
  const visibleItems = useMemo(
    () => items.map((_, offset) => items[(activeIndex + offset) % itemCount]),
    [activeIndex, itemCount, items],
  );

  if (itemCount === 0) {
    return null;
  }

  return (
    <Section className={styles.section} spacing="lg">
      <Container size="xl">
        <div className={styles.root} aria-label="Soluções Kraftcode">
          <div className={styles.header}>
            <div className={styles.title}>
              <Overline>{homeContent.solutions.label}</Overline>
              <Heading className={styles.sectionTitle}>
                <span>{homeContent.solutions.title}</span>
              </Heading>
              <Paragraph className={styles.support} tone="secondary">
                {homeContent.solutions.text}
              </Paragraph>
            </div>

            <div className={styles.controls}>
              <button
                aria-label="Solução anterior"
                className={styles.control}
                disabled={itemCount <= 1}
                onClick={() => setActiveIndex((index) => (index - 1 + itemCount) % itemCount)}
                type="button"
              >
                <ChevronLeft className={styles.controlIcon} aria-hidden="true" strokeWidth={1.8} />
              </button>
              <button
                aria-label="Próxima solução"
                className={styles.control}
                disabled={itemCount <= 1}
                onClick={() => setActiveIndex((index) => (index + 1) % itemCount)}
                type="button"
              >
                <ChevronRight className={styles.controlIcon} aria-hidden="true" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className={styles.viewport}>
            <div className={styles.track}>
              {visibleItems.map((item, index) => (
                <div className={styles.slide} key={`${activeIndex}-${index}-${item.title}`}>
                  <FeatureCard
                    description={solutionDescriptionLines[item.title] ?? item.description}
                    icon={(() => {
                      const Icon = solutionIcons[item.title] ?? Code2;

                      return <Icon strokeWidth={1.55} />;
                    })()}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            <Caption>
              {activeIndex + 1} / {itemCount}
            </Caption>
            <div className={styles.dots} aria-label="Navegar soluções">
              {dotIndexes.map((index) => (
                <button
                  aria-label={`Ir para grupo ${index + 1}`}
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
