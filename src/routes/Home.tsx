import React from "react";
import HomePage from "../components/Home Page/HomePage";
import HomeAnimation from "../components/Home Page/HomeAnimation";

import SEO from "../components/SEO";

const Home: React.FC = () => {
  return (
    <div className="z-30 relative">
      <SEO
        title="Abdullah | Full-Stack Developer & Designer Portfolio"
        description="I am Abdullah, a professional Full-Stack Developer specializing in building fast, beautiful, and high-performing digital experiences."
      />
      <HomeAnimation />
      <HomePage />
    </div>
  );
};

export default Home;
