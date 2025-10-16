import React from "react";
import ContactAnimation from "../components/ContactPage/ContactAnimation";
import ContactPage from "../components/ContactPage/ContactPage";

const Contact: React.FC = () => {
  return (
    <div className="relative">
      <ContactAnimation />
      <div className="relative z-20">
        <ContactPage />
      </div>
    </div>
  );
};

export default Contact;
