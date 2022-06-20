import { useContext } from "react";
import { ThemeContext } from "../context/useThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be inside ThemeProvider");
  }

  return context;
};
