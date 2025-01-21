"use client"

import Link from "next/link"
import { useState } from "react"
import Button from "./Button"
import clsx from "clsx"

const Nav = () => {
  const [open, setOpen] = useState(false)

  let Links = [
    { name: "Home", link: "#" },
    { name: "Features", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Contact Us", link: "#" },
  ]

  const handleNavClick = () => {
    setOpen((prev) => {
      return !prev
    })
  }
  return (
    <header className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-xl md:text-2xl cursor-pointer flex items-center 
      text-gray-800 relative"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          LeadMonie
        </div>

        <div
          onClick={handleNavClick}
          className={clsx(
            `tham tham-e-squeeze tham-w-6 absolute right-2 top-1 px-10 py-7 hover:opacity-100 md:hidden`,
            {
              "tham-active": open,
            }
          )}
        >
          <div className="tham-box mr-5">
            <div className="tham-inner bg-black" />
          </div>
        </div>
        <nav>
          <ul
            className={`flex flex-col md:flex-row items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:py-0 py-9 transition-all duration-500 ease-in shadow-md md:shadow-none gap-8 md:gap-0 ${
              open ? "top-14" : "top-[-31rem]"
            }`}
          >
            {Links.map((link, index) => (
              <li
                key={index + 1}
                className="md:ml-8 text-lg font-medium md:text-base cursor-pointer after:mt-1 after:block after:scale-x-0 after:border-b-[4px] after:border-gray-800 after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:after:scale-x-100"
              >
                <Link href={link.link} className="text-gray-800">
                  {link.name}
                </Link>
              </li>
            ))}
            <Button className="block md:hidden">Download App</Button>
          </ul>
        </nav>
        <Button className="hidden md:block">Download App</Button>
      </div>
    </header>
  )
}

export default Nav
