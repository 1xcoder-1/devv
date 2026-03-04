import React from "react";
import AboutAnimation from "../components/About Page/AboutAnimation";
import AboutPage from "../components/About Page/AboutPage";

import SEO from "../components/SEO";

const About: React.FC = () => {
  return (
    <div className="z-30 relative">
      <SEO
        title="About Abdullah | Professional Full-Stack Developer"
        description="Learn more about Abdullah, a programmer and problem solver dedicated to turning complex ideas into simple, high-performing digital solutions."
      />
      <AboutAnimation />
      <AboutPage />
    </div>
  );
};

export default About;
