import Image from "next/image";
import React from "react";
import Menu from "../public/icons/menu.png";

export default function Header() {
  return (
    <div className="flex bg-slate-100 text-lg py-4 sm:py-8 px-4 sm:px-16 text-stone-700 font-serif font-bold">
      <div className="flex-grow hover:underline text-lg md:text-2xl">Muhammad Imran</div>

      <div>
        <ul className="flex px-16 invisible sm:visible flex-wrap">
          <li className=" px-4 hover:underline ">Work</li>
          <li className=" px-4 hover:underline ">About me</li>
          <li className=" px-4 hover:underline ">Contact</li>
        </ul>
      </div>

      <div className="block visible sm:invisible flex-shrink-0 rounded-full">
        <Image src={Menu} alt="menu-icon" height={60} width={60} />
      </div>
    </div>
  );
}
