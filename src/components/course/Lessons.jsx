import React from "react";
import ThisCourseLessons from "./ThisCourseLessons";

const LessonsComp = () => {
  return(

    <div className="">
        <div className='mr-10 mb-10'>
          <h1 className="flex text-white items-center text-[22px] font-bold z-10 mb-2">
            <div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2">
            </div> درس های سرمایه گذاری </h1>
          <p className="text-[#C4C4C4] text-[15px]" >
            درس های این دوره
          </p>
        </div>
        <div className="flex flex-col gap-10">
        <ThisCourseLessons/>
        <ThisCourseLessons/>
        <ThisCourseLessons/>
        <ThisCourseLessons/>
        <ThisCourseLessons/>
        <ThisCourseLessons/>
        <ThisCourseLessons/>

        </div>
    </div>
  ) 
};

export default LessonsComp;
