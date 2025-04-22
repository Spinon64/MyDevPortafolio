import React, { useState } from "react";

export function Navbar() {
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
