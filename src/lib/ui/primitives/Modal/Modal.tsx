"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  className?: string;
};

export function Modal({ children, isOpen, onClose, titleId, className }: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className={classNames(styles.dialog, className)}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button className={styles.close} onClick={onClose} type="button" aria-label="Fechar modal">
          <X aria-hidden="true" strokeWidth={1.8} />
        </button>
        {children}
      </div>
    </div>
  );
}
