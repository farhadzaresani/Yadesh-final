import React from "react";

const SignupSideComp = () => {
  return (
    <div className='flex w-[424px] h-[744px] bg-[#E6E9EB] mt-16 mr-8 rounded-xl'>
      <div className='flex flex-col mt-20 mx-12'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00FF85] w-2 h-5 rounded-xl '></div>
          <p className='text-[#002433] text-2xl font-bold'>ثبت نام شرکت شما</p>
        </div>
        <p className='text-[#002433] text-lg mt-4'>
          سازمان خود را در یادش ثبت نام کنید
        </p>
        <p className='text-[#002433] text-sm mt-14'>
          مزایای عضویت سازمانی در یادش
        </p>
        <div className='flex items-center gap-3 mt-8'>
          <img
            className='w-5 h-5'
            src={"/assets/images/tools.png"}
            alt='tools'
          />
          <p className='text-[#002433] text-lg font-extrabold'>
            تنوع موضوع و مهارت در یادش
          </p>
        </div>
        <p className='text-[#002433] text-sm text-right font-bold leading-8 mt-2'>
          سازمانها در یادش جایگاه ویژه ای دارند.پس ما هم برای سازمانها برنامه
          ویژه ای داریم.
        </p>
        <img
          className='mt-5'
          src={"/assets/images/seperatorline.png"}
          alt='seperator'
        />
        <div className='flex items-center gap-3 mt-8'>
          <img
            className='w-5 h-5'
            src={"/assets/images/person.png"}
            alt='person'
          />
          <p className='text-[#002433] text-lg font-extrabold'>
            اساتید برتر و نمونه
          </p>
        </div>
        <p className='text-[#002433] text-sm text-right font-bold leading-8 mt-2'>
          سازمانها در یادش جایگاه ویژه ای دارند.پس ما هم برای سازمانها برنامه
          ویژه ای داریم.
        </p>
        <img
          className='mt-5'
          src={"/assets/images/seperatorline.png"}
          alt='seperator'
        />
        <div className='flex items-center gap-3 mt-8'>
          <img
            className='w-5 h-5'
            src={"/assets/images/diamond.png"}
            alt='diamond'
          />
          <p className='text-[#002433] text-lg font-extrabold'>
            ویدیو و محتوای با کیفیت
          </p>
        </div>
        <p className='text-[#002433] text-sm text-right font-bold leading-8 mt-2'>
          سازمانها در یادش جایگاه ویژه ای دارند.پس ما هم برای سازمانها برنامه
          ویژه ای داریم.
        </p>
      </div>
    </div>
  );
};

export default SignupSideComp;
