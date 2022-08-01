import React from "react";

const CallSupportInfoComp = () => {
  return (
    <div className='text-white flex justify-between  '>
      <div className='  flex justify-center '>
        <img
          className='absolute blur-[30px]'
          src={"/assets/images/Ellipse 127.png"}
          alt=''
        />

        <div className='w-[80%] flex flex-col mt-[10vw]'>
          <div className='m'>
            <h1 className='flex'>
              <div className='bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2'></div>
              با یادش در تماس باشید
            </h1>
            <p className='text-[11px] opacity-50'>
              از طریق فرم رو برو با ما در تماس باشید
            </p>
          </div>
          <div className='h-[2px] w-[10vw] my-5 bg-gradient-to-l from-[#00FF85] opacity-30'></div>
          <div className='w-[400px] h-[404px] space-y-6'>
            <h1 className='text-2xl'>چرا یادش؟</h1>
            <div className=' flex flex-col justify-center items-center space-y-4'>
              <div>
                <h2>تنوع موضوع و مهارت در یادش</h2>
                <p className='text-[10px] opacity-50'>
                  سازمان ها در یادش جایگاه ویژه ای دارند. پس ما هم برای سازمان
                  ها برنامه ی ویژه ای داریم
                </p>
              </div>
              <div>
                <h2>اساتید برتر و نمونه</h2>
                <p className='text-[10px] opacity-50'>
                  سازمان ها در یادش جایگاه ویژه ای دارند. پس ما هم برای سازمان
                  ها برنامه ی ویژه ای داریم
                </p>
              </div>
              <div>
                <h2>ویدوی و محتوای با کیفیت</h2>
                <p className='text-[10px] opacity-50'>
                  سازمان ها در یادش جایگاه ویژه ای دارند. پس ما هم برای سازمان
                  ها برنامه ی ویژه ای داریم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSupportInfoComp;
