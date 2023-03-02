import React from "react";
interface IInputFieldProps {
  className?: string;
  value: string | number;
  onChange: () => any;
  maxLength?: number;
  placeholder?: string;
  type?: "number" | "text" | "password";
  readonly?: boolean;
  disabled?: boolean;
}
const InputField = (props: IInputFieldProps) => {
  return (
    <>
      <input
        className={`${props.className}`}
        value={props.value}
        type={props.type}
        onChange={() => {
          props.onChange;
        }}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        readOnly={props.readonly}
        disabled={props.disabled}
      ></input>
    </>
  );
};
export default InputField;
