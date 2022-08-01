import React from "react";

const PopularLessonCard = () => {
  return (
    <div className='relative flex flex-col w-56 h-56'>
      <div className=' flex justify-center items-center cursor-pointer'>
        <img className='h-[136px]' src={"/assets/images/Subtract.png"} alt='' />
        <img
          className='absolute'
          src={"/assets/images/play-circle.png"}
          alt=''
        />
        <img
          className='absolute'
          src={"/assets/images/play-black.png"}
          alt=''
        />
      </div>
      <p className='text-[#E6FFF3] text-base mt-5'>
        مقدمات حسابداری کلان - تورم
      </p>
      <p className='text-[#C4C4C4] text-sm mt-2'>
        سهراب دل انگیزان - اقتصاددان
      </p>
      <p className='text-[#C4C4C4] text-xs mt-2'>18 دقیقه</p>
    </div>
  );
};

export default PopularLessonCard;
