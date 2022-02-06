import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Sun from "./svg/sun";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex p-7 ">
      <button
        className="flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full dark:bg-gray-700 outline-gray-700 dark:outline-gray-200
         hover:outline outline-offset-2 outline-4"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        {theme == "dark" ? "Light" : "Dark"}
      </button>

      <Image
        src="/port.jpg"
        alt="Sardorbek Omonkulov"
        height="100%"
        width="100%"
        className="w-48 h-48 rounded-full mx-auto"
      />
    </nav>
  );
};
