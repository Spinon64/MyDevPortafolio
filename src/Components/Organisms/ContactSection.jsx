import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("E46_RzA2MtEyBTwf_");

export function ContactSection() {
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

    try {
      const response = await emailjs.send(
        "service_spm0nxm",
        "template_5ftq5gt",
        templateParams
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
          <h2 className="text-3xl sm:text-4xl text-white lg:text-5xl font-bold text-center mb-12">
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
                  href="mailto:salvadorpion755@gmail.com"
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
                      salvadorpion755@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/salvador-pi%C3%B1%C3%B3n-canchola-925537202/"
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
                      linkedin.com/in/salvador-piñón-canchola
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/Spinon64"
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
                      Github.com/Spinon64
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-zinc-950/50 rounded-3xl p-6 sm:p-8 border border-purple-900/70">
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
                      className="w-full bg-black/50 border border-purple-900/70 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
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
                      className="w-full bg-black/50 border border-purple-900/70 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
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
                    className="w-full bg-black/50 border border-purple-900/70 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
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
                    className="w-full bg-black/50 border border-purple-900/70 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none"
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
