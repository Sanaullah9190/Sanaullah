// src/components/TechStack.jsx
import { techStackCategories } from "../data/portfolio";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="max-w-285 mx-auto px-6">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/tech-stack
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Tech Stack & Skillset
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStackCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-2xl p-6 hover:border-teal-500 hover:-translate-y-1 transition-all"
            >
              {/* Card header: icon + title */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-[#242A3A]">
                <span className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-lg">
                  {category.icon}
                </span>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Items list */}
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}