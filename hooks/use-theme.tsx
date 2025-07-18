'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { themes, defaultTheme, ThemeConfig } from '@/lib/theme-config';

interface ThemeContextType {
  currentTheme: string;
  theme: ThemeConfig;
  setTheme: (themeName: string) => void;
  availableThemes: string[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('fleetcard-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('fleetcard-theme', themeName);
    }
  };

  const value = {
    currentTheme,
    theme: themes[currentTheme],
    setTheme,
    availableThemes: Object.keys(themes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}