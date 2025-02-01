"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import clsx from "clsx";
import { abril_fatface } from "@/lib/font";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let Links = [
    { name: "Home", link: "#" },
    { name: "Features", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <header
      className={clsx(
        "navbar sticky left-0 top-0 z-50 w-full transition-transform",
        {
          "primer-medium": scrolled,
        },
      )}
    >
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:px-10">
        <div
          className={`${abril_fatface} relative flex cursor-pointer items-center text-xl font-bold text-gray-800 md:text-2xl`}
        >
          <span className="mr-1 pt-2 text-3xl"></span>
          LeadMonie
        </div>

        <div
          onClick={handleNavClick}
          className={clsx(
            `tham tham-e-squeeze tham-w-6 absolute right-2 top-1 px-10 py-7 hover:opacity-100 md:hidden`,
            {
              "tham-active": open,
            },
          )}
        >
          <div className="tham-box mr-5">
            <div className="tham-inner bg-black" />
          </div>
        </div>
        <nav>
          <ul
            className={`absolute left-0 z-[-1] flex w-full flex-col items-center gap-8 bg-white py-9 pb-12 shadow-md transition-all duration-500 ease-in md:static md:z-auto md:w-auto md:flex-row md:gap-0 md:py-0 md:pb-0 md:shadow-none ${
              open ? "top-14" : "top-[-31rem]"
            }`}
          >
            {Links.map((link, index) => (
              <li
                key={index + 1}
                className="cursor-pointer text-lg font-medium after:mt-1 after:block after:scale-x-0 after:border-b-[4px] after:border-gray-800 after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100 md:ml-8 md:text-base"
                onClick={() => setOpen(false)}
              >
                <Link href={link.link} className="text-gray-800">
                  {link.name}
                </Link>
              </li>
            ))}
            <Button className="bg-slate-50 md:hidden">Download App</Button>
          </ul>
        </nav>
        <Button className="hidden bg-slate-50 md:block">Download App</Button>
      </div>
    </header>
  );
};

export default Nav;
