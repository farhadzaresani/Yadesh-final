import React from "react";

const HomeHeroLoggedComp = () => {
  return (
    <div className='flex gap-32 mt-12 h-[450px]'>
      <div className='flex flex-col w-[30%]'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00CC6A] w-2 h-5 rounded-xl'></div>
          <p className='text-[#E6FFF3] text-2xl'> دوره های ویژه امروز</p>
        </div>
        <p className='text-[#C4C4C4] text-lg mt-[15px]'>برای شما</p>
        <img className='my-7' src={"/assets/images/sep-green.png"} alt='' />
        <div className='flex flex-col'>
          <p className='text-[#E6FFF3] text-3xl'> دوره فرهنگ سازمانی</p>
          <p className='text-[#C4C4C4] text-sm mt-5 mr-16'>مدرس دوره</p>
          <p className='text-[#E6FFF3] text-base mt-2 mr-16'>محمد صادقی کیا</p>
          <div className='flex items-center gap-4 mt-10'>
            <div className='flex items-center gap-1'>
              <img src={"/assets/images/clock.png"} alt='eye' />
              <p className='text-sm text-[#E6FFF3]'>46 دقیقه و 26 ثانیه</p>
            </div>
            <img className='w-2 h-2' src={"/assets/images/dot.png"} alt='dot' />
            <div className='flex items-center gap-1'>
              <img src={"/assets/images/eye.png"} alt='eye' />
              <p className='text-sm text-[#E6FFF3]'>631 بازدید</p>
            </div>
          </div>
          <div className='flex gap-4 mt-10'>
            <button className='flex items-center justify-center gap-2 text-[#E6E9EB] w-[150px] h-[46px] rounded-md border-2 border-solid border-[#80FFC2]'>
              <img src={"/assets/images/graduate.png"} alt='' />
              برو به کلاس
            </button>
            <button className='flex items-center justify-center gap-2 bg-[#00FF85] w-[150px] h-[46px] rounded-md'>
              <img src={"/assets/images/play-black.png"} alt='' />
              شروع دوره
            </button>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col w-[60%]'>
        <div className='absolute top-2 right-2 flex items-center justify-center gap-1 w-[135px] h-[35px] bg-[#002433] rounded-md'>
          <p className='text-sm text-[#E6FFF3]'>فرهنگ سازمانی</p>
        </div>
        <div className='absolute top-2 left-2 flex items-center justify-center gap-1 w-[35px] h-[35px] bg-[#002433] rounded-md'>
          <img src={"/assets/images/fav.png"} alt='eye' />
        </div>
        <div className='absolute top-2 left-12 flex items-center justify-center gap-1 w-[35px] h-[35px] bg-[#002433] rounded-md'>
          <img src={"/assets/images/mute.png"} alt='eye' />
        </div>
        <img
          className='absolute left-0 bottom-0'
          src={"/assets/images/vector229.png"}
          alt=''
        />
        <div className='flex justify-between items-center w-full h-full'>
          <button className='bg-[#002433] w-[35px] h-[35px] rounded-lg text-white'>
            {"<"}
          </button>
          <img
            className=' w-[542px] h-[328px] blur-[30px]'
            src={"/assets/images/Ellipse79.png"}
            alt=''
          />
          <button className='bg-[#002433] w-[35px] h-[35px] rounded-lg text-white'>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroLoggedComp;
