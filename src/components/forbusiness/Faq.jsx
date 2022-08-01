import React from "react";

const FaqComp = () => {
  return (
    <div className='flex flex-col w-full h-[530px] '>
      <div className='flex items-center gap-3'>
        <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
        <p className='text-[#E6FFF3] text-2xl'>شما پرسیده اید</p>
      </div>
      <p className='text-[#C4C4C4] text-lg mt-[15px]'>
        سوالات متداول کاربران یادش
      </p>
      <div className='flex gap-8 w-full h-full mt-8'>
        <div className='flex flex-col gap-4 h-full w-[50%]'>
          <div className='flex px-5 items-center w-full h-24 bg-[#011E29] rounded-md '>
            <div className='flex justify-center items-center w-12 h-12 bg-[#000E14] rounded-md'>
              <span className='text-[#E6FFF3] text-xl'>?</span>
            </div>
            <p className='text-lg text-[#C4C4C4] mr-5'>
              چگونه می توانیم به محتوای یادش دسترسی داشته باشیم؟
            </p>
          </div>
          <div className='flex px-5 items-center w-full h-24 bg-[#011E29] rounded-md '>
            <div className='flex justify-center items-center w-12 h-12 bg-[#000E14] rounded-md'>
              <span className='text-[#E6FFF3] text-xl'>?</span>
            </div>
            <p className='text-lg text-[#C4C4C4] mr-5'>
              آیا می توانم از یادش تقاضای محتوای مورد نظر خودم را بکنم؟
            </p>
          </div>
          <div className='flex px-5 items-center w-full h-24 bg-[#011E29] rounded-md '>
            <div className='flex justify-center items-center w-12 h-12 bg-[#000E14] rounded-md'>
              <span className='text-[#E6FFF3] text-xl'>?</span>
            </div>
            <p className='text-lg text-[#C4C4C4] mr-5'>
              آیا به عنوان استاد می توانم محتوای خودم را آپلود کنم؟
            </p>
          </div>
          <div className='flex px-5 items-center w-full h-24 bg-[#011E29] rounded-md '>
            <div className='flex justify-center items-center w-12 h-12 bg-[#000E14] rounded-md'>
              <span className='text-[#E6FFF3] text-xl'>?</span>
            </div>
            <p className='text-lg text-[#C4C4C4] mr-5'>
              آیا یادش دوره های ویژه دانشجویان هم دارد؟
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 h-full w-[50%] bg-white rounded-md px-12 py-7'>
          <div className='flex items-center gap-3'>
            <img
              className='w-5 h-5'
              src={"/assets/images/light-bulb.png"}
              alt='tools'
            />
            <p className='text-black text-base font-bold'>پاسخ یادش</p>
          </div>
          <img src={"/assets/images/vector254.png"} alt='' />
          <p className='text-[#000405] text-sm font-bold mt-7 leading-9'>
            زا هدافتسا اب و ،پاچ تعنص زا موهفمان یگداس دیلوت اب یگتخاس نتم
            موسپیا مرولهک نانچنآرطس و نوتس رد هلجم و همانزور هکلب نوتم و اهرگپاچ
            ،تسا کیفارگ ناحارطدوبهب فده اب عونتم یاهدربراک و ،زاین دروم یژولونکت
            یلعف طیارش یارب و ،تسا مزال،هدنیآ و لاح هتشذگ دصرد هس و تصش رد یدایز
            یاهباتک ،دشاب یم یدربراک یاهرازبایارب ار یرتشیب تخانش اهرازفا مرن اب
            ات ،دبلط یم ار ناصصختم و هعماج ناوارف تخانشداجیا یسراف نابز رد ورشیپ
            گنهرف و ،یقالخ ناحارط صوصخلا یلع یا هنایار ناحارطدرک
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqComp;
