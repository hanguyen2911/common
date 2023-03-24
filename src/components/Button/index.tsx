import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
interface IButtonProps {
  title: string;
  className: string;
  onClick?: () => any;
  type?: "button" | "submit" | "reset";
  iconRight?: string;
  primary?: boolean;
}
const Button = (props: IButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type={props.type ? props.type : "submit"}
        className={clsx(styles.btn, { [styles.primary]: props.primary })}
      >
        <span>{props.title}</span>
        <img src={props.iconRight} alt={props.title} />
      </button>
    </>
  );
};
export default Button;
