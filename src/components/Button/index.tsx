import React from "react";
interface IButtonProps {
  title: string;
  className: string;
  onClick?: () => any;
  type?: "button" | "submit" | "reset";
  iconRight?: string;
}
const Button = (props: IButtonProps) => {
  return (
    <>
      <button onClick={props.onClick} type={props.type ? props.type : "submit"}>
        <span>{props.title}</span>
        <img src={props.iconRight} alt={props.title} />
      </button>
    </>
  );
};
export default Button;
