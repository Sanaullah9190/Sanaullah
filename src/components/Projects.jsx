// src/components/Projects.jsx
import { useState } from "react";
import { projects, projectFilters } from "../data/portfolio";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // modal ke liye

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-285 mx-auto px-6">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-9 text-gray-900 dark:text-gray-100">
          Selected work
        </h2>

        {/* Filter buttons — same as pehle */}
        <div className="flex gap-3 mb-9">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`font-mono text-sm px-4.5 py-2 rounded-full border transition-colors ${
                activeFilter === filter.value
                  ? "border-teal-500 text-teal-600 dark:text-teal-400"
                  : "border-gray-300 dark:border-[#242A3A] text-gray-500 dark:text-gray-400 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-50 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] rounded-2xl p-6 hover:-translate-y-1.5 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all"
            >
              {/* "More" button — top-right, khol ta hai full detail modal */}
              <button
                onClick={() => setSelectedProject(project)}
                aria-label={`View full details of ${project.title}`}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-gray-300 dark:border-[#242A3A] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <span
                className={`inline-block font-mono text-xs px-2.5 py-1 rounded-full border mb-3.5 ${
                  project.type === "mobile"
                    ? "text-teal-600 dark:text-teal-400 border-teal-500"
                    : "text-amber-500 border-amber-500"
                }`}
              >
                {project.tagLabel}
              </span>

              <h3 className="text-lg font-semibold mb-2 pr-10 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-4.5 text-sm">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-[#242A3A] hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500 pb-0.5 transition-colors"
                  >
                    {project.linkLabel}
                  </a>
                )}
                <a
                  href={project.githubLink}
                  className="text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-[#242A3A] hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500 pb-0.5 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-detail panel — dono devices pe same: neeche se upar slide, full-width, andar scrollable */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm flex items-end justify-center"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-[#0B0D14] w-full max-h-[88vh] mt-16 rounded-t-2xl border border-gray-200 dark:border-[#242A3A] p-6 sm:p-12 pb-10 sm:pb-12 relative overflow-y-auto animate-[slideUp_0.35s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div className="w-10 h-1.5 bg-gray-300 dark:bg-[#242A3A] rounded-full mx-auto mb-5 sticky top-0" />

            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
              className="fixed top-6 right-6 sm:top-8 sm:right-8 w-9 h-9 rounded-full border border-gray-300 dark:border-[#242A3A] bg-white dark:bg-[#0B0D14] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors z-10"
            >
              ✕
            </button>

            <div className="max-w-4xl mx-auto">
              <span
                className={`inline-block font-mono text-xs px-2.5 py-1 rounded-full border mb-5 ${
                  selectedProject.type === "mobile"
                    ? "text-teal-600 dark:text-teal-400 border-teal-500"
                    : "text-amber-500 border-amber-500"
                }`}
              >
                {selectedProject.tagLabel}
              </span>

              <h3 className="text-3xl sm:text-5xl font-extrabold mb-5 pr-8 text-gray-900 dark:text-gray-100">
                {selectedProject.title}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                {selectedProject.description}
              </p>

              {/* Features */}
              <p className="font-mono text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
                Features
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                {selectedProject.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                  >
                    <span className="text-teal-500">•</span>
                    {feature}
                  </span>
                ))}
              </div>

              {/* Technology */}
              <p className="font-mono text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
                Technology
              </p>
              <div className="flex flex-wrap gap-2.5 mb-9">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-[#161A26] border border-gray-200 dark:border-[#242A3A] px-4 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.githubLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 dark:border-[#242A3A] text-gray-700 dark:text-gray-200 hover:border-teal-500 hover:-translate-y-0.5 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.51-1.11-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.28 9.28 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-teal-500 text-white hover:-translate-y-0.5 transition-transform"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {selectedProject.linkLabel}
                  </a>
                )}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes slideUp {
              from { transform: translateY(80px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}