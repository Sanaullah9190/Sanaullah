// src/components/BottomNav.jsx
import { useEffect, useState } from "react";
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

// Order: Home -> About -> Skills -> Projects -> Experience -> Contact
const navItems = [
  { id: "home", label: "Home", icon: <FiHome className="w-5 h-5" /> },
  { id: "about", label: "About", icon: <FiUser className="w-5 h-5" /> },
  { id: "stack", label: "Skills", icon: <FiCode className="w-5 h-5" /> },
  { id: "projects", label: "Projects", icon: <FiFolder className="w-5 h-5" /> },
  { id: "experience", label: "Experience", icon: <FiBriefcase className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <FiMail className="w-5 h-5" /> },
];

export default function BottomNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Section tab "active" mana jayega jab wo screen ke beech wale hisse mein ho
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="md:hidden fixed bottom-4 left-4 right-4 z-40">
      <div className="flex items-center justify-between bg-white/90 dark:bg-[#161A26]/90 backdrop-blur-md border border-gray-200 dark:border-[#242A3A] rounded-2xl px-1.5 py-2 shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl border transition-all ${
                isActive
                  ? "border-teal-500 text-teal-600 dark:text-teal-400 bg-teal-500/10"
                  : "border-transparent text-gray-400 dark:text-gray-500"
              }`}
            >
              {item.icon}
              <span className="text-[9px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}