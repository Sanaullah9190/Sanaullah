// src/components/Experience.jsx
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32"
    >
      <div className="max-w-285 mx-auto px-6">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          Practical Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-9 max-w-xl">
          Building software through continuous learning, open-source programs, and freelance project delivery.
        </p>

        <div className="flex flex-col gap-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 hover:border-teal-500 transition-colors"
            >
              {/* Left: logo, vertically centered + title block */}
              <div className="flex items-center gap-4 md:w-75 shrink-0">
                <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-[#ffffff] border border-gray-200 dark:border-[#242A3A] flex items-center justify-center overflow-hidden shrink-0">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.organization}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-lg">🏢</span>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.organization}
                  </p>
                  <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {item.date}
                  </p>

                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mt-1.5"
                    >
                      Live Preview
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Right: bullet points */}
              <div className="flex-1 flex flex-col gap-3 md:pl-8 md:border-l border-gray-100 dark:border-[#242A3A]">
                {item.bullets.map((point, i) => (
                  <p key={i} className="text-sm text-gray-500 dark:text-gray-400">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}