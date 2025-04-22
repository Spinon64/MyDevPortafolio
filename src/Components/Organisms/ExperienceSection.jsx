import React from "react";

export function ExperienceSection() {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl text-white font-bold">
                Education
              </h3>
            </div>

            <div className="relative pl-8 sm:pl-16">
              {/* Timeline line */}
              <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5 bg-purple-500/20" />

              {/* University */}
              <div className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-[-0.5rem] sm:left-[-2.45rem] w-4 sm:w-5 h-4 sm:h-5 rounded-full border-4 border-purple-500 bg-black" />

                <div className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        University of Colima
                      </h4>
                      <p className="text-purple-400">
                        Bachelor of Software Engineering
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base">
                      2020 - 2025
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    During my time there, I learned various technologies such as
                    React, JavaScript, React Native, HTML, CSS, MySQL,
                    Bootstrap, web development, and the different agile
                    methodologies that teams can use to develop systems for
                    businesses.
                  </p>
                </div>
              </div>

              {/* Bootcamp */}
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute left-[-0.5rem] sm:left-[-2.45rem] w-4 sm:w-5 h-4 sm:h-5 rounded-full border-4 border-purple-500 bg-black" />

                <div className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        EDUC
                      </h4>
                      <p className="text-purple-400">
                        Front End intership with React
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base">
                      2025
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    internship learning and applying React and Tailwind mainly
                    for the creation of responsive and efficient programs for
                    the university.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
