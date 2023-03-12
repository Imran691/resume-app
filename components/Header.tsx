import Image from "next/image";
import React from "react";
import Menu from "../public/icons/menu.png";

export default function Header() {
  return (
    <div className="flex bg-slate-100 text-lg py-4 sm:py-8 px-4 sm:px-16 text-stone-700 font-serif font-bold">
      <div className="flex flex-grow hover:underline text-lg md:text-2xl">
        Muhammad Imran
      </div>

      <div className="hidden sm:flex justify-end">
        <ul className="flex px-16 flex-wrap">
          <li className=" px-4 hover:underline ">Work</li>
          <li className=" px-4 hover:underline ">About me</li>
          <li className=" px-4 hover:underline ">Contact</li>
        </ul>


      </div>
      <div className="sm:hidden flex  rounded-full justify-end flex-1 pr-2">
          <Image src={Menu} alt="menu-icon" height={60} width={60} />
        </div>
    </div>
  );
}
