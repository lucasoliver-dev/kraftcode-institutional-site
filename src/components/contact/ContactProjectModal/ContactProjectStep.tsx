import type { ChangeEvent } from "react";
import { Typography } from "../../../lib/ui";
import type { ContactProjectErrors } from "./contactProjectSchema";
import type { ContactProjectStep as ContactProjectStepConfig } from "./contactProjectSteps";
import styles from "./ContactProjectModal.module.css";

type ContactProjectStepProps = {
  error?: ContactProjectErrors[keyof ContactProjectErrors];
  step: ContactProjectStepConfig;
  stepNumber: number;
  totalSteps: number;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export function ContactProjectStep({
  error,
  step,
  stepNumber,
  totalSteps,
  value,
  onChange,
}: ContactProjectStepProps) {
  const errorId = `contact-${step.field}-error`;
  const inputId = `contact-${step.field}`;
  const isTextarea = Boolean(step.rows);

  return (
    <div className={styles.step}>
      <Typography className={styles.stepCount} size="xs" transform="uppercase" variant="label">
        Pergunta {stepNumber} de {totalSteps}
      </Typography>

      <label className={styles.field} htmlFor={inputId}>
        <span className={styles.questionLine}>
          <Typography as="span" className={styles.question} size="xl" weight="bold">
            {step.question}
          </Typography>
          {step.optional ? (
            <Typography as="span" className={styles.optional} size="xs">
              Opcional
            </Typography>
          ) : null}
        </span>
        <Typography className={styles.helper} tone="secondary">
          {step.helper}
        </Typography>

        {isTextarea ? (
          <textarea
            aria-describedby={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            className={styles.control}
            id={inputId}
            name={step.field}
            onChange={onChange}
            placeholder={step.placeholder}
            rows={step.rows}
            value={value}
          />
        ) : (
          <input
            aria-describedby={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            autoComplete={step.autoComplete}
            className={styles.control}
            id={inputId}
            inputMode={step.inputMode}
            name={step.field}
            onChange={onChange}
            placeholder={step.placeholder}
            type={step.inputType ?? "text"}
            value={value}
          />
        )}

        {error ? (
          <Typography as="span" className={styles.error} id={errorId} size="xs">
            {error}
          </Typography>
        ) : null}
      </label>
    </div>
  );
}
