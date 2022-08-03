import React from "react";

const AdvantagesComp = () => {
  return (
    <div className='flex flex-col  h-[500px] pr-[556px] mt-40'>
      <div className='flex items-center gap-3'>
        <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
        <p className='text-[#E6FFF3] text-2xl font-bold'>
          چرا ما از بقیه متفاوت هستیم؟{" "}
        </p>
      </div>
      <p className='text-[#C4C4C4] text-lg mt-[15px]'>
        دلیل تفاوت یادش با دیگران
      </p>
      <div className='flex items-center gap-3 mt-8'>
        <img
          className='w-5 h-5'
          src={"/assets/images/tools-white.png"}
          alt='tools'
        />
        <p className='text-[#E6FFF3] text-lg font-extrabold'>
          تنوع موضوع و مهارت در یادش
        </p>
      </div>
      <p className='text-[#C4C4C4] text-sm text-right font-bold leading-8 mt-2'>
        سازمانها در یادش جایگاه ویژه ای دارند.پس ما هم برای سازمانها برنامه ویژه
        ای داریم.
      </p>
      <div className='flex items-center gap-3 mt-8'>
        <img
          className='w-5 h-5'
          src={"/assets/images/person-white.png"}
          alt='tools'
        />
        <p className='text-[#E6FFF3] text-lg font-extrabold'>
          اساتید برتر و نمونه
        </p>
      </div>
      <p className='text-[#C4C4C4] text-sm text-right font-bold leading-8 mt-2'>
        سازمانها در یادش جایگاه ویژه ای دارند.پس ما هم برای سازمانها برنامه ویژه
        ای داریم.
      </p>
      <div className='flex items-center gap-3 mt-8'>
        <img
          className='w-5 h-5'
          src={"/assets/images/diamond-white.png"}
          alt='tools'
        />
        <p className='text-[#E6FFF3] text-lg font-extrabold'>
          ویدیو و محتوای با کیفیت
        </p>
      </div>
      <p className='text-[#C4C4C4] text-sm text-right font-bold leading-8 mt-2'>
        سازمانها در یادش جایگاه ویژه ای دارند.پس ما هم برای سازمانها برنامه ویژه
        ای داریم.
      </p>
    </div>
  );
};

export default AdvantagesComp;
