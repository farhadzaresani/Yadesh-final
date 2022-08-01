import React,{useState} from "react";
import LanguageDropDownComp from "./LanguageDropDown";
import Menu from "./Menu";
import MyNotesModal from "./MyNotes";

const NavbarComp = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openClose = () => {
    setShowSidebar((!showSidebar));
  };

  return (
    <div className='flex  h-[56px] sticky top-0 bg-black-rgba items-center justify-between px-10 z-20'>
      <div className='flex items-center justify-between w-[19vw]'>
        {showSidebar ? (
          <Menu
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            openClose={openClose}
          />
        ) : (
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className='space-y-1 cursor-pointer'>
            <div className='w-5 h-0.5 bg-[#E6FFF3] opacity-70'></div>
            <div className='w-5 h-0.5 bg-[#E6FFF3] opacity-50'></div>
            <div className='w-5 h-0.5 bg-[#E6FFF3] opacity-30'></div>
          </div>
        )}

        <div className='flex items-center gap-2 mx-2'>
          <img
            className='w-20 h-6'
            src={"/assets/images/HorizentalLightLogo.png"}
            alt=''
          />

          <button className='flex gap-2 items-center px-2 text-white bg-[#002433] w-[200px] h-[35px] rounded-[4px] text-[12px]'>
            <img src={"/assets/images/rocket.png"} alt='' />
            پیشرفت من
          </button>

          <div className='mr-3'>
            <MyNotesModal />
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='relative'>
          <input
            className='block ml-3 pr-10 w-[120px] text-[12px] bg-[#001D29] h-[35px] rounded-[4px]'
            type='text'
            placeholder='جستجو کنید'
          />
          <div className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none'>
            <img src={"/assets/images/search.png"} alt='' />
          </div>
        </div>

        <LanguageDropDownComp />
      </div>
    </div>
  );
};

export default NavbarComp;
