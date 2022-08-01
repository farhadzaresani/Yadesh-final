import React from "react";
import TeacherCard from "../_cards/TeacherCard";

const TeachersComp = () => {
  return (
    <div className='flex justify-center w-full h-[516px] mt-24'>
      <div className='flex flex-col items-center'>
        <p className='text-2xl text-[#E6FFF3] font-bold leading-10'>
          تجربه اساتید یادش را به کارمندان خود هدیه دهید
        </p>
        <p className='text-lg text-[#C4C4C4] text-center leading-10'>
          اساتید یادش در حرفه خود بهترینند
        </p>
        <img
          className='w-5 h-2 mt-5'
          src={"/assets/images/green-sep-hor.png"}
          alt=''
        />
        <div className='flex gap-6'>
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </div>
    </div>
  );
};

export default TeachersComp;
