import React from "react";

// List your core technologies (UPDATED for MERN + Laravel/PHP)
const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js (SSG/SSR)",
  "React Native (Mobile)",
  "Node.js",
  "Express.js",
  "NestJS (Backend Architecture)",
  "PHP", // Added PHP
  "Laravel", // Added Laravel
  "MongoDB/Mongoose",
  "MySQL/PostgreSQL", // Added SQL databases to cover PHP/Laravel needs
  "REST/GraphQL APIs",
  "Tailwind CSS",
  "Material UI (MUI)",
  "Redux/Redux Toolkit",
  "Authentication (OAuth/JWT)",
  "Git & GitHub",
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* --- Section Title --- */}
        <h3 className="text-3xl font-bold text-slate-light mb-12 flex items-center">
          <span className="text-mint-accent font-mono mr-3">01.</span>
          About Me
          <span className="grow ml-4 border-t border-slate-dark opacity-30"></span>
        </h3>

        {/* --- Content Grid: Bio (Left) & Photo/Skills (Right) --- */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* --- Left Column: Biography & Experience --- */}
          <div className="md:col-span-2 text-slate-dark text-lg space-y-4">
            <p>
              I am a **Full Stack Developer** specializing in{" "}
              <span className="text-mint-accent">
                MERN (MongoDB, Express, React, Node.js)
              </span>{" "}
              and <span className="text-mint-accent">PHP Laravel</span>. My core
              focus is building **secure, scalable, and high-performance web
              applications** that solve real business problems.
            </p>

            <p>
              I have strong experience developing{" "}
              <span className="text-mint-accent">
                RESTful APIs, comprehensive authentication systems
              </span>{" "}
              (like JWT and OAuth), and building robust, database-driven
              applications using both the JavaScript ecosystem (React, Node.js,
              MongoDB) and the PHP ecosystem (Laravel, MySQL).
            </p>

            <p>
              I enjoy writing clean, maintainable code and have built full stack
              platforms including **e-commerce systems, crypto investment
              dashboards, and logistics/courier applications**. I am actively
              open to full time opportunities and collaborations.
            </p>

            {/* --- Skills Introduction --- */}
            <p className="pt-4">
              Here are some of the technologies and frameworks I use across my
              stacks:
            </p>

            {/* --- Skills Grid --- */}
            <ul className="grid grid-cols-2 gap-y-2 text-sm font-mono text-slate-dark">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-mint-accent mr-2 text-xl leading-none">
                    ▹
                  </span>{" "}
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Right Column: Photo Placeholder --- */}
          <div className="md:col-span-1 flex justify-center items-start pt-4">
            <div className="relative w-full max-w-xs transition-all duration-300">
              <div className="w-full pt-[100%] rounded-lg overflow-hidden relative">
                <img
                  src="/wellington_headshot.jpg"
                  alt="Wellington - Professional Headshot"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition duration-500"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-mint-accent opacity-0 hover:opacity-100 transition duration-500 transform translate-x-3 translate-y-3 z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
