"use client";
import React from "react";
import Link from "next/link";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { usePathname } from "next/navigation";
export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Features",
    link: "/features",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMemu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
          {/* logo section */}

          <Link href="/" className="text-3xl font-bold">
            <span>Cab</span>
            <span className="text-primary">Hub</span>
          </Link>
          {/* desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link }) => {
                const isActive = pathname === link;
                return (
                  <li key={id} className="py-4">
                    <Link
                      href={link}
                      className={`${
                        isActive ? "text-primary dark:bg-primary" : "text-black"
                      } text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* dark mode */}
              <DarkMode />
            </ul>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMemu}
                className="cuesor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMemu}
                className="cuesor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
