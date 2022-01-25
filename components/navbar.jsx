import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const linkClassNames =
  " hover:border-b-2 py-2 hover:border-blue-200 mx-2 sm:mx-4 md:mx-8";
const activeLinkClassNames =
  "border-b-2 border-blue-500 py-2  mx-2  sm:mx-4 md:mx-8";

export const Navbar = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset >= 200)
      );
    }
  }, []);

  const router = useRouter();

  const getClassName = (path) =>
    router.pathname === path ? activeLinkClassNames : linkClassNames;

  return (
    <nav className="absolute left-1/2 transform -translate-x-1/2  top-0  z-50">
      <div className="container flex items-center justify-center mx-auto text-gray-600 dark:text-gray-400  capitalize">
        <Link href="/">
          <a className={getClassName("/")}>Home</a>
        </Link>
        <Link href="/work">
          <a className={getClassName("/work")}>Work</a>
        </Link>
        <p className="text-3xl mx-2 text-center select-none sm:mx-4 md:hidden">
          SO
        </p>
        <p className="text-2xl mx-2 text-center select-none sm:mx-4 hidden md:inline">
          Sardorbek Omonkulov
        </p>
        <Link href="/blog">
          <a className={getClassName("/blog")}>Blog</a>
        </Link>
        <Link href="/contact">
          <a className={getClassName("/contact")}>Contact</a>
        </Link>
      </div>
    </nav>
  );
};
