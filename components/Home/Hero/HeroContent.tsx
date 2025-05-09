import React from "react";

const HeroContent = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
        Best online platform from education.
      </h1>
      <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque vitae
        architecto facere omnis dolorem officiis .
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <button className="button-cls  bg-amber-400 hover:bg-amber-700 ">
          Get Started
        </button>
        <button className="button-cls   bg-orange-400 hover:bg-orange-600 ">
          Learn More
        </button>
      </div>
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            260+
          </p>
          <p className="w-[100px] h-[3px] bg-amber-900 mt-2 mb-2 rounded-b-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">
            Tutors
          </p>
        </div>
        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            2240+
          </p>
          <p className="w-[100px] h-[3px] bg-yellow-600 mt-2 mb-2 rounded-b-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">
            Students
          </p>
        </div>

        <div>
          <p className="md:text-xl lg:text-2xl text-base text-white font-bold">
            60+
          </p>
          <p className="w-[100px] h-[3px] bg-gray-800 mt-2 mb-2 rounded-b-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-70">
            Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
