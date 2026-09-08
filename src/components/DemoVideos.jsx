// src/components/DemoVideos.jsx
import { useState } from "react";
import { demoVideos, demoFilters } from "../data/portfolio";

export default function DemoVideos() {
  // Default filter "mobile" — jaisa tumne bola
  const [activeFilter, setActiveFilter] = useState("mobile");

  const filteredVideos = demoVideos.filter((v) => v.type === activeFilter);

  return (
    <section id="demos" className="py-24 md:py-32">
      <div className="max-w-285 mx-auto px-6">
        <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-2.5">
          ~/demos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          Live Product Demos
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-9 max-w-xl">
          Real-time video demos highlighting feature workflows, database integration, and UI responsiveness.
        </p>

        {/* Filter buttons — sirf mobile / web, "all" nahi */}
        <div className="flex gap-3 mb-10">
          {demoFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`font-mono text-sm px-4.5 py-2 rounded-full border transition-colors ${
                activeFilter === filter.value
                  ? "border-teal-500 text-teal-600 dark:text-teal-400 bg-teal-500/10"
                  : "border-gray-300 dark:border-[#242A3A] text-gray-500 dark:text-gray-400 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* MOBILE VIEW — reel-style vertical phone frames, grid layout */}
        {activeFilter === "mobile" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id}>
                <div className="relative mx-auto w-full max-w-55 aspect-9/16 rounded-[26px] border-[6px] border-gray-200 dark:border-[#242A3A] bg-gray-50 dark:bg-[#161A26] overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-gray-200 dark:bg-[#242A3A] rounded-b-lg z-10" />
                  <video
                    className="w-full h-full object-cover"
                    muted
                    controls
                    playsInline
                    poster={video.poster || undefined}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* WEB VIEW — laptop-frame style, wider cards */}
        {activeFilter === "web" && (
          <div className="grid md:grid-cols-2 gap-10">
            {filteredVideos.map((video) => (
              <div key={video.id}>
                {/* Laptop top bezel + screen */}
                <div className="bg-gray-100 dark:bg-[#161A26] rounded-t-xl p-2.5 border border-b-0 border-gray-200 dark:border-[#242A3A]">
                  <div className="flex gap-1.5 mb-2 px-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#242A3A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#242A3A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#242A3A]" />
                  </div>
                  <video
                    className="w-full aspect-video rounded-md object-cover bg-black"
                    controls
                    muted
                    playsInline
                    poster={video.poster || undefined}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                  </video>
                </div>
                {/* Laptop base */}
                <div className="h-3.5 bg-gray-300 dark:bg-[#242A3A] rounded-b-xl mx-6 shadow-md" />
                <div className="h-1 bg-gray-400 dark:bg-[#161A26] rounded-b-full mx-16" />

                <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}