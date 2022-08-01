import React from "react";

const TestimonialsComp = () => {
  return (
    <div className='bg-[#000E14] px-20 flex justify-center items-center text-white  w-full h-[400px] mt-32'>
      <div className='flex gap-12 w-full h-full'>
        <div className='flex flex-col w-[40%] py-16'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
            <p className='text-[#E6FFF3] text-2xl'>
              مشتریان درباره یادش چه می گویند؟
            </p>
          </div>
          <p className='text-[#C4C4C4] text-lg mt-[15px]'>
            نظر مشتریان در مورد یادش
          </p>
          <img
            className=' my-9'
            src={"/assets/images/sep-green.png"}
            alt='sep line'
          />
          <div className='flex items-center gap-3'>
            <img
              className='w-5 h-5'
              src={"/assets/images/mellat.png"}
              alt='mellat-logo'
            />
            <img
              className='w-24 h-5'
              src={"/assets/images/mellat-text.png"}
              alt='mellat-text'
            />
          </div>
          <p className='text-[#C4C4C4] text-sm mt-5 leading-8'>
            دغدغه اصلی مدیران منابع انسانی ما همیشه پیدا کردن منابع معتبر آموزشی
            برای کارکنانمان بوده است. با وجود یادش بخش بزرگی از این خلا آموزشی
            برای ما پر شد و خوشحالیم که یادش را پیدا کرده ایم.
          </p>
        </div>
        <div className='flex gap-7 flex-wrap w-[58%] py-16'>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[90px] h-[25px]'
              src={"/assets/images/snapp.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[50px] h-[53px]'
              src={"/assets/images/mellat.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'></div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[50px] h-[50px]'
              src={"/assets/images/bale.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[50px] h-[50px]'
              src={"/assets/images/saman.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[50px] h-[50px]'
              src={"/assets/images/bale.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[50px] h-[50px]'
              src={"/assets/images/saman.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'></div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[50px] h-[53px]'
              src={"/assets/images/mellat.png"}
              alt='snapp'
            />
          </div>
          <div className='flex justify-center items-center w-28 h-28 bg-[#011E29] rounded-lg'>
            <img
              className='w-[90px] h-[25px]'
              src={"/assets/images/snapp.png"}
              alt='snapp'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComp;
