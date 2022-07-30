import React from "react";
import { Link } from "react-router-dom";

const CallSupportComp = () => {
  return (
    <div className="bg-[#000E14] flex justify-center items-center text-white  w-full h-[15vw] mt-20">
   <div className="flex flex-col space-y-5 items-center">
     <h1  className="font-bold text-lg">سوال خاصی دارید؟</h1>
     <p className="text-[#C4C4C4]"> با تیم پشتیبانی تماس بگرید</p>
     <div className="bg-[#00FF85] w-[15px] h-[6px] rounded-sm ml-2"></div>
     <Link to="/" className="border-[1px] flex justify-center items-center border-[#00FF85] text-[10px] w-[140px] h-[40px] rounded-md" > تماس با پشتیبانی</Link>
   </div>
    </div>
  );
};

export default CallSupportComp;
