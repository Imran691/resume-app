import React from "react";
import { education } from "data/education-data";

export default function Education() {
  return (
    <div className="flex flex-col py-10 bg-gray-100 px-2 md:px-12 font-serif">

      <div className="w-full px-2 md:px-20 text-2xl  text-stone-900 font-bold py-10">__Education</div>

      <div className="max-w-none w-auto">

      <div className="flex flex-col md:flex-row max-w-none w-auto">
          {education.map((edu) => (
            <div key={edu.id}>

              <div className="p-8 rounded-xl shadow-md mx-4 basis-0 flex-grow flex-shrink">
                <h1 className="py-10 text:xl md:text-2xl font-bold pb-4">{edu.institute}</h1>
                <p className="text-lg pb-8">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
