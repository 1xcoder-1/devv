import React from "react";
import ArtConnectionPage from "../components/Projects/ArtConnectionPage";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";
import SEO from "../components/SEO";

const ArtConnection: React.FC = () => {
  return (
    <div className="z-30 relative">
      <SEO
        title="Art Connection Project | Abdullah's Portfolio"
        description="Art Connection - A digital platform connecting artists and art enthusiasts. Explore implementation details, tech stack, and user interface features."
        canonical="https://1xcoder.me/art-connection"
        ogImage="https://1xcoder.me/artconnectionMockup.jpg"
      />
      <ProjectsAnimation />
      <ArtConnectionPage />
    </div>
  );
};

export default ArtConnection;
