import React from "react";

const PopCourseCardLarge = () => {
  return (
    <div className='relative flex flex-col w-[609px] h-[400px] cursor-pointer'>
      <img
        className=' overflow-hidden rounded-lg object-cover'
        src={"/assets/images/episodecard.png"}
        alt=''
      />
      <div className='absolute flex px-2 mt-2 w-full h-[160px] bottom-0 overflow-hidden rounded-lg backdrop-blur-lg'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
            <p className='text-xl text-[#E6FFF3] text-center'>
              مقدمات حسابداری کلان
            </p>
            <img className='w-2 h-2' src={"/assets/images/dot.png"} alt='dot' />
            <span className='text-sm text-[#E6FFF3]'>11 اپیزود</span>
          </div>
          <p className='text-base text-[#C4C4C4] w-[569px] leading-8'>
            در این کلاس در مورد اصول حسابداری در مقیاسهای صنعتی و اصول حسابداری
            یاد خواهید گرفت.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopCourseCardLarge;
