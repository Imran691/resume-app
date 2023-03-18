"use client"
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";


export default function MenuButton() {
    const [open, setOpen] = useState(false);
  return (
        <div>
        <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={ () => setOpen(!open)}/>
      </div>
  );
}
