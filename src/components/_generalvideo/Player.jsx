import React from "react";
import TagsComp from "./Tags";

const PlayerComp = () => {
  return(
    <div className="w-[750px] h-[450px] text-white  ">
      <div className=" h-[420px] m-4 flex flex-col justify-between border-b-[2px] border-opacity-50">
          <button className="bg-[#002433] w-[160px] h-[36px] my-4 rounded-md text-[12px] ">مقاله نویسی تاثیر گذار</button>
        <div>
          <div className=" flex justify-center  ">
            <p className=" w-[449px] text-center">ﺪﯿﺴﯾﻮﻨﺑ ور نﻮﺗدﻮﺧ یﺎﻫ ﻦﺘﻣ ﺎﻬﻧوا ﺪﯾد زا و ﺪﯾراﺬﺑ نﻮﺘﺒﻟﺎﻄﻣ ﺐﻃﺎﺨﻣ یﺎﺟ یور نﻮﺗدﻮﺧ ﺪﯾﺎﺑ ﻪﺸﯿﻤﻫ ﺪﯿﺷﺎﺑ بﻮﺧ ﺲﯾﻮﻧ ﻪﻟﺎﻘﻣ ﮏﯾ ﻪﮑﻨﯾا یاﺮﺑ</p>
          </div>
          <div className="flex my-2">
            <div className="h-[5px] w-[70vw] bg-[#002433] "></div>
            <div className="h-[5px] w-[30vw] bg-white rounded-lg"></div>
          </div>
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className='w-[40px] h-[40px] ml-4 bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/fullscreen.png'} />
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/setting.png'} />
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/hd.png'} />
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/cc.png'} />
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/1x.png'} />
              </div>
            </div>
            <div className="flex space-x-4">
            <div className='w-[128px] h-[40px] text-[12px] bg-[#000E14] ml-4 rounded-full flex justify-center items-center'>
            0:25 / 01:45.36
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/sound.png'} />
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full flex justify-center items-center'>
              <img src={'/assets/images/play2.png'} />
              </div>
              <div className='w-[40px] h-[40px]  bg-[#000E14] rounded-full  flex justify-center items-center'>
              <img src={'/assets/images/pause.png'} />
              </div>

            </div>
          </div>

        <TagsComp/>
        </div>
      </div>


    </div>
    ) 
    
};

export default PlayerComp;
