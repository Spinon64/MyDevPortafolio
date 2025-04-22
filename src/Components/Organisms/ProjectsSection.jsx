import React from "react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Festival Website",
      description:
        "Responsive and accessible website to view information about your favorite festivals around the world",
      image: "/src/assets/FestivalWebsite.avif",
      demoLink: "https://festivalsaroundtheworld.netlify.app/",
      githubLink: "https://github.com/Spinon64/FestivalesWeb",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays current weather and forecasts based on user search.",
      image: "/src/assets/WeatherApp.avif",
      demoLink: "https://weatherappspc.netlify.app/",
      githubLink: "https://github.com/Spinon64/WeatherApp",
      technologies: ["JavaScript", "API", "CSS", "React"],
    },
    {
      title: "Figma AI CIF Generator",
      description: "A full prototype of a CIF generator powered by AI",
      image: "/src/assets/CIFGenerator.avif",
      githubLink: "#",
      demoLink: "https://www.figma.com/community/file/1496587881311789534",
      technologies: ["Figma"],
    },
    {
      title: "Split and eat",
      description:
        "An application to share accounts among colleagues and know each person's contribution.",
      image: "/src/assets/splitneat.avif",
      demoLink: "https://splitneatspc.netlify.app/",
      githubLink: "https://github.com/Spinon64/splitNeat",
      technologies: ["React", "CSS"],
    },
  ];

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-white lg:text-5xl font-bold text-center mb-12">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-950/50 rounded-3xl overflow-hidden border border-purple-900/20 group"
              >
                <div className="aspect-video w-full bg-zinc-900 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay and buttons on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.demoLink}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-xl text-center font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        View Demo <span className="inline-block ml-2">↗</span>
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex-1 bg-white/10 backdrop-blur-sm text-white py-3 sm:py-4 rounded-xl text-center font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20"
                      >
                        View Code{" "}
                        <span className="inline-block ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 inline"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
