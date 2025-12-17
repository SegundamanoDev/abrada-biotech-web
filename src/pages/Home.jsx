import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    // --- Full-Height Hero Section ---
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 sm:pb-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-left">
          {/* --- Small Intro Line --- */}
          <p className="text-mint-accent font-mono text-lg mb-4 sm:mb-6">
            Hi, my name is
          </p>

          {/* --- Main Name/Headline (Large and Impactful) --- */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-light mb-4">
            Wellington Oluwasegun Akitikori.
          </h1>

          {/* --- Secondary Role Headline (MERN Specialist focus) --- */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-8 leading-tight">
            I build production-ready{" "}
            <span className="text-mint-accent">MERN Stack applications.</span>
          </h2>

          {/* --- Short Value Proposition (Aligned with Resume) --- */}
          <p className="text-slate-dark max-w-xl mb-12 text-lg">
            I am a Full Stack Developer specializing in creating robust,
            scalable solutions with a strong focus on{" "}
            <span className="text-mint-accent">
              authentication, transaction workflows, and secure REST APIs.
            </span>
            I transform complex concepts into high-performance web applications.
          </p>

          {/* --- Call to Action (CTA) Button --- */}
          <Link
            to="/projects"
            className="inline-block px-8 py-4 border-2 
                                   border-mint-accent text-mint-accent 
                                   font-semibold rounded-md text-lg font-mono 
                                   transition duration-300 shadow-xl 
                                   hover:bg-mint-accent hover:text-navy-bg"
          >
            Check out my work!
          </Link>

          <div className="mt-8">
            <SocialLinks direction="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
