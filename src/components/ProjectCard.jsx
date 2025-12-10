import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
// Note: You must ensure 'TbBulb' is available. If you encountered
// previous Vite/icon errors, consider switching to 'FiZap' or 'FiCode'.

const ProjectCard = ({ project }) => {
  // --- MAPPING THE NEW SCHEMA PROPERTIES ---
  const {
    title,
    summary, // New: Use summary for the card's main text
    techStack, // New: Use techStack for the list of technologies
    githubLink, // New: Use githubLink for the link
    liveLink, // New: Use liveLink for the link
    image, // New: Include image if you want to use it
  } = project;

  // We'll use the 'summary' property for the main paragraph text on the card.
  // The 'description' property is available for a future modal/detail page.

  return (
    <div
      className="bg-sapphire-bg p-6 rounded-lg shadow-xl hover:shadow-2xl 
                   transition duration-300 transform hover:-translate-y-1 
                   flex flex-col h-full border border-sapphire-bg hover:border-mint-accent/50"
    >
      {/* Optional: Display Image at the top */}
      {/* You would need to handle the image display here if you want it */}

      {/* --- Card Header: Icons & Title --- */}
      <header className="mb-4 flex justify-between items-start">
        <TbBulb size={30} className="text-mint-accent mt-1" />
        <div className="flex space-x-3 text-slate-dark">
          {/* Use the new property: githubLink */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="hover:text-mint-accent"
            >
              <FiGithub size={20} />
            </a>
          )}
          {/* Use the new property: liveLink */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo Link"
              className="hover:text-mint-accent"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </header>

      {/* --- Content --- */}
      <h4 className="text-2xl font-bold text-slate-light mb-2 hover:text-mint-accent transition duration-300">
        {title}
      </h4>

      {/* Use the new property: summary (for the short text on the card) */}
      <p className="text-slate-dark text-base mb-4 grow">{summary}</p>

      {/* --- Footer: Technologies --- */}
      <footer className="mt-auto">
        {/* Use the new property: techStack */}
        <ul className="flex flex-wrap text-xs font-mono text-slate-dark space-x-4">
          {techStack.map((tech, index) => (
            <li key={index} className="opacity-75">
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default ProjectCard;
