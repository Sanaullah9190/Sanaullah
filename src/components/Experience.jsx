import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-gray-50 dark:bg-[#12151F] transition-colors duration-300"
    >
      <div className="max-w-285 mx-auto px-6">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Path so far
        </h2>

        <div className="relative pl-8 border-l border-gray-300 dark:border-[#242A3A]">
          {experience.map((item, i) => (
            <div
              key={item.id}
              className={`relative ${
                i !== experience.length - 1 ? "pb-11" : ""
              }`}
            >
              {/* Timeline dot */}
              <span className="absolute -left-9.25 top-1 w-3 h-3 rounded-full bg-gray-50 dark:bg-[#12151F] border-2 border-teal-500" />

              <p className="font-mono text-xs text-teal-600 dark:text-teal-400 mb-1.5">
                {item.date}
              </p>
              <h3 className="text-base font-semibold mb-1.5 text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href={item.link}>demo</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}