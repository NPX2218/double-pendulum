/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React, { useState, useEffect } from "react";
import pendulumLogo from "./pendulum_logo.gif";
/////////////////////////////////////
// COMPONENT: NAVBAR
/////////////////////////////////////

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1140);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" text-white w-full ">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          <div className="flex items-center space-x-3 justify-center flex-row ">
            <img src={pendulumLogo} width="80" height="80" />
            <div className="sm:text-2xl text-xl md:text-4xl font-bold">
              Double Pendulum
            </div>
          </div>
        </a>

        {isMobile ? (
          <button
            aria-label="Toggle Menu"
            className=" text-gray-400 hover:text-white focus:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        ) : (
          <div className="md:flex flex-col md:flex-row md:space-x-8">
            <a href="/" className="py-2 px-3 rounded">
              Home
            </a>

            <a
              href="#introduction"
              data-scroll-target="#introduction"
              className="py-2 px-3 rounded"
            >
              Introduction
            </a>
            <a href="#euler-lagrange-derivation" className="py-2 px-3 rounded">
              Euler Lagrange
            </a>
            <a
              href="#double-pendulum-visualization"
              className="py-2 px-3 rounded"
            >
              Visualizer
            </a>
          </div>
        )}
      </div>
      {isMobile && showMenu && (
        <div className=" w-full" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black">
            <li>
              <a
                href="/"
                className="block py-2 px-3  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white  hover:bg-black hover:text-white "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white  hover:bg-black hover:text-white "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/assignments-hub"
                className="block py-2 px-3  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white  hover:bg-black hover:text-white "
              >
                Assignments
              </a>
            </li>
            <li>
              <a
                href="/#contact-form"
                className="block py-2 px-3  rounded md:hover:bg-transparent md:border-0 md:p-0 text-white  hover:bg-black hover:text-white "
              >
                Contact
              </a>
            </li>
            <li>
              <a className="py-2 px-3 rounded cursor-pointer">
                "Sign In / Sign Up"
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

/////////////////////////////////////
// EXPORTING NAVBAR
/////////////////////////////////////

export default Navbar;
