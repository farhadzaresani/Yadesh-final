import React from "react";


const UserProgressComp = () => {
  return (
  <div className="bg-[#000E14] text-white h-[120px] items-center flex justify-between my-10 px-10">
    <div>
    <img className="top-[6vw] right-0 w-[100px] absolute blur-md" src={'/assets/images/Ellipse 118.png'} />
    <img className="top-[6vw] right-0 absolute " src={'/assets/images/Vector 240.png'} />
      <h1 className="flex items-center text-[22px] font-bold z-10 mb-4"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2"></div> پیشرفت شما در یادش </h1>
      <p className="text-[#C4C4C4]" >لیست ویدیو ها و دوره های شما</p>
    </div>

    <div className="flex">
      <div className="pl-5">
        <h1 className="text-[3vw]">28</h1>
        <p className="text-[#C4C4C4]" >تعداد دوره های تکمیل شده</p>
      </div>
      <div className="border-r-[2px] pr-5 border-white border-opacity-30">
        <h1 className="text-[3vw]">145</h1>
        <p className="text-[#C4C4C4]">تعداد ویدیو های دیده شده  </p>
      </div>
      <img className="top-[6vw] left-0 absolute " src={'/assets/images/Vector 241.png'} />
    </div>
    
  </div>
  )
};

export default UserProgressComp;
