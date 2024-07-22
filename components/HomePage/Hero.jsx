import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-screen flex items-center">
      <div className="container mx-auto px-2">
        <h1 className="text-5xl font-bold text-white dark:text-slate-200 mb-2">
          Welcome to IkoToilets
        </h1>
        <p className="text-lg text-white dark:text-slate-200-">
          Discover the best toilets for your needs
        </p>
      </div>
    </div>
  );
};

export default Hero;
