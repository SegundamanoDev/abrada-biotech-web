import React from "react";
import { Link } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi"; // A clear warning icon

const NotFound = () => {
  return (
    // Use the main content wrapper styles (padding and dark background)
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center p-8 bg-navy-bg">
      <div className="text-center max-w-lg">
        {/* --- Icon and Status Code --- */}
        <div className="flex justify-center items-center mb-6">
          <PiWarningCircleBold size={80} className="text-mint-accent" />
          <h1 className="text-9xl font-extrabold ml-4 text-slate-light">404</h1>
        </div>

        {/* --- Title and Description --- */}
        <h2 className="text-3xl font-bold mb-4 text-slate-light">
          Page Not Found
        </h2>

        <p className="text-lg text-slate-dark mb-8">
          Oops! The MERN resource you were looking for doesn't exist. It might
          have been moved, deleted, or you might have mistyped the address.
        </p>

        {/* --- Call to Action (Home Button) --- */}
        <Link
          to="/"
          className="inline-block px-8 py-3 
                     bg-mint-accent text-navy-bg 
                     font-semibold rounded-md 
                     shadow-lg transition duration-300 
                     hover:bg-opacity-90 hover:shadow-xl"
        >
          Go Back to Home
        </Link>

        {/* --- Secondary Link (Contact) --- */}
        <Link
          to="/contact"
          className="block mt-4 text-slate-dark text-sm hover:text-mint-accent transition duration-300"
        >
          Report an issue or contact me
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
