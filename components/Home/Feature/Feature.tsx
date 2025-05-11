"use client";

import Image from "next/image";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
const Feature = () => {
  return (
    <div className="pt-16 pb-16 bg-green-500">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[90%] mx-auto">
        <div>
          <Tilt>
            <div>
              <Image
                src="/images/f.png"
                alt="image"
                width={1000}
                height={1000}
              />
            </div>
          </Tilt>
        </div>

        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-col">
              <FaBriefcase className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-xl text-amber-300 font-semibold">
              Premium learning experience
            </h1>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-amber-400">
            Providing amazing online courses.
          </h1>

          <div className="mt-8 mb-6">
            <h1 className="text-lg md:text-2xl text-amber-300 text-opacity-70 font-semibold">
              Master the skills that matter to you
            </h1>
            <p className="text-sm md:text-base text-amber-500 text-opacity-70 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maxime fuga temporibus! Minima dolore cum accusantium
              dolor voluptas perferendis labore?
            </p>
          </div>
          <div className="mt-8 mb-6">
            <h1 className="text-lg md:text-2xl text-amber-300 text-opacity-70 font-semibold">
              Increase your learning skills
            </h1>
            <p className="text-sm md:text-base text-amber-500 text-opacity-70 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maxime fuga temporibus! Minima dolore cum accusantium
              dolor voluptas perferendis labore?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
