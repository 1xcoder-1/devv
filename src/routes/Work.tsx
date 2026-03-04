import React from "react";
import WorkPage from "../components/Work Page/WorkPage";
import WorkAnimation from "../components/Work Page/WorkAnimation";

import SEO from "../components/SEO";

const Work: React.FC = () => {
  return (
    <div className="z-30 relative">
      <SEO
        title="Personal Projects | Abdullah's Portfolio"
        description="Explore a collection of high-end projects including e-commerce platforms, social media apps, and crypto trackers built with modern technologies."
      />
      <WorkAnimation />
      <WorkPage />
    </div>
  );
};

export default Work;
