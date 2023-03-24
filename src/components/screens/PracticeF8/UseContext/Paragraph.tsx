import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
export default function Paragraph() {
  const value = useContext<any>(ThemeContext);
  return <p className={value.theme}>aaaaaa</p>;
}
