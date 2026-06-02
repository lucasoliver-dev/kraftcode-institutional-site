"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Button, Modal, Typography } from "../../../lib/ui";
import { formatWhatsapp } from "../../../lib/utils/masks";
import {
  type ContactProjectErrors,
  type ContactProjectField,
  contactProjectInitialValues,
  contactProjectSchema,
  getContactProjectErrors,
} from "./contactProjectSchema";
import { ContactProjectStep } from "./ContactProjectStep";
import { contactProjectSteps } from "./contactProjectSteps";
import styles from "./ContactProjectModal.module.css";

type ContactProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const titleId = "contact-project-modal-title";

export function ContactProjectModal({ isOpen, onClose }: ContactProjectModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState(contactProjectInitialValues);
  const [errors, setErrors] = useState<ContactProjectErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = contactProjectSteps[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === contactProjectSteps.length - 1;

  function resetForm() {
    setValues(contactProjectInitialValues);
    setErrors({});
    setSubmitError(null);
    setCurrentStepIndex(0);
    setIsSubmitting(false);
  }

  function closeModal() {
    resetForm();
    onClose();
  }

  function updateField(field: ContactProjectField, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: field === "whatsapp" ? formatWhatsapp(value) : value,
    }));
    setSubmitError(null);

    if (errors[field]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }));
    }
  }

  function handleInputChange(field: ContactProjectField) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateField(field, event.target.value);
    };
  }

  function validateStep(field: ContactProjectField) {
    const result = contactProjectSchema.shape[field].safeParse(values[field]);

    if (result.success) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }));
      return true;
    }

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: result.error.issues[0]?.message,
    }));
    return false;
  }

  function goToPreviousStep() {
    setCurrentStepIndex((index) => Math.max(0, index - 1));
  }

  function goToNextStep() {
    if (!validateStep(currentStep.field)) {
      return;
    }

    setCurrentStepIndex((index) => Math.min(contactProjectSteps.length - 1, index + 1));
  }

  function moveToFirstErrorStep(nextErrors: ContactProjectErrors) {
    const nextStepIndex = contactProjectSteps.findIndex((step) => Boolean(nextErrors[step.field]));

    if (nextStepIndex >= 0) {
      setCurrentStepIndex(nextStepIndex);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isLastStep) {
      goToNextStep();
      return;
    }

    const result = contactProjectSchema.safeParse(values);

    if (!result.success) {
      const nextErrors = getContactProjectErrors(result.error.issues);

      setErrors(nextErrors);
      moveToFirstErrorStep(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const response = await fetch("/api/contact-proposal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      const responseBody = await response.json().catch(() => null);
      const fieldErrors = responseBody?.fieldErrors as ContactProjectErrors | undefined;

      if (fieldErrors) {
        setErrors(fieldErrors);
        moveToFirstErrorStep(fieldErrors);
      }

      setSubmitError(
        responseBody?.message ??
          "Nao foi possivel enviar sua proposta agora. Tente novamente em alguns instantes.",
      );
      setIsSubmitting(false);
      return;
    }

      resetForm();
      onClose();
      router.push("/obrigado");
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} titleId={titleId}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <header className={styles.header}>
          <img className={styles.brand} src="/images/logos/brand-dark.png" alt="Kraftcode" />
          <div className={styles.copy}>
            <Typography as="h2" className={styles.title} id={titleId} size="2xl" weight="bold">
              Vamos conversar sobre seu projeto
            </Typography>
            <Typography className={styles.description} tone="secondary">
              Vamos fazer algumas perguntas rápidas e montar sua proposta de contato no final.
            </Typography>
          </div>
        </header>

        <ContactProjectStep
          error={errors[currentStep.field]}
          onChange={handleInputChange(currentStep.field)}
          step={currentStep}
          stepNumber={currentStepIndex + 1}
          totalSteps={contactProjectSteps.length}
          value={values[currentStep.field] ?? ""}
        />

        <footer className={styles.actions}>
          <Button
            iconLeft={<ArrowLeft strokeWidth={1.8} />}
            label="Voltar"
            onClick={goToPreviousStep}
            size="md"
            type="button"
            variant="ghost"
            disabled={isFirstStep || isSubmitting}
          />
          <Button
            iconRight={<ArrowRight strokeWidth={1.8} />}
            label={isLastStep ? (isSubmitting ? "Enviando..." : "Enviar proposta") : "Continuar"}
            size="md"
            type="submit"
            variant="filled"
            disabled={isSubmitting}
          />
        </footer>

        {submitError ? (
          <Typography className={styles.submitError} size="sm">
            {submitError}
          </Typography>
        ) : null}
      </form>
    </Modal>
  );
}
