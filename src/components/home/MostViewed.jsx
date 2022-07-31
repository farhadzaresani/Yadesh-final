import React from "react";
import EpisodeCard from "../_cards/EpisodeCard";
import EpisodeCardLarge from "../_cards/EpisodeCardLarge";

const MostViewedComp = () => {
  return (
    <div className='h-[557px] mx-auto w-full'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
          <p className='text-[#E6FFF3] text-2xl'>پربازدیدترین اپیزودها </p>
        </div>
        <p className='text-[#C4C4C4] text-lg mt-[15px]'>
          اپیزودهای پر بازدید هفته
        </p>
        <div className='flex gap-3 mt-5'>
          <div className='flex w-[35vw] '>
            <EpisodeCardLarge />
          </div>
          <div className='flex flex-wrap gap-2 w-[65vw]'>
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostViewedComp;
