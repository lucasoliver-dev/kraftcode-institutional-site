"use client";

import { ArrowRight, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button, Container, Display, Paragraph, Section, Typography } from "../../../lib/ui";
import { contactContent } from "../../../content/contact";
import { ContactProjectModal } from "../ContactProjectModal";
import styles from "./ContactPage.module.css";

const whatsappIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2.5a9.2 9.2 0 0 0-7.9 13.9L3 21l4.8-1.1A9.2 9.2 0 1 0 12 2.5Zm0 1.8a7.4 7.4 0 0 1 0 14.8 7.3 7.3 0 0 1-3.7-1l-.3-.2-2.6.6.6-2.5-.2-.4A7.4 7.4 0 0 1 12 4.3Zm-3.1 3.9c-.2 0-.5.1-.7.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.6 4 3.5 2 .8 2.4.6 2.8.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.5-.3-1.6-.8c-.2-.1-.4-.1-.6.2l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1-.4-1.8-1.1-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.5-.6-.5h-.4Z"
      fill="currentColor"
    />
  </svg>
);

const channelIcons: Record<string, ReactNode> = {
  mail: <Mail strokeWidth={1.7} />,
  whatsapp: whatsappIcon,
};

const socialIcons: Record<string, ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.3 8.7h3.1v10H5.3v-10Zm1.6-4.9c1 0 1.7.7 1.7 1.6s-.7 1.6-1.7 1.6-1.7-.7-1.7-1.6.7-1.6 1.7-1.6Zm5 4.9h3v1.4h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v5.5h-3.1v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3.1v-10Z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.6 8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.2 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.8 2.8h8.4a5 5 0 0 1 5 5v8.4a5 5 0 0 1-5 5H7.8a5 5 0 0 1-5-5V7.8a5 5 0 0 1 5-5Zm0 1.9a3.1 3.1 0 0 0-3.1 3.1v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8Zm4.2 3.2a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.9a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.7-2.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export function ContactPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Section className={styles.section} spacing="lg">
        <Container size="xl">
          <div className={styles.layout}>
            <div className={styles.header}>
              <Display className={styles.title} weight="bold">
                {contactContent.hero.title}
              </Display>
              <Paragraph className={styles.lead} tone="secondary">
                {contactContent.hero.text}
              </Paragraph>
            </div>

            <div className={styles.panel}>
              <div className={styles.channels}>
                {contactContent.channels.map((channel) => (
                  <a
                    className={styles.channel}
                    href={channel.href}
                    key={channel.value}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <span className={styles.channelIcon} aria-hidden="true">
                      {channelIcons[channel.icon]}
                    </span>
                    <span className={styles.channelCopy}>
                      <Typography as="span" size="xs" variant="overline" tone="muted">
                        {channel.label}
                      </Typography>
                      <Typography as="span" size="md" variant="label" weight="medium">
                        {channel.value}
                      </Typography>
                    </span>
                  </a>
                ))}
              </div>

              <div className={styles.socialBlock}>
                <Typography as="h2" size="sm" variant="label" weight="bold">
                  Redes sociais
                </Typography>
                <div className={styles.socials} aria-label="Links sociais">
                  {contactContent.socials.map((social) => {
                    const icon = socialIcons[social.icon];

                    if (!icon) {
                      return null;
                    }

                    return social.href ? (
                      <a
                        className={styles.social}
                        href={social.href}
                        key={social.label}
                        rel="noreferrer"
                        target="_blank"
                        aria-label={social.label}
                      >
                        {icon}
                      </a>
                    ) : (
                      <span className={styles.social} key={social.label} aria-label={social.label} role="img">
                        {icon}
                      </span>
                    );
                  })}
                </div>
              </div>

              <Button
                className={styles.cta}
                iconRight={<ArrowRight strokeWidth={1.8} />}
                label="Falar com a gente"
                onClick={() => setIsContactOpen(true)}
                size="md"
                variant="outline"
              />
            </div>
          </div>
        </Container>
      </Section>
      <ContactProjectModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
