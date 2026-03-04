import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";
import useDimension from "../hooks/useDimension";

import Magnetic from "./Magnetic";

const Navigation: React.FC = () => {
  // Get the current location from the router
  const location = useLocation();

  // Custom hook to get the dimensions of the window
  const dimension = useDimension();

  // Custom cursor context for mouse events
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  // Determine text color based on the current route
  const textColorClass =
    location.pathname === "/work" ||
      location.pathname === "/contact" ||
      location.pathname === "/about"
      ? "text-[#ece7e1]"
      : "";

  // Render navigation links conditionally based on the current route
  return (
    <div className={`${textColorClass} z-40 relative`}>
      {location.pathname !== "/" ? (
        <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 absolute md:fixed text-[11px] sm500:text-xs font-medium">
          {/* Home or Work link based on the current route */}
          <div className="md:w-16 md:mb-8 ml-8 md:ml-0 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            {location.pathname === "/art-connection" ||
              location.pathname === "/wonder" ||
              location.pathname === "/crypto-base" ? (
              <Magnetic>
                <Link
                  to="/work"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                  className="uppercase py-2 hover:opacity-50 duration-300 ease-in-out block"
                >
                  W o r k
                </Link>
              </Magnetic>
            ) : (
              <Magnetic>
                <Link
                  to="/"
                  onMouseOver={mouseOverEvent}
                  onMouseOut={mouseOutEvent}
                  className="uppercase py-2 hover:opacity-50 duration-300 ease-in-out block"
                >
                  H o m e
                </Link>
              </Magnetic>
            )}
          </div>

          {/* Vertical divider */}
          <div
            className={`${location.pathname === "/work" ||
              location.pathname === "/contact" ||
              location.pathname === "/about"
              ? "bg-[#ece7e1]"
              : "bg-[#1a1818]"
              } w-0 sm350:w-12 sm500:w-24 md:w-[1px] h-[1px] md:h-24 -mt-1 md:mt-2 md:mb-20 opacity-75`}
          ></div>

          {/* Year display */}
          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1 text-[10px] md:text-[11px]">
              <span>©</span>
              <span>/</span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>6</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 fixed text-[11px] sm500:text-xs font-medium">
          {/* External links */}
          <div className="ml-6 md:ml-0 mr-4 md:mr-16 md:pt-16 md:-rotate-90">
            <Magnetic>
              <Link
                to="mailto:1xcoder@proton.me"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="py-2 hover:opacity-50 duration-300 ease-in-out block"
              >
                {dimension.width < 1100 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                ) : "Gmail"}
              </Link>
            </Magnetic>
          </div>
          <div className="mr-4 md:mr-16 md:pt-16 md:-rotate-90">
            <Magnetic>
              <Link
                to="https://github.com/1xcoder-1"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="py-2 hover:opacity-50 duration-300 ease-in-out block"
              >
                {dimension.width < 1100 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                ) : "GitHub"}
              </Link>
            </Magnetic>
          </div>
          <div className="md:mb-8 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Magnetic>
              <Link
                to="https://www.linkedin.com/in/1xcoder/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="py-2 hover:opacity-50 duration-300 ease-in-out block"
              >
                {dimension.width < 1100 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                ) : "LinkedIn"}
              </Link>
            </Magnetic>
          </div>

          {/* Vertical divider */}
          <div className="w-0 sm500:w-12 sm:w-24 md:w-[1px] h-[1px] md:h-24 opacity-75 bg-[#1a1818] -mt-1 md:mt-2 md:mb-20"></div>

          {/* Year display */}
          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1 text-[10px] md:text-[11px]">
              <span>©</span>
              <span>/</span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>6</span>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Navigation;
