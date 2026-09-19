// src/components/CurrentlyLearning.jsx
import { currentlyLearning } from "../data/portfolio";

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-20 md:py-28">
      <div className="max-w-[1140px] mx-auto px-6 text-center">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/currently-learning
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          What I'm exploring next
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-9 max-w-xl mx-auto">
          Technologies and concepts I'm currently diving into to keep growing
          as a developer.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {currentlyLearning.map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] px-4 py-2 rounded-full hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}