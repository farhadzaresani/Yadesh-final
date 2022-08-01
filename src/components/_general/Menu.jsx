import React from "react";
import { Link } from "react-router-dom";

const MenuModal = ({setShowSidebar,showSidebar}) => {
  return (
    <div className='flex flex-col items-start fixed top-0 text-white right-0 z-30 rounded-b-md bg-light-black h-[30vw]  w-full'>
      <div className=' w-[60vw] h-[60vw] justify-between flex flex-col   m-5'>
        <div className=' '>
          <h1 className='font-bold text-2xl '>
            {" "}
            <img
              className='w-20 h-6'
              src={"/assets/images/HorizentalLightLogo.png"}
              alt=''
            />
          </h1>
          <p className='text-[12px] opacity-60'>آموزش ویدویی آنلاین</p>
        </div>

        <div className='flex items-center'>
          <h1>منو سایت</h1>
          <div className='h-[2px] w-[30vw] bg-gradient-to-l from-[#00FF85] opacity-30 mr-5'></div>
        </div>
        <div className='grid grid-cols-3 gap-5 text-white text-opacity-70 w-[25vw] text-[12px]  '>
          <Link
            className=' flex items-center justify-center h-[3vw] w-[7vw] rounded-md'
            to='/'>
            {" "}
            پنل کاربری
          </Link>
          <Link
            className=' flex items-center justify-center h-[3vw] w-[7vw] rounded-md'
            to='/'>
            {" "}
            پروفایل کاربری
          </Link>
          <Link
            className='bg-[#000E14] flex items-center justify-center h-[3vw] w-[6vw] rounded-md'
            to='/'>
            {" "}
            پیشرفت من{" "}
          </Link>
          <Link
            className=' flex items-center justify-center h-[3vw] w-[7vw] rounded-md'
            to='/'>
            {" "}
            درباره ما
          </Link>
          <Link
            className=' flex items-center justify-center h-[3vw] w-[7vw] rounded-md'
            to='/'>
            {" "}
            پشتیبانی
          </Link>
        </div>
        <div className='flex justify-between w-[40vw] text-[10px]  my-10 '>
          <div className='flex justify-between w-[20vw]'>
            <p>تماس با ما</p>
            <p>77132376</p>
            <p>info@yadesh.com</p>
          </div>
          <div className=''>
            <p>شبکه های اجتماعی</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='fixed top-[29vw] right-[50vw] bg-black text-white w-[2vw] h-[2vw] z-10 rounded-lg'>
        X
      </button>
    </div>
  );
};

export default MenuModal;
