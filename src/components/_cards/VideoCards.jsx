import React from 'react'
import ReactPlayer from 'react-player'

function VideoCards() {
  return (
    <div>

    <div className=" w-[20vw] text-white flex flex-col rounded-lg">
        <ReactPlayer
            className='react-player '
            url=''
            width='100%'
            height='100%'
          />
          <div>
            افتصاد خرد
          </div>
          <p className="text-[10px] opacity-50">45 دقیقه و 26 ثانیه  11 اپیزود</p>
    </div>
            </div>
  )
}

export default VideoCards