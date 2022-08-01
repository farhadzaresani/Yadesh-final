import {useState} from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const MyNotesModal = () => {
  const [showMyNotesModal, setMyNotesModal] = useState(false);
  return (
    <div className='relative w-full h-full z-0'>
      <button
        className='text-white bg-[#002433] w-[118px] h-[35px] rounded-[4px] text-[12px]'
        type='button'
        onClick={() => setMyNotesModal(true)}>
        یادداشتهای من
      </button>

      {showMyNotesModal ? (
        <>
          <div className='absolute flex justify-center items-center z-10'>
            <div className='relative w-[888px] h-[468px] bg-[#f5f5f5] rounded-[10px]'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center mt-[4%] mr-[4.6%] text-[#002433]'>
                  <div className='bg-[#002433] w-2 h-5 rounded-xl'></div>
                  <p className='font-bold text-xl leading-10 mr-3 '>
                    یادداشت های من
                  </p>
                </div>
                <div className='absolute flex justify-center items-center w-10 h-10 left-7 top-7 bg-gray-300 rounded-[10px]'>
                  <AiIcons.AiOutlineClose
                    onClick={() => setMyNotesModal(false)}
                    className='text-black cursor-pointer text-xl hover:text-gray-700 transition-all'
                  />
                </div>
              </div>
              <div className='relative flex gap-3 mt-8 mr-7'>
                <div className='w-16 h-16 bg-[#C4C4C4] opacity-30 rounded-xl'></div>
                <div className='flex flex-col'>
                  <p className='font-bold text-base'>
                    آموزش مدیریت مالی-رکود و تورم
                  </p>
                  <p className='font-medium text-sm mt-3'>
                    سهراب دل انگیزان-اقتصاد ملی
                  </p>
                </div>
              </div>
              <div className='bg-[#c4c4c43f] mx-auto mt-6 px-5 w-[822px] h-[238px] rounded-md'>
                <div className='flex justify-between py-5'>
                  <div className='flex flex-col'>
                    <p className='font-bold text-sm text-[#002433]'>
                      درس شانزدهم - مقایسه بازارهای مالی
                    </p>
                    <div className='border-2 border-solid border-[#C4C4C4] opacity-40 w-[616px] h-0 mx-auto my-5 '></div>
                  </div>
                  <button className='flex justify-center items-center gap-2 h-12 w-36 bg-[#C4C4C4] hover:bg-gray-300 transition-all rounded-md font-bold text-sm text-[#002433]'>
                    <BsIcons.BsFillPlayFill className='text-xl' />
                    پخش درس
                  </button>
                </div>
                <div className='w-[782px] h-[64px] px-4 mt-3'>
                  <p className='font-medium text-sm leading-8 text-[#002433]'>
                    آموزشی را برای کاربران آسان تر کرده است. یادگیری دغدغه
                    همیشگی افراد است ولی بستر مناسبی برای آن وجود ندارد. یادش یک
                    پلتفرم آموزشی برای شرکت ها، اساتید، مدیران تولید محتوا و
                    افراد است که دسترسی به ویدیوهای
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MyNotesModal;
