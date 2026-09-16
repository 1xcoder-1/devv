import React from "react";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";
import WonderPage from "../components/Projects/WonderPage";
import SEO from "../components/SEO";

const Wonder: React.FC = () => {
  return (
    <div className="z-30 relative">
      <SEO
        title="Wonder App Project | Abdullah's Portfolio"
        description="Wonder App - A feature-packed modern web experience. Explore interactive design, responsive layout, and full-stack integration."
        canonical="https://1xcoder.me/wonder"
        ogImage="https://1xcoder.me/wonderMockup.jpg"
      />
      <ProjectsAnimation />
      <WonderPage />
    </div>
  );
};

export default Wonder;
