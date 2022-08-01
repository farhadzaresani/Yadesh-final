import React from "react";
import WatchingCards from "../_cards/WatchingCards";

const KeepLearningComp = () => {
  return (
    <div className='bg-[#000E14] px-20 flex flex-col text-white  w-full h-[420px] my-32'>
      <div className='flex justify-between items-center mt-12'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-3 '>
            <div className='bg-[#00CC6A] w-2 h-5 rounded-xl'></div>
            <p className='text-[#E6FFF3] text-2xl'> به یادگیری ادامه دهید</p>
          </div>
          <p className='text-[#C4C4C4] text-lg mt-[15px]'>
            ویدیوهای در حال تماشای شما
          </p>
        </div>
        <img
          className='w-12 h-2'
          src={"/assets/images/Pagination.png"}
          alt=''
        />
      </div>
      <div className='flex items-center gap-48'>
        <div className='flex flex-col items-center gap-4 mt-28'>
          <button className='flex gap-2 items-center justify-center px-2 text-white border-2 border-[#80FFC2] w-[150px] h-[46px] rounded-[4px] text-[12px]'>
            <img src={"/assets/images/rocket.png"} alt='' />
            پیشرفت من
          </button>
          <p className='text-[#C4C4C4] text-sm text-center'>
            پیشرفت خود را از اینجا ببینید
          </p>
        </div>
        <div className='flex gap-4 overflow-hidden'>
          <WatchingCards />
          <WatchingCards />
          <WatchingCards />
          <WatchingCards />
        </div>
      </div>
    </div>
  );
};

export default KeepLearningComp;
