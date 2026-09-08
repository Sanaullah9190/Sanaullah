// src/context/themeContext.jsx
// 👉 Light/Dark theme ka poora logic yahan hai.
// App.jsx isko wrap karega, aur koi bhi component useTheme() hook se
// current theme aur toggleTheme function access kar sakta hai.

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default theme "dark" — page load pe pehle localStorage check karega
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved : "dark";
  });

  useEffect(() => {
    const root = document.documentElement; // <html> tag

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook — components isko import karke use karenge
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}