import React from "react";

const CallSupportFormComp = () => {
  return (
    <div className='flex flex-col'>
      <div className=' my-10'>
        <div className='flex items-center gap-4'>
          <img className='w-5 h-7' src={"/assets/images/Group.png"} alt='' />
          <h1 className='text-[#E6FFF3]'>
            فرم زیر را پر کنید پشتیبانی در اسرع وقت پاسخگوی شما خواهد بود
          </h1>
        </div>
        <div className='bg-white text-black w-[650px] h-[60vw] rounded-md mt-4 ml-10 flex justify-center'>
          <div className='w-[80%] flex flex-col justify-between py-5'>
            <div className='flex flex-col space-y-3 '>
              <label>نام و نام خوانوادگی</label>
              <input
                type='text'
                placeholder='مانند فرهاد زارع'
                className='border-[2px] border-[#5a5a5aa2] h-[4vw] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-3 '>
              <label>ایمیل آدرس</label>
              <input
                type='email'
                placeholder='info@yadesh.com'
                className='border-[2px] border-[#5a5a5aa2] h-[4vw] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-3 '>
              <label>عنوان شما در سازمان</label>
              <input
                type='text'
                placeholder='مانند سرپرست برنامه ریزی و بودجه'
                className='border-[2px] border-[#5a5a5aa2] h-[4vw] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-3 '>
              <label>نام سازمان شما </label>
              <input
                type='text'
                placeholder='مانند شرکت اسنپ فود'
                className='border-[2px] border-[#5a5a5aa2] h-[4vw] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-3 '>
              <label>متن پیام</label>
              <textarea
                type='text'
                className='border-[2px] border-[#5a5a5aa2] h-[12vw] rounded-lg'
              />
            </div>
            <div>اطلاعات سازمانی و شخصی شما نزد یادش در امان است</div>
            <button className='bg-[#00FF85] h-[4vw] rounded-lg font-bold'>
              ارسال در خواست
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSupportFormComp;
 