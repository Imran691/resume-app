// "use client"
import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";
import DarkModBtn from "./DarkModeBtn";

export default function Header() {
  // const [open, setOpen] = useState(false);

  return (
    <section className="nav">
        <div className="container flex items-center justify-between h-16 md:h-20 max-w-full">
      <h1 className="relative z-30 font-semibold text-2xl">Muhammad Imran</h1>
    

        <div className="flex flex-row-reverse md:flex-row items-center gap-3 md:gap-12">
        
        <ul id="menu" className="nav-menus translate-y-[-200%] md:translate-y-0">
          <a className="nav-link" href="#homeSec">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#conatact">Contact</a>
            <DarkModBtn/>
        </ul>
        
        {/* <nav className={`${open? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
        <FiMenu className="relative z-30 p-2 md:hidden dark:invert" onClick={ () => setOpen(!open)}/>

        </nav> */}

      </div>
      </div>
    </section>
  );
}
