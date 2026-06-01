import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./Box.module.css";

type BoxElement = "div" | "article" | "aside" | "header" | "footer";

type BoxProps<T extends BoxElement = "div"> = {
  children: ReactNode;
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Box<T extends BoxElement = "div">({
  children,
  as,
  className,
  ...props
}: BoxProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component className={classNames(styles.root, className)} {...props}>
      {children}
    </Component>
  );
}
