import React from "react";
import AboutImg from "../../assets/about-me-image.avif";

export function AboutSection() {
  return (
    <>
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-pink-800 to-purple-950 p-8">
              <div className="aspect-square rounded-2xl overflow-hiddenflex items-center justify-center">
                <img
                  src={AboutImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-white text-2xl font-bold">
                  Salvador Piñon Canchola
                </h3>
                <p className="text-gray-400">Frontend Developer</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Junior Frontend Developer
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I am a passionate frontend developer dedicated to creating
                  websites and web applications that blend exceptional design
                  with innovative creativity. As a recent university graduate, I
                  am constantly seeking new opportunities to expand my knowledge
                  and skills by experimenting with a variety of technologies.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I utilize tools like HTML, CSS, JavaScript, React, Framer
                  Motion, React Native, Java, Tailwind, and Bootstrap to bring
                  projects to life that not only meet expectations but also
                  stand out for their quality and functionality. My goal is to
                  become highly proficient in web development so that I can
                  continuously innovate in every project I undertake in the
                  future.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-gray-400 font-medium mb-2">Name:</h4>
                  <p className="text-white">Salvador Piñon Canchola</p>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium mb-2">Location:</h4>
                  <p className="text-white">Colima, Mexico</p>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium mb-2">Email:</h4>
                  <p className="text-white">salvadorpion755@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium mb-2">
                    Availability:
                  </h4>
                  <p className="text-white">Full-time / Freelance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
    </>
  );
}
