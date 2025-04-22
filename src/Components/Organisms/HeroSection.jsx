import React from "react";
import { Button } from "../Atoms/Button";
import Aurora from "../../Backgrounds/Aurora/Aurora";
import HeroImg from "../../assets/hero-image.avif";

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-black"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <Aurora
            colorStops={["#ff00f7", "#bb66ff", "#6632ff"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I'm <span className="text-purple-500">Salvador</span>
                <br />
                Junior Frontend Developer
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                Passionate about creating beautiful and functional web
                experiences. Let's build something amazing together!
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button variant="primary" href="#projects">
                  View My Work
                </Button>
                <Button variant="secondary" href="#contact">
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="w-[550px] h-[550px] mx-auto rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg">
                <img
                  src={HeroImg}
                  alt="Developer"
                  className="w-full h-full object-cover"
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
