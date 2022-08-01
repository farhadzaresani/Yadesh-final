import React from "react";

const ForBusinessHeroComp = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-24 z-30'>
        <p className='text-[#E6FFF3] text-4xl'>یادگیری در سطح جهانی</p>
        <p className='text-[#C4C4C4] text-xl text-center mt-3 w-[467px] leading-10'>
          سازمانها در یادش جایگاه ویژه ای دارند. پس ما هم برای سازمانها برنامه
          ویژه ای داریم.
        </p>
        <div className='flex gap-5 mt-12'>
          <button className='border-2 border-solid border-[#80FFC2] rounded-md w-36 h-12 text-sm text-[#E6E9EB]'>
            بیشتر بدانید
          </button>
          <button className='bg-[#00FF85] rounded-md w-36 h-12 text-sm text-[#000B0F] font-semibold'>
            به یادش بپیوندید
          </button>
        </div>
        <img className='mt-5' src={"/assets/images/star.png"} alt='star' />
        <p className='text-[#C4C4C4] text-xs text-center mt-3 w-[467px] leading-10'>
          اشتراک ویژه ماهیانه برای گروهها به همراه تخفیف 5 تا 35 درصدی
        </p>
        <img src={"/assets/images/ver-line.png"} alt='' />
        <img src={"/assets/images/ver-arrow.png"} alt='' />
      </div>
      {/* <div className='absolute top-0 right-0 w-full h-[600px] bg-gradient-to-t from-[#000405] to-[#00040500] z-20'></div> */}
      <img
        className='absolute left-[1059px] top-[102px]'
        src={"/assets/images/forbusinessHeroside.png"}
        alt='hero-right'
      />
      <img
        className='absolute left-[486px] top-[102px] w-[348px] h-[175px]'
        src={"/assets/images/forbusinessHero.png"}
        alt='hero-center'
      />
    </div>
  );
};

export default ForBusinessHeroComp;  
