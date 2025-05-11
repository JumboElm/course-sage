import React from "react";
import CourseCard from "@/components/Home/Course/CourseCard";
import Home from "@/components/Home/Home";

const PageHome = () => {
  return (
    <div>
      <Home />
      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>
        <CourseCard />
      </div>
    </div>
  );
};

export default Home;
