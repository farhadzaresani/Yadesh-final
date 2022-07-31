import React from "react";
import CourseCard from "../_cards/CourseCard";

const ProgressListComp = () => {
  return (
  <div className="text-white flex justify-center mt-10 ">
    <div className=" w-[92vw] flex flex-col ">
      <div>
      <h1 className="flex items-center text-[22px] font-bold z-10 mb-4"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2"></div>   لیست
من  </h1>
        <p className="text-[#C4C4C4]" > لیست دوره های شما</p>
      </div>
      <div className="flex flex-wrap gap-[7vw] mt-10 justify-center ">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      <button className="w-[200px] h-[46px] border-[2px] rounded-md border-[#00FF85]"> نمایش همه (46مورد) +</button>
      </div>
    </div>
  </div>
  )

};

export default ProgressListComp;
