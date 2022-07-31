import React from "react";

const PopCourseCard = () => {
  return (
    <div className='relative flex flex-col w-[180px] h-[400px] cursor-pointer'>
      <img
        className=' overflow-hidden rounded-lg'
        src={"/assets/images/popcourseimg.png"}
        alt=''
      />
      <div className='absolute flex px-2 justify-center items-center w-[180px] h-[160px] bottom-0 overflow-hidden rounded-lg backdrop-blur-sm'>
        <div className='flex flex-col gap-2'>
          <p className='text-xl text-[#E6FFF3] text-center'>روانشناسی رنگ ها</p>
          <p className='text-sm text-[#C4C4C4] text-center'>27 اپیزود</p>
        </div>
      </div>
    </div>
  );
};

export default PopCourseCard;
