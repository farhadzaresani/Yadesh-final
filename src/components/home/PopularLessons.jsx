import React from "react";
import PopularLessonCard from "../_cards/PopularLessonCard";

const PopularLessonsComp = () => {
  return (
    <div className='flex flex-col gap-9 mt-32'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-3 '>
            <div className='bg-[#00CC6A] w-2 h-5 rounded-xl'></div>
            <p className='text-[#E6FFF3] text-2xl'>درس های پر بازدید امروز</p>
          </div>
          <p className='text-[#C4C4C4] text-lg mt-[15px]'>
            یادشی ها این ویدیوها را بیشتر دیده اند
          </p>
        </div>
        <div className='flex gap-1'>
          <button className='bg-[#002433] w-[2vw] rounded-lg text-white'>
            {"<"}
          </button>
          <button className='bg-[#002433] w-[2vw] rounded-lg text-white'>
            {">"}
          </button>
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <PopularLessonCard />
      </div>
    </div>
  );
};

export default PopularLessonsComp;
