import React from "react";

const BannerComp = () => {
  return (
    <div className='bg-gradient-to-t from-[#00121A] to-[#000405] px-20 flex flex-col justify-center items-center text-white  w-full h-[250px] mt-32'>
      <p className='text-[#E6FFF3] text-2xl'>همین امروز یادش را انتخاب کنید</p>
      <p className='text-[#C4C4C4] text-center text-base mt-3'>
        با انتخاب یادش به جمع سازمانهای حرفه ای بپیوندید
      </p>
      <img
        className='w-5 h-2 mt-5'
        src={"/assets/images/green-sep-hor.png"}
        alt=''
      />
      <button className='bg-[#00FF85] rounded-md w-36 h-12 text-sm text-[#000B0F] font-semibold mt-5'>
        به یادش بپیوندید
      </button>
    </div>
  );
};

export default BannerComp;
 