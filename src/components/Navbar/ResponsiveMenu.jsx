import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";
import Link from "next/link";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-black dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/* user top section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle className="text-5xl " />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>

        {/* Navigation links section */}
        <nav className="mt-12 ">
          <ul>
            {Navlinks.map(({ id, name, link }) => {
              return (
                <li key={id} className="py-4">
                  <Link
                    href={link}
                    className={`text-xl font-medium 
                    text-black dark:text-white duration-300`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* bottom fotter section*/}

      <div>
        <h1>
          made with hardwork.{" "}
          <a  className="text-red-600 font-bold" href="https://hamideghbali.github.io/portfolio/">Do not tap</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
