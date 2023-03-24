import React, { useState, createContext } from "react";
import Content from "./Content";

export const ThemeContext = createContext("");

function ThemeProvider(props: any) {
  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = { theme, toogleTheme } as any;
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
