import React from 'react'

function WatchingCards() {
  return (
    <div className=" rounded-md flex flex-col w-[233px] ">
    <div className="h-[125px] rounded-t-md  w-[233px] flex ">
      <button className="bg-[#002433] w-[2vw] h-[2vw] rounded-lg text-white m-5" >.</button>
    </div> 
    <div className="w-[233px] h-[105px] rounded-b-md flex justify-center items-center bg-gradient-to-t from-[#002433]"><button className="w-[140px] h-[40px] rounded-md bg-[#80FFC2]">ادامه دهید</button> </div>
    <div className="bg-[#00FF85] h-[1px] w-[10vw] mr-2 "></div>
    <div className="text-white text-[10px] flex flex-col items-center">
      <h1>برند سازی شخصی - رفتار حرفه ای</h1>
      <p>کلاره عباسی کار آفرین </p>
      <p>2 ویدیو دیده شده از 48</p>
    </div>
  </div>
  )
}

export default WatchingCards