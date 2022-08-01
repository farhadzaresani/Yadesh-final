import React from "react";

const TeacherCard = () => {
  return (
    <div className='relative w-44 h-[400px] bg-none rounded-lg cursor-pointer'>
      <div className='absolute flex flex-col items-center justify-center bottom-0 w-44 h-40 bg-gradient-to-t from-[#002433] rounded-r-lg rounded-l-lg'>
        <p className='text-[#E6FFF3] text-xl font-semibold leading-6'>
          لاله مددیان
        </p>
        <p className='text-[#C4C4C4] text-sm text-center mt-3'>
          عکاس و روزنامه نگار
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;
