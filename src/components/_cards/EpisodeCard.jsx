import React from "react";
import ReactPlayer from 'react-player'

const EpisodeCard = () => {
 

  return (
    <div className='flex flex-col w-[200px] h-[216px] cursor-pointer'>
      <img src={"/assets/images/episodecard.png"} alt='' />
      <p className='text-sm leading-10 font-bold text-[#E6FFF3]'>
        روانشناسی رنگ ها - هارمونی
      </p>
      <div className='flex items-center gap-1'>
        <p className='text-sm text-[#C4C4C4]'>20 دقیقه و 12 ثانیه</p>
        <img className='w-1 h-1' src={"/assets/images/dot.png"} alt='dot' />
        <p className='text-xs text-[#C4C4C4]'>2578 بازدید </p>
      </div>
    </div>
  );

};

export default EpisodeCard;
 