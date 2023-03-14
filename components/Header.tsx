import Image from "next/image";
import React from "react";
import Menu from "../public/icons/menu.png";

export default function Header() {
  return (
    <section className="bg-neutral-700 text-white font-name text-sm md:text-base lg:text-lg">
      <div className="flex py-1 sm:py-3 lg:py-5 xl:py-7 px-2 sm:px-6 lg:px-8 xl:px-12 font-bold justify-between">
        <h1>Muhammad Imran</h1>

        <ul className="flex-wrap hidden sm:flex">
          <li className=" px-4 hover:underline">Work</li>
          <li className=" px-4 hover:underline ">About</li>
          <li className=" px-4 hover:underline ">Contact</li>
        </ul>

        <div className="sm:hidden flex rounded-full justify-end flex-1 mr-2">
          <Image src={Menu} alt="menu-icon" height={60} width={60} />
        </div>
      </div>
    </section>
  );
}
