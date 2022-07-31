import React from "react";
import * as BsIcons from "react-icons/bs";

const HomeHeroComp = () => {
  return (
    <div className='flex justify-center h-[562px] mx-auto mt-10'>
      <div className='flex gap-5'>
        <img
          className='w-[357px] h-[348px]'
          src={"/assets/images/HomeHero1.png"}
          alt='HomeHero1'
        />
        <img
          className='w-[348px] h-[175px]'
          src={"/assets/images/HomeHero2.png"}
          alt='HomeHero2'
        />
      </div>
      <div className='flex flex-col mr-16 '>
        <p className='text-[#E6FFF3] text-3xl font-bold w-[414px]'>
          یادگیری به فاصله چند کلیک
        </p>
        <p className='text-[#C4C4C4] text-lg mt-5 w-[390px] text-justify'>
          بیش از هزاران ویدیوی آموزشی برای شما از بروزترین منابع دنیا
        </p>
        <div className='flex gap-4 mt-[30px]'>
          <button className='text-[#E6E9EB] w-[150px] h-[46px] rounded-md border-2 border-solid border-[#80FFC2]'>
            بیشتر بدانید
          </button>
          <button className='bg-[#00FF85] w-[150px] h-[46px] rounded-md'>
            ثبت نام
          </button>
        </div>
        <div className='flex flex-col mt-10 gap-3'>
          <div className='flex items-center gap-4'>
            <div className='bg-[#00CC6A] w-2 h-5 rounded-xl mx-[15px]'></div>
            <p className='text-[#E6FFF3] text-base'>مزایای ثبت نام در یادش</p>
          </div>
          <div className='flex items-center gap-4'>
            <BsIcons.BsCheck className='text-[#00CC6A] text-4xl' />
            <p className='text-[#C4C4C4] text-sm'>
              دسترسی به بیش از هزاران ویدیو
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <BsIcons.BsCheck className='text-[#00CC6A] text-4xl' />
            <p className='text-[#C4C4C4] text-sm'>پنل کاربری کامل و کاربردی</p>
          </div>
          <div className='flex items-center gap-4'>
            <BsIcons.BsCheck className='text-[#00CC6A] text-4xl' />
            <p className='text-[#C4C4C4] text-sm'>
              امکان دانلود ویدیو بدون محدودیت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroComp;
