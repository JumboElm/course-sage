import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
  role: string;
};

const SliderCard = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10 bg-green-500">
      <div className="h-full w-full">
        <Image
          src={image}
          alt="image"
          width={350}
          height={350}
          className="w-full h-full"
        />
      </div>
      <div className="mt-6 mb-7">
        <div className="flex items-center ">
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
          <FaStar className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
        </div>
        <p className="mt-6 text-white w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold text-opacity-65 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias
          repellendus veritatis explicabo. Omnis, ratione laborum corporis
          facilis minima, aliquam saepe accusantium et ea itaque, dolores
          aperiam!
        </p>
        <div className="mb-7 ">
          <h1 className="text-xl text-white font-semibold">{name}</h1>
          <p className="text-lg text-white text-opacity-60">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
