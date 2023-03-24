import React, { useState, createContext, useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeProvider";
import ThemeProvider from "./ThemeProvider";

function UseContext() {
  const value = useContext<any>(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={value.toogleTheme}>Toogle theme</button>
      <Content />
    </div>
  );
}
export default UseContext;
