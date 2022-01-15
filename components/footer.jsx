import Link from "next/link";
import React from "react";
export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-500 font-medium">
            Links
          </div>
          <Link href="/#">
            <a className="my-3 block">
              Services <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Products <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              About Us <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Pricing <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Partners <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </Link>
        </div>
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-500 font-medium">
            Social Media
          </div>
          <Link href="/#">
            <a className="my-3 block">
              Sign in <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              New Account <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Demo <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Career
              <span className="text-teal-600 text-xs p-1">We are hiring</span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Surveys <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </Link>
        </div>
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-500 font-medium">
            Resources
          </div>
          <Link href="/#">
            <a className="my-3 block">
              Documentation <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Tutorials <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Support <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </Link>
        </div>
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-500 font-medium">
            Contact
          </div>
          <Link href="/#">
            <a className="my-3 block">
              Our Products <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Great Deals <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Analytics <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
          <Link href="/#">
            <a className="my-3 block">
              Mobile <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
