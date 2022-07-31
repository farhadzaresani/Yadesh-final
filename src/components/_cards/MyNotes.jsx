import React from 'react'
import { Link } from 'react-router-dom'

function MyNotes() {
  return (
    <div>

    <div className='text-white rounded-lg bg-[#011E29] flex flex-col w-[306px] h-[137px] justify-center items-center '>
      <div className='flex justify-center items-center  border-b-[1px] border-[#c4c4c46e]'>
        <div className='w-[40px] h-[40px] ml-2 mb-7 bg-[#000E14] rounded-md flex justify-center items-center'>
          <img src={'/assets/images/Group (1).png'} />
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <h1>آموزش مدیریت مالی-رکود و تورم</h1>
          <p className='text-[12px] pb-4 text-[#C4C4C4]'>سهراب دل انگیزان افتصاددان ملی</p>
        </div>
        
      </div>
      <div className='pt-4'>
        <Link to='/'>  مشاهده یادداشت</Link>
      </div>
    </div>
    </div>
  )
}

export default MyNotes