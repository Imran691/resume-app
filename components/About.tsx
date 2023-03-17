import Image from "next/image";
import React from "react";
import MyImage from "../public/images/pic2.png";
import { aboutMe } from "data/about-data";

export default function Main() {
  let { name, message, intro } = aboutMe;
  return (
    <section id="about" className="py-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-primary-default">
          <Image
            className="w-full h-full object-cover opacity-90"
            src={MyImage}
            alt="profile-pic"
          />
        </div>
        <div className="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
          <h2 className="text-primary-default font-bold text-2xl md:text-3xl mb-3">
            {name}{" "}
          </h2>
          <h4 className="text-primary-default font-bold text-xl md:text-2xl mb-3">
            {message}
          </h4>
          <p className="mb-3 opacity-80">{intro}</p>
        </div>
      </div>
    </section>
  );
}
