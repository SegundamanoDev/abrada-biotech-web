import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"; // Professional social icons

// Define social links (use your actual links!)
const socialData = [
  { icon: FiGithub, url: "Https://github.com/SegundamanoDev", label: "GitHub" },
  {
    icon: FiLinkedin,
    url: "Https://www.linkedin.com/in/wellington-oluwasegun-akitikori-6a6a00250",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    url: "mailto:akitikori.wellington@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  // Current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sapphire-bg text-slate-dark py-8">
      <div className="container mx-auto px-4 text-center">
        {/* --- Social Icons --- */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialData.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-mint-accent"
                aria-label={link.label}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        {/* --- Copyright Text --- */}
        <p className="text-sm">
          Designed & Built by Wellington Oluwasegun Akitikori &copy;{" "}
          {currentYear}
        </p>
        <p className="text-xs mt-1 font-mono">MERN Stack v3 Showcase</p>
      </div>
    </footer>
  );
};

export default Footer;
