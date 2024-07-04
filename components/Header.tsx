import React from "react";
import Link from "next/link";
import navLinks from "@/utils/navigation";

const Header = () => {
  return (
    <>
      <header className="absolute w-full h-[calc(var(--head-height)+1rem)] flex justify-center items-center px-2 top-0 left-0 z-50 text-[#2354c6] overflow-hidden ">
        <div className="h-full w-full">
          <nav className="h-full">
            <ul className="h-full list-none flex justify-evenly items-center text-xl leading-6">
              {navLinks.map((navLink, id) => (
                <li key={id} className="py-4 px-2">
                  <Link
                    href={navLink.link}
                    className="py-1 px-2 inline-block align-middle transform translateZ-0 shadow-none relative overflow-hidden before:content-[''] text-[15px] md:text-base lg:text-2xl "
                    passHref
                  >
                    {navLink.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
