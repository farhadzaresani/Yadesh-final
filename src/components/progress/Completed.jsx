import React,{useRef} from "react";
import LessonCard from "../_cards/LessonCard";

const CompletedComp = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return(

    <div className="my-10">
         <div>
      <div className="flex items-center justify-between px-10">
        <div className=''>
        <h1 className="flex text-white items-center text-[22px] font-bold z-10 mb-4"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2">
          </div> دوره های تکمیل شده</h1>
        <p className="text-[#C4C4C4] text-[15px]" > دوره هایی که شما تکمیل کردید </p>
        </div>
        <div className="flex gap-1">
          <button onClick={() => scroll(+200)} className="bg-[#002433] w-[2vw] rounded-lg text-white">{'<'} </button>
          <button onClick={() => scroll(-200)} className="bg-[#002433] w-[2vw] rounded-lg text-white"> {'>'} </button>
        </div>
      </div>
<div className="flex gap-4   overflow-hidden mt-10 " ref={ref}>
    <LessonCard/>
    <LessonCard/>
    <LessonCard/>
    <LessonCard/>
    <LessonCard/>
    <LessonCard/>
    <LessonCard/>
    <LessonCard/>
</div>




    </div>
    </div>
    )
};

export default CompletedComp;
