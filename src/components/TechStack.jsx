import { techStackCategories } from "../data/portfolio";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="max-w-285 mx-auto px-6">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5 text-center">
          ~/tech-stack
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100 text-center">
          Tools I build with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStackCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-2xl p-6 hover:border-teal-500 hover:-translate-y-1 transition-all"
            >
              {/* Card header: icon + title */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-white dark:bg-[#0B0D14] border border-gray-200 dark:border-[#242A3A] flex items-center justify-center text-lg shrink-0">
                  {category.icon}
                </span>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Items as pill badges — wrap, mobile-friendly */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-[#0B0D14] border border-gray-200 dark:border-[#242A3A] px-3 py-1.5 rounded-full hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}