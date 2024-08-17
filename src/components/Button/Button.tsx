import clsx from "clsx";
import css from "./Button.module.css";
import { ButtonProps } from "../App/App.types";


export default function Button({
  selected = false,
  type,
  children,
  children: ReactNode,
  ...otherProps
}: ButtonProps & { selected?: boolean }) {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
