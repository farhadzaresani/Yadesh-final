import React from "react";

const LessonCard = () => {
  return(

    <div className="w-[300px] h-[309] text-white flex flex-col justify-center items-center">
      <div className="w-[300px] h-[234px] border-b-[2px] border-[#00FF85]">
        <div className="bg-[#011E29] w-[5vw] h-[5vw] flex justify-center items-center rounded-full">
          <img src={'/assets/images/tik.png'} />
        </div>
      </div>
      <div>
      <h1>سرمایه گذازی بلند مدت طلا</h1>
      <p className="text-[12px]">هحمئ مهمان دوست اقتصاددان</p>
      </div>
  </div>
    ) 
};

export default LessonCard;
