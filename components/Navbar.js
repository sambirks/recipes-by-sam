import Link from "next/link";
import { useState } from "react";
import ThemeToggle from './ThemeToggle'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-none z-10 bg-red-800 dark:bg-red-400 text-white">
        <div className="container px-4 mx-auto flex flex-wrap  justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 uppercase"
            >
              Recipes By Sam
            </a>
            </Link>
            <button
              className="cursor-pointer px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none transform rotate-90"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="transform rotate-90 text-2xl font-bold">|||</span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:bg-transparent">             
              <li className="nav-item text-center">
                <Link href="/recipes">
                <a
                  className="px-3 py-2 flex items-center text-center tex uppercase font-bold leading-snug hover:opacity-75"
                >
                  Recipes
                </a>
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link href="/blog">
                <a
                  className="px-3 py-2 flex items-center text-center tex uppercase font-bold leading-snug hover:opacity-75"
                >
                  Blog
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                >
                  About
                </a>
                </Link>
              </li>
              <li className="nav-item">
                  <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}