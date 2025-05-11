import React from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-amber-950">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-xl text-amber-600 font-semibold">
              Guaranteed and certified
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-amber-500">
            Online learning wherever and whenever.
          </h1>
          <p className="mt-4 text-amber-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, optio iusto? Eos, molestiae officia quas et reiciendis
            sequi consequuntur natus illum eveniet, voluptatibus, distinctio
            labore.
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 bg-orange-400  hover:bg-yellow-300 transition-all duration-200 rounded-3xl text-white">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>
        <div>
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-amber-900 text-opacity-5">
              01
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-amber-500 font-bold">
                Flexible schedule
              </h1>
              <p className="w-[90%] lg:w[80%] text-base text-amber-700 text-opacity-60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis, quisquam?
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-amber-900 text-opacity-5">
              02
            </h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-amber-500 font-bold">
                Pocket Friendly
              </h1>
              <p className="w-[90%] lg:w[80%] text-base text-amber-700 text-opacity-60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis, quisquam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
