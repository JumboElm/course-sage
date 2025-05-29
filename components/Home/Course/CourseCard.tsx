"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { FaFile, FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Course } from "@/data/type";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/courses/${course.id}`)}
      className="bg-green-400 rounded-lg overflow-hidden   cursor-pointer hover:scale-[1.02] transition-transform"
    >
      <Tilt>
        <div>
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center flex-col mt-[-4rem] rounded-full bg-amber-900 text-emerald-400">
            ${course.price}
          </h1>
          <h2 className="text-white font-semibold mt-2">{course.title}</h2>
          <p className="text-sm text-emerald-100">by {course.author}</p>
          <div className="flex mt-2 items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-base text-amber-700 font-semibold">
              ({course.reviewNumber} Reviews)
            </span>
          </div>
          <div className="mt-6 mb-6 w-full h-[2px] bg-gray-700 opacity-15"></div>
          <div className="flex mb-8 items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaFile className="w-4 h-4 text-orange-400" />
              <p className="text-base font-semibold text-amber-800">
                {course.lessons} Lessons
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserGroup className="w-4 h-4 text-orange-400" />
              <p className="text-base font-semibold text-amber-800">
                {course.students} Students
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
