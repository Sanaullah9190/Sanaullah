import { personalInfo, aboutText, highlights, stats } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-285 mx-auto px-6">
        {/* profile image  */}
        <div className="flex justify-center mb-10">
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            {/* Decorative gradient blob behind the image */}
            <div className="absolute -inset-3 rounded-full bg-linear-to-tr from-teal-400 via-teal-500 to-amber-400 opacity-30 blur-xl" />
            {/* Ring + image */}
            <div className="relative w-full h-full rounded-full p-0.75 bg-linear-to-tr from-teal-500 to-amber-500 shadow-xl shadow-teal-500/20">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#0B0D14]"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
            ~/about
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Developer Profile
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left: bio + stats */}
          <div>
            {aboutText.map((para, i) => (
              <p
                key={i}
                className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed"
              >
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-10 mt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <b className="block text-3xl font-bold text-teal-600 dark:text-teal-400">
                    {stat.value}
                  </b>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: what I bring  */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              What I bring to a team:
            </p>
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-teal-500 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}