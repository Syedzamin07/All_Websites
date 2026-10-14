"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Skills & Experience", href: "/skills" },
  { label: "Power BI Dashboards", href: "/dashboards" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = ({ returnFocus = false } = {}) => {
    setOpen(false);

    if (returnFocus) {
      menuButtonRef.current?.focus();
    }
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu({ returnFocus: true });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/[0.06] bg-paper/80 backdrop-blur-md dark:border-chalk/[0.08] dark:bg-void/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-ink dark:text-chalk"
        >
          Syed Zamin
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink dark:text-mutedDark dark:hover:text-chalk"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-ink/[0.06] dark:text-chalk dark:hover:bg-chalk/[0.08]"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3" />
                <path
                  d="M8 0.5V2.5M8 13.5V15.5M15.5 8H13.5M2.5 8H0.5M13.2 2.8L11.8 4.2M4.2 11.8L2.8 13.2M13.2 13.2L11.8 11.8M4.2 4.2L2.8 2.8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 9.3A6.3 6.3 0 016.7 2 6.3 6.3 0 108 14a6.3 6.3 0 006-4.7z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <Link
            href="/contact"
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-white dark:bg-chalk dark:text-void dark:hover:bg-accent dark:hover:text-white"
          >
            Connect
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink dark:text-chalk md:hidden"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path
              d={open ? "M1 1L17 11M1 11L17 1" : "M0 1H18M0 6H18M0 11H18"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-ink/[0.06] bg-paper px-6 py-6 dark:border-chalk/[0.08] dark:bg-void md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-base text-ink transition-colors hover:bg-ink/[0.04] dark:text-chalk dark:hover:bg-chalk/[0.06]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-3">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex-1 rounded-md bg-ink px-3 py-3 text-center text-base font-medium text-paper dark:bg-chalk dark:text-void"
              >
                Connect
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ink/15 text-ink dark:border-chalk/15 dark:text-chalk"
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
