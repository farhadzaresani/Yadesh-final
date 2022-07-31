import React from "react";

const LoginFormComp = () => {
  return (
    <div className='relative flex flex-col w-[450px] h-[570px]'>
      <div className='flex flex-col'>
        <div>
          <p className='text-2xl font-bold text-[#E6FFF3] leading-10'>
            وارد حساب کاربری خود شوید
          </p>
          <p className='text-sm text-[#C4C4C4] leading-10'>
            با ورود به حساب کاربری خود از امکانات یادش بهره مند شوید.
          </p>
        </div>
        <form className='mt-8'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <img src={"/assets/images/user.png"} alt='user' />
              <label
                htmlFor='username'
                className='text-[#E6FFF3] text-base font-bold mr-3'>
                نام کاربری (ایمیل)
              </label>
            </div>
            <input
              id='username'
              type='text'
              className='border-2 border-solid focus:border-[#80FFC2] bg-[#1A3A47] px-3 rounded-md h-[56px] mt-3'
              placeholder='zahrasharifi72@gmail.com'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <div className='flex items-center'>
              <img src={"/assets/images/lock.png"} alt='user' />
              <label
                htmlFor='password'
                className='text-[#E6FFF3] text-base font-bold mr-3'>
                پسورد:
              </label>
            </div>
            <input
              id='password'
              type='password'
              className='relative border-2 border-solid focus:border-[#80FFC2] bg-[#1A3A47] px-3 rounded-md h-[56px] mt-3'
              placeholder='*********'
            />
            <img
              className='absolute left-2 top-[50%] w-4 h-3'
              src={"/assets/images/eye.png"}
              alt='eye'
            />
          </div>
          <div className='flex items-center justify-center gap-3 mt-8'>
            <input
              className='border-[#1A3A47] border-2 rounded-md bg-none '
              type='checkbox'
            />
            <p className='text-[#FFFFFF]'>مرا به خاطر بسپار</p>
            <img src={"/assets/images/vertical-sep.png"} alt='' />
            <p className='text-[#FFFFFF] cursor-pointer'>
              رمز عبور خود را فراموش کرده اید؟
            </p>
          </div>
          <button className='bg-[#00FF85] hover:bg-[#82c8a6] transition-all rounded-md w-full h-14 mt-12 font-bold '>
            ورود به یادش
          </button>
          <div className='flex items-center justify-center gap-3 mt-8'>
            <img src={"/assets/images/horiz-sep.png"} alt='horiz-sep' />
            <p className='text-[#FFFFFF] cursor-pointer'>یا</p>
            <img src={"/assets/images/horiz-sep.png"} alt='horiz-sep' />
          </div>
          <div className='flex items-center justify-center w-full h-14 rounded-md bg-[#1A3A47] mt-9 cursor-pointer'>
            <div className='flex items-center justify-center gap-4'>
              <p className='text-[#e6fff38e]'>ورود با حساب گوگل</p>
              <img src={"/assets/images/google.png"} alt='google' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFormComp;
