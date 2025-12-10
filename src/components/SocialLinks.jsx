import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

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

const SocialLinks = ({ direction = "horizontal" }) => {
  const listClasses = direction === "vertical" ? "space-y-6" : "space-x-6";
  const linkClasses =
    "transition duration-300 hover:text-mint-accent text-slate-light";

  return (
    <ul className={`flex ${listClasses}`}>
      {socialData.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={linkClasses}
            >
              <Icon size={24} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
