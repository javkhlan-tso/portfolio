"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-300 shadow-md shadow-black/10 dark:shadow-black/30 ${
          scrolled
            ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10"
            : "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-5 py-2 text-base font-medium text-neutral-600 dark:text-neutral-400 transition-all duration-200 hover:scale-105 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 md:px-6 md:py-2.5 md:text-lg"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
