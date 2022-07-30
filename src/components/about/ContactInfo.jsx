import React from "react";

const ContactInfoComp = () => {
  return (
  <div className=" flex justify-between h-[25vw] w-[80vw] mr-[10vw] text-white pt-20 ">

    <div className="flex flex-col justify-between h-full">

    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2"></div>
        <h1>با یادش در تماس باشید</h1>
      </div>
      <p className="text-[12px] text-[#C4C4C4]">اطلاعات تماس و موقعییت ما بر روی نقشه</p>
    </div>
    <div className="flex ">
      <p className="text-[12px] text-[#C4C4C4] border-l-[1px] pl-4 border-[#c4c4c49c]"> 021-77132376 </p>
      <p className="text-[12px] text-[#C4C4C4] pr-4 "> info@yadesh.com </p>
    </div>
    <div className="text-[12px] text-[#C4C4C4] w-[20vw]" >،یلامش رگراک نابایخ ،یمالسا بالقنا نابایخ ،نارهت ۲ دحاو ۴۲، کالپ</div>
    <div className="text-[12px] text-[#C4C4C4] w-[20vw]" >مشاهده بر روی گوگل مپ</div>
    </div>
<div>
<img className="w-[30vw] blur-3xl" src={'/assets/images/Ellipse 79.png'} />
</div>



  </div>
  )
};

export default ContactInfoComp;
