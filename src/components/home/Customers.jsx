import React from "react";

const CustomersComp = () => {
  return (
    <div className='h-[175px] mx-auto w-full '>
      <div className='flex flex-col'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
          <p className='text-[#E6FFF3] text-2xl'>مشتریان یادش</p>
        </div>
        <p className='text-[#C4C4C4] text-lg mt-[15px]'>
          یادش از انتخاب شما تشکر می کند
        </p>
        <div className='flex justify-between mt-12 '>
          <img src={"/assets/images/snapp.png"} alt='snapp' />
          <img src={"/assets/images/saman.png"} alt='snapp' />
          <img src={"/assets/images/bale.png"} alt='snapp' />
          <img src={"/assets/images/mellat.png"} alt='snapp' />
        </div>
      </div>
    </div>
  );
};

export default CustomersComp;
