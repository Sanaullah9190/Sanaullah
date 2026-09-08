import { footerText } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-7 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-[#242A3A]">
      {footerText}
    </footer>
  );
}