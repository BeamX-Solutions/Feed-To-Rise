import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "default" | "warm" | "global" | "minimal";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check URL params first
    const params = new URLSearchParams(window.location.search);
    const urlTheme = params.get("theme") as Theme;
    if (urlTheme && ["default", "warm", "global", "minimal"].includes(urlTheme)) {
      return urlTheme;
    }
    // Fallback to localStorage
    return (localStorage.getItem("feed-to-rise-theme") as Theme) || "default";
  });

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    if (theme === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    // Save to localStorage
    localStorage.setItem("feed-to-rise-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
