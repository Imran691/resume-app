import Image from "next/image";
import React from "react";
import Menu from "../public/icons/menu.png";

export default function Header() {
  return (
    <section className="nav">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <h1 className="relative z-30 font-semibold text-2xl">Muhammad Imran</h1>

        <div className="flex items-center gap-3 md:gap-12">
        <ul id="menu" className="nav-menus translate-y-[-200%] md:translate-y-0">
          <a className="nav-link" href="#homeSec">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#conatact">Contact</a>
        </ul>
      </div>

        <div className="sm:hidden flex rounded-full justify-end flex-1 mr-2">
          <Image src={Menu} alt="menu-icon" height={60} width={60} />
        </div>
      </div>
    </section>
  );
}
