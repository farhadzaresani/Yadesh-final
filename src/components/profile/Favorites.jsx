import React from "react";
import VideoCards from "../_cards/VideoCards";

const FavoritesComp = () => {
  return (
  <div>
     <div className="mt-[10vw]">
    <div className="flex items-center justify-between px-10">
      <div className='mb-6'>
      <h1 className="flex text-white items-center text-[22px] font-bold z-10 mb-4">
        <div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2">
        </div> اپیزود های مورد علاقه</h1>
      <p className="text-[#C4C4C4] text-[15px]" >لیست اپیزود های مورد علاقه ی شما</p>
      </div>
      <div className="flex gap-1">
       </div>
    </div>
<div className="flex flex-wrap justify-center items-center gap-10  ">

    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
    <VideoCards/>
</div>
<div className=" flex justify-center mt-10">

 <button className="border-[1px] w-[200px] h-[46px] rounded-md  border-[#00FF85] text-white">بیشتر ببینید +</button>
</div>



  </div>
  </div>
  )
};

export default FavoritesComp;
