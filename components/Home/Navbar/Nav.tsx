import { navLinks } from "@/constant/constat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="fixed w-full transition-all duration-200 h-[12vh] z-[1000] bg-emerald-600">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="nav_link cursor-pointer hover:underline">
                {link.label}
              </p>
            </Link>
          ))}
          <Link href="/cart">
            <button className="text-white hover:underline relative nav_link cursor-pointer">
              Cart
            </button>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
            className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-amber-400 hover:bg-amber-700 transition-all duration-200 rounded-lg"
          >
            SignUp Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
