// src/components/Navbar.jsx
import { useTheme } from "../context/themeContext";
import { personalInfo, navLinks,WhatsApp } from "../data/portfolio";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0B0D14]/80 border-b border-gray-200 dark:border-[#242A3A] transition-colors duration-300">
      <nav className="max-w-285 mx-auto px-6 md:px-7 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight text-gray-900 dark:text-gray-100">
          {personalInfo.logoText}
          <span className="text-teal-600 dark:text-teal-400">.dev</span>
        </a>

        {/* Desktop nav links — mobile pe ab bottom nav bar use hota hai */}
        <div className="hidden md:flex gap-8 text-sm text-gray-500 dark:text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: CTA + theme toggle */}
        <div className="flex items-center gap-4">
          <a
            href={WhatsApp.link}
            className="hidden md:inline-flex border border-teal-500 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-500 hover:text-white dark:hover:text-[#0B0D14] transition-colors"
          >
            Let's talk
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            title="Toggle theme"
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-[#242A3A] bg-gray-50 dark:bg-[#161A26] flex items-center justify-center text-base hover:border-teal-500 hover:-translate-y-0.5 transition-all"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </div>
      </nav>
    </header>
  );
}