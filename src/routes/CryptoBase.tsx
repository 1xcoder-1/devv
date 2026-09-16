import React from "react";
import CryptoBasePage from "../components/Projects/CryptoBasePage";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";
import SEO from "../components/SEO";

const CryptoBase: React.FC = () => {
  return (
    <div className="z-30 relative">
      <SEO
        title="CryptoBase Project | Abdullah's Portfolio"
        description="CryptoBase - Real-time cryptocurrency tracking dashboard with market insights, charts, and portfolio analytics built by Abdullah."
        canonical="https://1xcoder.me/crypto-base"
        ogImage="https://1xcoder.me/cryptobaseMockup.jpg"
      />
      <ProjectsAnimation />
      <CryptoBasePage />
    </div>
  );
};

export default CryptoBase;
