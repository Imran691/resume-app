"use client"
// import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function DarkModBtn() {
    // const [mounted, setMounted] = useState(false)
    // useEffect only runs on the client, so now we can safely show the UI
    // useEffect(() => {
    //   setMounted(true)
    // }, [])
  
    // if (!mounted) {
    //   return null
    // }
    const { theme, setTheme, systemTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
    {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select> */}

    {currentTheme === "dark" ? (
        <BsFillSunFill className="h-6 w-6 cursor-pointer text-yellow-500" onClick={() => setTheme("Light")}/>
        ) : (
        <BsFillMoonFill className="h-6 w-6 cursor-pointer" onClick={() => setTheme("dark")}/>
    )}
    </>
  );
}
