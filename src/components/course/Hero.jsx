import React from "react";

const CourseHeroComp = () => {
  return (
    <div className="text-white flex">

    <div className="flex flex-col w-[30vw] space-y-10 items-center mr-10 mt-20 ">

      <div className=''>
      <h1 className="flex text-white items-center text-[22px] font-bold z-10 mb-4"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2">
        </div>سرمایه گذاری</h1>
      <p className="text-[#C4C4C4] text-[12px]" >
        در این دوره ابتدا به مقدمات شناخت بازارها و بازارهای مالی و زمینه های سرمایه گذاری می پردازیم. سپس به بررسی نمودار تغییرات قیمت و نحوه تحلیل آن می پردازیم و در انتها نکاتی درباره مدیریت ریسک داریم
      </p>
      </div>
      <div> 
        <h1 className=" text-white text-[15px] font-bold z-10">آموزش سرمایه گذاری</h1>
        <p className="text-[#C4C4C4] text-[12px]" >سهراب دل انگیز</p>
      </div>
      <div className="flex">
        <button className="ml-4 w-[181px] h-[46px] text-black bg-[#00FF85] rounded-md">ادامه تماشای قسمت 3</button>
        <button className="w-[108px] h-[46px] bg-[#002433] rounded-md">ذخیره کن</button>
      </div>

    </div>
    <div className="w-[80%]">

    <img
          className=' h-[40vw] w-[80vw]'
          src={"/assets/images/Ellipse 79 (1).png"}
          alt=''
          />
    </div>
    </div>
  )
};

export default CourseHeroComp;
