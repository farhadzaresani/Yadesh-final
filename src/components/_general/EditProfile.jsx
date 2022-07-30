import React, {useState} from "react";
import * as AiIcons from "react-icons/ai";

const EditProfileModal = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  return (
    <>
      <button
        className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowEditProfileModal(true)}>
        Open Edit Profile
      </button>

      {showEditProfileModal ? (
        <>
          <div className='flex justify-center items-center'>
            <div className='relative w-[650px] h-[748px] bg-[#f5f5f5] rounded-[10px]'>
              <div className='flex justify-between'>
                <div className='mt-[4%] mr-[4.6%] text-[#002433]'>
                  <p className='font-medium text-xl leading-10 '>
                    پروفایل خود را کامل کنید
                  </p>
                  <p className='font-normal text-base leading-6'>
                    خودتان را به همکلاسی هایتان معرفی کنید
                  </p>
                </div>
                <div className='absolute flex justify-center items-center w-10 h-10 left-7 top-7 bg-gray-300 rounded-[10px]'>
                  <AiIcons.AiOutlineClose
                    onClick={() => setShowEditProfileModal(false)}
                    className='text-black cursor-pointer text-xl hover:text-gray-700 transition-all'
                  />
                </div>
              </div>
              <div className='flex justify-around items-center mt-11'>
                <div className='bg-gray-300 w-36 h-36 rounded-full aspect-square object-cover mt-3 '></div>
                <div className='flex-col'>
                  <button className='flex justify-center items-center gap-2 bg-[#002433] hover:bg-[#002433d9] transition-all w-64 h-14 rounded-md text-white mb-3'>
                    <AiIcons.AiOutlineArrowUp /> آپلود عکس جدید
                  </button>
                  <button className='flex justify-center items-center gap-2 w-64 h-14 rounded-md border-solid border-2 border-[#000405] hover:bg-gray-300 transition-all'>
                    <AiIcons.AiOutlineClose className='text-black cursor-pointer text-xl' />
                    حذف عکس فعلی
                  </button>
                </div>
              </div>
              <div className='border-2 border-solid border-[#C4C4C4] opacity-40 w-[460px] h-0 mx-auto my-14 '></div>
              <form onSubmit={(e) => e.preventDefault()} className='mx-12'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='edit-name' className='font-bold'>
                      نام
                    </label>
                    <input
                      className='bg-[#E6E9EB] rounded-md w-56 h-14 focus:border-[#000405] border-2 border-solid p-4'
                      type='text'
                      id='edit-name'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='edit-lastname' className='font-bold'>
                      نام خانوادگی
                    </label>
                    <input
                      className='bg-[#E6E9EB] rounded-md w-56 h-14 focus:border-[#000405] border-2 border-solid p-4'
                      type='text'
                      id='edit-lastname'
                    />
                  </div>
                </div>
                <div className='flex justify-self-auto'>
                  <div className='flex flex-col gap-2 mt-10 w-full'>
                    <label htmlFor='edit-bio' className='font-bold'>
                      بیوگرافی شما
                    </label>
                    <input
                      className='bg-[#E6E9EB] rounded-md h-14 focus:border-[#000405] border-2 border-solid p-4'
                      type='text'
                      id='edit-bio'
                    />
                    <button className='bg-[#80FFC2] hover:bg-[#82c8a6] transition-all rounded-md h-14 mt-3 font-bold '>
                      ثبت اطلاعات
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditProfileModal;
