import React from "react";

// Refined technologies focusing on your MERN core from the resume
const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "MySQL",
  "RESTful APIs",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI (MUI)",
  "JWT Authentication",
  "RBAC (Access Control)",
  "Git & GitHub",
  "System Design",
  "Deployment (Vercel/Render)",
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

        {/* --- Content Grid --- */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate-dark text-lg space-y-4">
            <p>
              Hello! I'm Wellington, a{" "}
              <span className="text-mint-accent">Full Stack Developer</span>{" "}
              with hands-on experience building production-ready MERN
              applications. My journey into software engineering began with a
              deep curiosity for how the web works, leading me to pursue
              intensive{" "}
              <span className="text-mint-accent">self-directed learning</span>.
            </p>

            <p>
              My core focus is on building robust applications with a strong
              emphasis on
              <span className="text-mint-accent">
                {" "}
                authentication systems, transaction-based workflows, and
                role-based access control (RBAC)
              </span>
              . I take pride in translating complex concepts into clean,
              scalable architecture.
            </p>

            <p>
              To date, I have successfully managed projects from concept to
              deployment, focusing on performance and security. Whether it is
              developing comprehensive
              <span className="text-mint-accent"> dashboards</span> or
              optimizing
              <span className="text-mint-accent"> database schemas</span> in
              MongoDB and MySQL, I enjoy solving technical challenges that
              impact user experience.
            </p>

            <p className="pt-4">
              Here are a few technologies I’ve been working with recently:
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

          {/* --- Right Column: Photo --- */}
          <div className="md:col-span-1 flex justify-center items-start pt-4">
            <div className="relative w-full max-w-xs transition-all duration-300">
              <div className="w-full pt-[100%] rounded-lg overflow-hidden relative">
                <img
                  src="/wellington_headshot.jpg"
                  alt="Wellington Oluwasegun Akitikori"
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
