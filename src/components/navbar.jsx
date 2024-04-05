
import React, { useState } from "react";
import { HashLink as Link} from 'react-router-hash-link';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };

    return (
      <nav
      className="flex flex-wrap items-center justify-between px-1 py-px lg:h-20 lg:py-0 bg-cool-transparent font-sans"
    >
            <div className="flex md:hidden">
              <button id="hamburger" onClick={toggleMenu}>
                <div className="text-slate-300">
                  {isMenuOpen ? (
                    <img className="toggle block " src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" color="white" alt="Menu" />
                  ) : (
                    <img className="toggle block bg-white" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" alt="Close Menu" />
                  )}
                </div>
              </button>
            </div>
            <div className={isMenuOpen ? "toggle hidden w-30 md:w-auto md:flex text-left text-bold mt-5 md:mt-0 border-t-2 border-blue-900 bg-purple md:border-none" : "toggle w-full mr-10 md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none"}>
              <Link to="#home" className="block md:inline-block text-shady hover:underline decoration-pink-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-sm">Home</Link>
              <a href="#about" className="block md:inline-block text-shady hover:underline decoration-pink-500 px-3 md:px-1 py-1 lg:px-3 md:border-none md:text-sm lg:text-sm">About</a>
              <a href="#resume" className="block md:inline-block text-shady hover:underline decoration-pink-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-sm">Resume</a>
              <a href="#projects" className="block md:inline-block text-shady hover:underline decoration-pink-500 px-3 md:px-1 py-1 lg:px-3 md:border-none md:text-sm lg:text-sm">Projects</a>
              <a href="#contact" className="block md:inline-block text-shady hover:underline decoration-pink-500 px-3 md:px-2 py-1 lg:px-3 md:border-none md:text-sm lg:text-sm">Contact</a>
            </div>
          </nav>


    )
}