import { navLinks } from "@/constant/constat";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Nav = () => {
  return (
    <div className="fixed w-full transition-all duration-200 h-[12vh] z-[1000] bg-emerald-600">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="nav_link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-amber-400 hover:bg-amber-700 transition-all duration-200 rounded-lg">
            SignUp Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
