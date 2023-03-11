import React from "react";
import { mentors } from "data/mentors-data";
import Image from "next/image";

export default function Mentors() {
  return (
    <div className="flex flex-col md:flex-row py-10 bg-white px-2 md:px-12 font-serif">
      
      <div className="w-full md:w-2/5 px-2 md:px-20 text-2xl  text-stone-900 font-bold py-10">
        __Mentors
      </div>

      <div className="w-full md:w-3/5 px-2 md:px-20 flex-grow">
        <div>
          {mentors.map((ment) => (
            <div
              key={ment.id}
              className="px-10 flex items-center shadow-2xl mb-8 rounded-xl"
            >
              <div>
                <Image
                  src={ment.src}
                  alt={ment.title}
                  width={80}
                  height={80}
                  className="flex-1 w-full rounded-xl flex-shrink-0"
                />
              </div>

              <div className="flex-col py-6 flex flex-[2] text-left px-4 md:px-8 text-lg">
                <h1 className="pt-2 text-xl md:text-2xl font-bold">{ment.title}</h1>
                <p className="pt-2 text-lg">{ment.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
