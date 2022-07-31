import React ,{useRef} from "react";
import WatchingCards from "../_cards/WatchingCards";

const ProfileCoursesComp = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="my-10">
    <div className="flex items-center justify-between px-10">
      <div className=''>
      <h1 className="flex text-white items-center text-[22px] font-bold z-10 mb-4"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2">
        </div>دوره های شما</h1>
      <p className="text-[#C4C4C4] text-[15px]" > لیست دوره های در خال تماشا </p>
      </div>
      <div className="flex gap-1">
        <button onClick={() => scroll(+200)} className="bg-[#002433] w-[2vw] rounded-lg text-white">{'<'} </button>
        <button onClick={() => scroll(-200)} className="bg-[#002433] w-[2vw] rounded-lg text-white"> {'>'} </button>
      </div>
    </div>
<div className="flex gap-4   overflow-hidden " ref={ref}>
  
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
  <WatchingCards/>
</div>




  </div>
  )
};

export default ProfileCoursesComp;
