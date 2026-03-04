import React from "react";
import ContactAnimation from "../components/ContactPage/ContactAnimation";
import ContactPage from "../components/ContactPage/ContactPage";

import SEO from "../components/SEO";

const Contact: React.FC = () => {
  return (
    <div className="relative">
      <SEO
        title="Contact Abdullah | Hire a Professional Full-Stack Developer"
        description="Ready to bring your digital vision to life? Get in touch with Abdullah for collaboration on high-end web applications and design projects."
      />
      <ContactAnimation />
      <div className="relative z-20">
        <ContactPage />
      </div>
    </div>
  );
};

export default Contact;
