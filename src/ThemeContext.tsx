import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

interface ThemeContextValue {
  preference: ThemePreference;       // o que o usuário escolheu
  theme: Theme;                      // o tema realmente aplicado
  setPreference: (p: ThemePreference) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const darkQuery = "(prefers-color-scheme: dark)";

function getInitialPreference(): ThemePreference {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark" || saved === "system") return saved;
  return "system";
}

function getSystemTheme(): Theme {
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] =
    useState<ThemePreference>(getInitialPreference);
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);

  // Acompanha mudanças do tema do sistema em tempo real
  useEffect(() => {
    const mq = window.matchMedia(darkQuery);
    const onChange = () => setSystemTheme(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const theme: Theme = preference === "system" ? systemTheme : preference;

  // Reflete o tema no <html data-theme="..."> e salva a preferência
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", preference);
  }, [theme, preference]);

  const toggleTheme = () =>
    setPreference(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider
      value={{ preference, theme, setPreference, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
  return ctx;
}