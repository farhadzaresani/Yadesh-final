import React from "react";
import EditProfileModal from "../_general/EditProfile";

const ProfileHeroComp = () => {
  return (
    <div>
      <div className=' flex justify-end mt-10 ml-10'>
        <EditProfileModal />
      </div>
      <div className='text-white flex flex-col justify-center items-center mt-10'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[2vw]'>فرهاد زارع</h1>
          <p className='opacity-50'>دنبال اهدافت برو</p>
        </div>
        <div className='flex h-[7vw] w-[30vw] justify-between items-center mt-10'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[2vw]'>28</h1>
            <p className='opacity-50'>دوره های شرکت شده</p>
          </div>
          <div className='w-[1px] h-[3vw] bg-white opacity-50'></div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[2vw]'>145</h1>
            <p className='opacity-50'>اپیزود های مورد علاقه</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroComp;
