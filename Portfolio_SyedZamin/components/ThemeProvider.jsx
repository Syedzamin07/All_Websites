"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const THEME_CHANGE_EVENT = "portfolio-theme-change";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

function subscribeToTheme(callback) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot() {
  return "dark";
}

export default function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // The selected theme still applies for the current session.
    }

    document.documentElement.classList.toggle("dark", next === "dark");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
