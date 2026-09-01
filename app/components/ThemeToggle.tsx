"use client";

import { useEffect, useState } from "react";

interface ThemeToggleProps {
  transparent?: boolean;
  className?: string;
}

export default function ThemeToggle({ transparent = false, className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentlyDark = root.classList.contains("dark");
    if (currentlyDark) {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-md border ${
        transparent ? "border-white/20" : "border-border"
      } ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex h-9 w-9 items-center justify-center rounded-md border transition-all duration-200 ${
        transparent
          ? "border-white/20 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white"
          : "border-border text-text-secondary hover:border-text-muted hover:bg-surface-alt hover:text-text-primary"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        // Sun icon (when dark mode is active)
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon (when light mode is active)
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
