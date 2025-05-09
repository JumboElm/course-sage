import React from "react";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-amber-950">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-xl text-green-500 font-semibold">
              Guaranteed and certified
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
