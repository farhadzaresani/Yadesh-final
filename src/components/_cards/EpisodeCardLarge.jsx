import React from "react";

const EpisodeCardLarge = () => {
  return (
    <div className='relative flex flex-col w-[460px] h-[460px]'>
      <div className=' flex justify-center items-center'>
        <img
          className=' w-full h-[275px]'
          src={"/assets/images/episodecard.png"}
          alt='vid-thumbnail'
        />
        <img
          className='absolute cursor-pointer'
          src={"/assets/images/play.png"}
          alt='play'
        />
      </div>
      <p className='text-lg leading-10 font-bold text-[#E6FFF3] mt-4'>
        مقدماتی حسابداری کلان - درآمد و هزینه
      </p>
      <p className='text-xs font-bold text-[#C4C4C4] leading-7'>
        در این درس به ساختار هزینه و جریان های درآمد می پردازیم و مباحث حسابداری
        کلان را مورد بررسی قرار می دهیم. در این دوره تمرینات...
      </p>
    </div>
  );
};

export default EpisodeCardLarge;
