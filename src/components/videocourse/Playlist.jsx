import React,{useRef} from "react";
import VideoCards from "../_cards/VideoCards";

const PlaylistComp = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollTop += scrollOffset;
  };
  return(
    <div className="text-white flex flex-col items-center">
      <div>
        <div className='flex items-center  m-6 w-[23vw]'>
          <div className='w-[40px] h-[40px]  bg-[#000E14] ml-2 rounded-md flex justify-center items-center'>
            <img src={'/assets/images/Group (1).png'} />
          </div>
          <h1>همه ی درس ها</h1>
        </div>
      </div>
      <div className="flex flex-col h-[60vw] justify-center items-center overflow-hidden" ref={ref}>

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
      <div className=" absolute top-[100vw] bg-gradient-to-t from-[#000000b6] w-[30vw] flex justify-center">

       <button onClick={() => scroll(+200)} className="bg-[#002433] w-[4vw] h-[2vw] my-4 rounded-md text-white">بیشتر</button>
       
      </div>

    </div>
  ) 
};

export default PlaylistComp;
