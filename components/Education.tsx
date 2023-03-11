import React from "react";

export default function Education() {
  return (
    <div className="flex flex-col md:flex-row py-10 bg-white px-2 md:px-12 font-serif">

      <div className="w-full md:w-2/5 px-2 md:px-20 text-2xl  text-stone-900 font-bold py-10">__Education</div>

      <div className="w-full md:w-3/5 px-2 md:px-20 flex-grow">

        <div className= "items-center shadow-2xl mb-8 rounded-xl px-4 md:px-8">
          <h1 className="py-10 text:xl md:text-2xl font-bold pb-4">Bahauddin Zakaria University, Multan</h1>
          <p className="text-lg pb-8">Bachelor of Science in Electrical Engineering</p>
        </div>
        <div className= "items-center shadow-2xl mb-8 rounded-xl px-4 md:px-8">
          <h1 className="py-10 text-xl md:text-2xl font-bold pb-4">University of Management and Technology, Lahore</h1>
          <p className="text-lg pb-8">Master of Science in Electrical Engineering</p>
        </div>
        <div className= "items-center shadow-2xl mb-8 rounded-xl px-4 md:px-8">
          <h1 className="py-10 text-xl md:text-2xl font-bold pb-4">Presidential Initiative for Artificial Intelligence and Computing</h1>
          <p className="text-lg pb-8">Web-3 and Metaverse Development (One year programme)</p>
        </div>
    
      </div>
    </div>
  );
}
