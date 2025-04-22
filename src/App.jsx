import React from "react";
import { useState } from "react";
import "./index.css";
import Aurora from "./Backgrounds/Aurora/Aurora";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("E46_RzA2MtEyBTwf_");

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <HobbiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            DevPortfolio
          </h1>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex gap-6 text-white">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-purple-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#hobbies"
              className="hover:text-purple-400 transition-colors"
            >
              Hobbies
            </a>
            <a
              href="#projects"
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden flex-col gap-4 mt-4 text-white`}
        >
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-purple-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#hobbies"
            className="hover:text-purple-400 transition-colors"
          >
            Hobbies
          </a>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <>
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <Aurora
            colorStops={["#940c77", "#932cad", "#5d0a83"]}
            blend={0.5}
            amplitude={1}
            speed={0.5}
          />
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full grid lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4 w-fit mx-auto lg:mx-0">
                Available for hire
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6">
                Junior Frontend Developer
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-8 mx-auto lg:mx-0">
                I create responsive, user-friendly web experiences with modern
                technologies. Passionate about clean code and creative
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  View My Work
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right content - Hero Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[400px] h-[500px] rounded-[2rem] bg-gradient-to-b from-purple-500/20 to-transparent p-4 overflow-hidden">
                <img
                  src="/src/assets/hero-image.jpg"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover rounded-[1.5rem] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
    </>
  );
}

function AboutSection() {
  return (
    <>
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-white/80 text-base sm:text-lg mb-6">
                I'm a passionate Junior Frontend Developer with a keen eye for
                creating beautiful and functional web experiences. My journey in
                web development started with a curiosity for how things work on
                the internet, and it has evolved into a full-fledged career
                pursuit.
              </p>
              <p className="text-white/80 text-base sm:text-lg mb-6">
                I specialize in modern JavaScript frameworks like React, and I'm
                always eager to learn new technologies. Clean code, responsive
                design, and user experience are at the heart of everything I
                build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Download CV
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                  View Projects
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full max-w-[400px] mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/src/assets/about-me-image.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
    </>
  );
}

function SkillsSection() {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Beginner" },
  ];

  const otherSkills = [
    { name: "Responsive Design", level: "Advanced" },
    { name: "UI/UX Basics", level: "Intermediate" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Figma", level: "Beginner" },
  ];

  const getProgressWidth = (level) => {
    switch (level) {
      case "Beginner":
        return "w-[65%]";
      case "Intermediate":
        return "w-[75%]";
      case "Advanced":
        return "w-[90%]";
      default:
        return "w-0";
    }
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Frontend Development */}
          <div className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20">
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 text-center">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ${getProgressWidth(
                        skill.level
                      )}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20">
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 text-center">
              Other Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ${getProgressWidth(
                        skill.level
                      )}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
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
                        University of Technology
                      </h4>
                      <p className="text-purple-400">
                        Bachelor of Science in Computer Science
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base">
                      2019 - 2023
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Focused on web development, user interface design, and
                    software engineering principles.
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
                        Frontend Development Bootcamp
                      </h4>
                      <p className="text-purple-400">
                        Intensive Web Development Program
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base">
                      2023
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    12-week intensive program covering modern frontend
                    technologies and frameworks.
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

function HobbiesSection() {
  const hobbies = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      title: "Gaming",
      description:
        "I enjoy strategy and RPG games that challenge my problem-solving skills.",
      skill: "Strategic thinking and persistence",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      title: "Music",
      description:
        "I play guitar and enjoy discovering new genres and artists.",
      skill: "Creativity and pattern recognition",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Reading",
      description:
        "I love sci-fi and technical books that expand my imagination and knowledge.",
      skill: "Continuous learning and attention to detail",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Photography",
      description:
        "I capture urban landscapes and nature scenes in my free time.",
      skill: "Visual composition and attention to detail",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Coding Side Projects",
      description:
        "I work on personal coding projects to experiment with new technologies.",
      skill: "Innovation and technical growth",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Digital Art",
      description:
        "I create digital illustrations and experiment with different styles.",
      skill: "Creativity and visual design",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Coffee Brewing",
      description:
        "I'm passionate about specialty coffee and different brewing methods.",
      skill: "Precision and attention to process",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "Cycling",
      description:
        "I enjoy weekend rides exploring new trails and scenic routes.",
      skill: "Endurance and goal setting",
    },
  ];

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="hobbies" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hobbies
            </span>
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-sm sm:text-base">
            Beyond coding, I have diverse interests that keep me inspired and
            help me bring fresh perspectives to my work. These activities shape
            who I am and often influence my creative approach to
            problem-solving.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-purple-900/20"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple-950 rounded-full flex items-center justify-center mb-6 text-purple-400">
                  {hobby.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {hobby.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6">
                  {hobby.description}
                </p>
                <p className="text-xs sm:text-sm text-purple-400">
                  {hobby.skill}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-purple-950/20 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
              How My Hobbies Influence My Work
            </h3>
            <p className="text-gray-400 text-center max-w-4xl mx-auto text-sm sm:text-base">
              My diverse interests help me approach development challenges from
              different angles. Photography improves my eye for design, gaming
              enhances my problem-solving abilities, and music keeps my creative
              thinking flowing. These hobbies don't just make me a more
              well-rounded person—they make me a better developer who can
              connect with users and create more engaging experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A responsive e-commerce website with product filtering, cart functionality, and checkout process.",
      image: "/src/assets/project-1.jpg",
      demoLink: "#",
      githubLink: "#",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays current weather and forecasts based on user location or search.",
      image: "/src/assets/project-2.jpg",
      demoLink: "#",
      githubLink: "#",
      technologies: ["JavaScript", "API", "CSS"],
    },
    {
      title: "Task Management App",
      description:
        "A full-featured task management application with real-time updates and team collaboration.",
      image: "/src/assets/project-3.jpg",
      demoLink: "#",
      githubLink: "#",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects and skills with smooth animations.",
      image: "/src/assets/project-4.jpg",
      demoLink: "#",
      githubLink: "#",
      technologies: ["React", "Tailwind", "Framer Motion"],
    },
  ];

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
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

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Salvador Pinon Canchola",
    };

    console.log("Sending email with params:", templateParams);

    try {
      const response = await emailjs.send(
        "service_spm0nxm",
        "template_5ftq5gt",
        templateParams,
        "E46_RzA2MtEyBTwf_"
      );

      console.log("Email sent successfully:", response);

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 3000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-12">
                I'm currently available for freelance work or full-time
                positions. If you have a project that needs some creative touch,
                or if you're looking to hire a frontend developer, feel free to
                reach out!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Email</div>
                    <div className="text-xs sm:text-sm">
                      your.email@example.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">LinkedIn</div>
                    <div className="text-xs sm:text-sm">
                      linkedin.com/in/yourname
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">GitHub</div>
                    <div className="text-xs sm:text-sm">
                      github.com/yourusername
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-zinc-950/50 rounded-3xl p-6 sm:p-8 border border-purple-900/20">
              <h3 className="text-xl font-bold text-white mb-8">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-purple-900/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-purple-900/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-900/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-purple-900/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 ${
                    status.submitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {status.submitted && (
                  <div className="text-green-500 text-sm text-center">
                    Message sent successfully!
                  </div>
                )}
                {status.error && (
                  <div className="text-red-500 text-sm text-center">
                    {status.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-6 sm:py-8 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © 2025 Your Name. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-950 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
