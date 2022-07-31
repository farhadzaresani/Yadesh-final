import React,{useState} from "react";
import Menu from './Menu'
import MyNotesModal from "./MyNotes";

const NavbarComp = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openClose = () => {
    setShowSidebar((showSidebar = false));
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

        <div className='text-white'>یادش&</div>
        <div className='flex gap-2 mx-2'>
          <button className='text-white bg-[#002433] w-[118px] h-[35px] rounded-[4px] text-[12px]'>
            پیشرفت من
          </button>
          <MyNotesModal />
        </div>
      </div>

      <div className=''>
        <input
          className='ml-3 w-[120px] text-[12px] bg-[#001D29] h-[35px] rounded-[4px]'
          type='text'
          placeholder='؟جستوجو کنید'
        />

        <select
          className=' w-[45px] h-[35px] rounded-md bg-[#001D29] text-white'
          name='languages'
          size={1}>
          <option value='ir'> IR </option>
          <option value='ar'> AR </option>
          <option value='en'> EN </option>
        </select>
      </div>
    </div>
  );
};

export default NavbarComp;
