// src/components/Hero.jsx
import { useEffect, useState } from "react";
import { personalInfo, roles } from "../data/portfolio";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation effect — cycles through the `roles` array from data file
  useEffect(() => {
    const currentWord = roles[roleIndex];
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setTypedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setTypedText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-285 mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Left: text content */}
        <div>
          <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-4">
            ~/portfolio/index
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
            Building products for the{" "}
            <span className="text-teal-600 dark:text-teal-400">browser</span>{" "}
            and the{" "}
            <span className="text-teal-600 dark:text-teal-400">pocket.</span>
          </h1>

          <div className="mt-5 text-lg text-gray-500 dark:text-gray-400 flex items-center gap-2 min-h-8">
            I'm {personalInfo.name.split(" ")[0]} —{" "}
            <span className="font-mono font-medium text-amber-500">
              {typedText}
            </span>
            <span className="inline-block w- h-[1.1em] bg-amber-500 animate-pulse" />
          </div>

          <p className="mt-6 max-w-md text-gray-500 dark:text-gray-400">
            {personalInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-teal-500 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              View Projects →
            </a>
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-semibold border border-gray-300 dark:border-[#242A3A] text-gray-700 dark:text-gray-200 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-1 transition-all"
            >
              Get Resume
            </a>
          </div>
        </div>

        {/* Right: browser + phone mockup — ab mobile pe bhi dikhega, text ke neeche stacked */}
        <div className="relative h-75 sm:h-95 md:h-105 mt-10 md:mt-0">
          {/* Browser mockup */}
          <div className="absolute top-2 left-0 w-[75%] sm:w-full max-w-95 bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-xl overflow-hidden shadow-2xl animate-[float_5s_ease-in-out_infinite]">
            <div className="flex gap-1.5 px-3.5 py-2.5 border-b border-gray-200 dark:border-[#242A3A]">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#242A3A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#242A3A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#242A3A]" />
            </div>
            <div className="p-4 font-mono text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <p className="text-teal-600 dark:text-teal-400">// server.js</p>
              <p className="text-amber-500">app.listen(PORT) ✓ connected</p>
              <div className="h-2 rounded bg-gray-200 dark:bg-[#242A3A] overflow-hidden">
                <div className="h-full w-3/4 bg-linear-to-r from-teal-500 to-amber-500" />
              </div>
              <div className="h-2 rounded bg-gray-200 dark:bg-[#242A3A] w-4/5" />
              <div className="h-2 rounded bg-gray-200 dark:bg-[#242A3A] w-2/3" />
            </div>
          </div>

          {/* Phone mockup */}
          <div className="absolute bottom-0 right-0 w-32.5 h65 sm:w37.5 sm:h75 md:w42.5 md:h-85 bg-gray-50 dark:bg-[#161A26] border-2 border-gray-200 dark:border-[#242A3A] rounded-[26px] p-2.5 shadow-2xl animate-[float_5s_ease-in-out_infinite_1s]">
            <div className="w-12.5 h-1.5 bg-gray-300 dark:bg-[#242A3A] rounded mx-auto mb-2.5" />
            <div className="bg-white dark:bg-[#0B0D14] rounded-2xl h-[calc(100%-24px)] p-3 font-mono text-[10px] text-gray-500 dark:text-gray-400">
              <div className="w-[60%] h-1.5 bg-teal-500/70 rounded mb-2.5" />
              <div className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-lg p-2 mb-2">
                Today's Orders
                <br />
                <span className="text-teal-600 dark:text-teal-400">↑ 24%</span>
              </div>
              <div className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-lg p-2">
                Push Notification
                <br />
                New message received
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for the floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}