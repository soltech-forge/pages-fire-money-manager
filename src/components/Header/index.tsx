"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 1) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <div className={`fixed bg-white dark:bg-black left-0 top-0 z-99999 w-full py-4  ${stickyMenu ? "shadow" : ""}`}>
      <nav className="container relative mx-auto xl:px-1">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-gray-100">
              <span>
                <Image src="/images/logo.svg" width="50" alt="N" height="50" className="" />
              </span>
              {/* <span>FIRE Money Manager</span> */}
            </span>
          </Link>

          <div className="gap-3 mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeToggler />
          </div>

          <button className="block lg:hidden p-2 rounded-md" onClick={() => setNavigationOpen(!navigationOpen)} aria-label="Toggle menu">
            {navigationOpen ? (
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {menuData.map((menuItem, index) => (
                <li className="mr-3 px-4" key={index}>
                  <Link href={`${menuItem.path}`} className={`inline-block py-2 text-lg ${pathUrl === menuItem.path ? "text-primary" : "hover:text-primary"}`}>
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {navigationOpen && (
          <div className="block lg:hidden mt-4 w-full">
            <ul className="flex flex-col items-start list-none w-full">
              {menuData.map((menuItem, index) => (
                <li className="w-full px-4 py-2" key={index}>
                  <Link href={`${menuItem.path}`} className={`block w-full text-lg ${pathUrl === menuItem.path ? "text-primary" : "hover:text-primary"}`}>
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
