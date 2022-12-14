import React, { useRef } from "react";
import VideoCards from "../_cards/VideoCards";

const WatchedComp = () => {
  const ref=useRef(null)

  
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


  return(
    <div className="mt-[10vw]">
    <div className="flex items-center justify-between px-10">
      <div className='mb-6'>
      <h1 className="flex text-white items-center text-[22px] font-bold z-10 mb-4"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2">
        </div>  قبلا دیده اید</h1>
      <p className="text-[#C4C4C4] text-[15px]" >    ویدیو هایی که قبلا تماشا کرده اید</p>
      </div>
      <div className="flex gap-1">
        <button onClick={() => scroll(+200)} className="bg-[#002433] w-[2vw] h-[2vw] rounded-md text-white">{'<'} </button>
        <button onClick={() => scroll(-200)} className="bg-[#002433] w-[2vw] h-[2vw] rounded-md text-white"> {'>'} </button>
      </div>
    </div>
<div className="flex gap-4   overflow-hidden " ref={ref}>

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




  </div>
  );
};

export default WatchedComp;
