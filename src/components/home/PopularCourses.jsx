import React from "react";
import PopCourseCard from "../_cards/PopCourseCard";
import PopCourseCardLarge from "../_cards/PopCourseCardLarge";

const PopularCoursesComp = () => {
  return (
    <div className='h-[557px] mx-auto w-full'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
          <p className='text-[#E6FFF3] text-2xl'> دوره های پرطرفدار </p>
        </div>
        <p className='text-[#C4C4C4] text-lg mt-[15px]'>به انتخاب یادش</p>
        <div className='flex items-center gap-4 mt-5'>
          <div className='flex justify-center gap-4'>
            <PopCourseCard />
            <PopCourseCard />
            <PopCourseCard />
          </div>
          <div>
            <PopCourseCardLarge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCoursesComp;
