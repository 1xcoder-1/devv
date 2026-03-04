import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Cursor from "./components/Cursor";
import Grain from "./components/Grain";
import Navigation from "./components/Navigation";
import CursorContextProvider from "./context/CursorContext";
import Loader from "./components/Loader";
import About from "./routes/About";
import ArtConnection from "./routes/ArtConnection";
import Contact from "./routes/Contact";
import CryptoBase from "./routes/CryptoBase";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Wonder from "./routes/Wonder";
import Work from "./routes/Work";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <HelmetProvider>
      <CursorContextProvider>
        <Grain />
        <Cursor />
        <Navigation />
        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/art-connection" element={<ArtConnection />} />
            <Route path="/wonder" element={<Wonder />} />
            <Route path="/crypto-base" element={<CryptoBase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </CursorContextProvider>
    </HelmetProvider>
  );
}

export default App;
