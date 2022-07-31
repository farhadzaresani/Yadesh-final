import {useState} from "react";

const SignupFormComp = () => {
  const [currentCity, setCurrentCity] = useState("اصفهان");

  const changeCity = (newCity) => {
    setCurrentCity(newCity);
  };

  const [currentSub, setCurrentSub] = useState("اصفهان");

  const changeSub = (newSub) => {
    setCurrentSub(newSub);
  };

  return (
    <div className='flex w-[530px] h-[809px] bg-white mt-36 mr-8'>
      <div className='flex flex-col'>
        <div>
          <p className='text-2xl font-bold text-[#002433]'>سازمان شما</p>
          <p className='text-lg text-[#002433] leading-10'>
            برای شروع اطلاعات سازمان خود را در فرم زیر وارد کنید.
          </p>
        </div>
        <form className='mt-8'>
          <div className='flex flex-col'>
            <label className='font-bold' htmlFor='employees'>
              تعداد کارمندان
            </label>
            <input
              type='text'
              className='border-2 border-solid border-[#002433] border-opacity-6 px-3 rounded-md h-[56px] mt-3'
              placeholder='عددی بین 100 تا 1000 وارد کنید'
            />
          </div>
          <div className='flex flex-col mt-8'>
            <label className='font-bold' htmlFor='employees'>
              نام سازمان شما
            </label>
            <input
              type='text'
              className='border-2 border-solid border-[#002433] border-opacity-6 px-3 rounded-md h-[56px] mt-3'
              placeholder='مانند شرکت اسنپ فود'
            />
          </div>
          <div className='flex justify-between gap-3'>
            <div className='flex flex-col mt-8 w-[40%]'>
              <label className='font-bold' htmlFor='employees'>
                موقعیت سازمان شما
              </label>
              <select
                className='border-2 border-solid border-[#002433] border-opacity-6 px-3 rounded-md h-[56px] mt-3'
                onChange={(event) => changeCity(event.target.value)}
                value={currentCity}>
                <option value='تهران'>تهران</option>
                <option value='شیراز'>شیراز</option>
                <option value='مشهد'>مشهد</option>
                <option value='زنجان'>زنجان</option>
              </select>
            </div>
            <div className='flex flex-col mt-8 w-[55%]'>
              <label className='font-bold' htmlFor='employees'>
                مدت زمان اشتراک
              </label>
              <select
                className='border-2 border-solid border-[#002433] border-opacity-6 px-3 rounded-md h-[56px] mt-3'
                onChange={(event) => changeSub(event.target.value)}
                value={currentSub}>
                <option value='شش ماهه'>شش ماهه</option>
                <option value='سه ماهه'>سه ماهه</option>
                <option value='یک ماهه'>یک ماهه</option>
                <option value='زنجان'>زنجان</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col mt-8'>
            <label className='font-bold' htmlFor='employees'>
              ایمیل آدرس
            </label>
            <input
              type='email'
              className='border-2 border-solid border-[#002433] border-opacity-6 px-3 rounded-md h-[56px] mt-3'
              placeholder='info@yadesh.org'
            />
          </div>
          <div className='flex items-center gap-3 mt-2'>
            <img
              className='w-5 h-5'
              src={"/assets/images/info.png"}
              alt='info'
            />
            <p className='text-sm text-[#002433] leading-10'>
              اطلاعات شخصی و سازمانی شما نزد یادش در امان است.
            </p>
          </div>
          <button className='bg-[#00FF85] hover:bg-[#82c8a6] transition-all rounded-md w-full h-14 mt-12 font-bold '>
            ارسال درخواست
          </button>
          <div className='flex justify-center items-center'>
            <p className='text-sm text-[#002433] leading-10'>
              به کمک احتیاج دارید؟
            </p>
            <span className='text-sm text-[#00121A] leading-10 cursor-pointer'>
              تماس با پشتیبانی
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupFormComp;
