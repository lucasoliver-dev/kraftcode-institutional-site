"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ContactProjectModal } from "../../contact/ContactProjectModal";
import { routes } from "../../../config/routes";
import { mainNavigation } from "../../../content/navigation";
import { Button, Logo, Typography } from "../../../lib/ui";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.logoLink} href={routes.home} aria-label="Ir para a página inicial">
            <Logo size="sm" />
          </Link>

          <nav className={styles.nav} aria-label="Navegação principal">
            {mainNavigation.map((item) => (
              <Link className={styles.navLink} href={item.href} key={item.href}>
                <Typography
                  as="span"
                  className={styles.navText}
                  size="sm"
                  variant="label"
                  weight="medium"
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </nav>

          <Button
            className={styles.cta}
            iconRight={<ArrowRight strokeWidth={1.8} />}
            label="Falar com a gente"
            onClick={() => setIsContactOpen(true)}
            size="md"
            variant="outline"
          />
        </div>
      </header>
      <ContactProjectModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
