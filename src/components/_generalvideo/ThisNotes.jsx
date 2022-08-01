import React from 'react'

function ThisNotes() {
  return (
    <div className='text-white  flex flex-col items-center'>
      <div className='flex items-center  m-6 w-[23vw]'>
      <div className='w-[40px] h-[40px]  bg-[#000E14] ml-2 rounded-md flex justify-center items-center'>
          <img src={'/assets/images/Group (1).png'} />
        </div>
        <h1>یادداشت های من</h1>
      </div>
      <div className='w-[23vw] h-[15vw] bg-white rounded-md text-black'>
        <div className=' flex justify-between m-4 text-[12px]'>
          <p>مقاله تاثیر گزار</p>
          <p className='flex items-center'>
             در حال تماشا
            <div className='bg-[#00FF85] mr-2 w-[10px] h-[10px] rounded-full blur-[1px]'></div>
          </p>
        </div>
        <div className='m-4'>
          <p>ﻢﻨﮐ ﺖﯾﺎﻋر ﻢﺴﯾﻮﻧ ﯽﻣ ﻪﮐ یا ﻪﻟﺎﻘﻣ ﺮﻫ رد ﺎﺟ ﻪﻤﻫ و ﻪﺸﯿﻤﻫ ور تﺎﮑﻧ ﻦﯾا ﻢﻨﮐ ﯽﻌﺳ ﺪﯾﺎﺑ و ﻪﻤﻬﻣ ﯽﻠﯿﺧ ﯽﺴﯾﻮﻧ ﻪﻟﺎﻘﻣ رد ﯽﺷرﺎﮕﻧ لﻮﺻا ﺖﯾﺎﻋر</p>
        </div>
      </div>

    </div>
  )
}

export default ThisNotes