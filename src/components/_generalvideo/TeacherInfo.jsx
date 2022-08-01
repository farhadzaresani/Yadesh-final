import React from 'react'

function TeacherInfo() {
  return (
    <div className='text-white w-[53vw] flex flex-col space-y-6'>
      <div className='flex flex-col space-y-5'>
        <h1 className='text-2xl'>رضا استوار</h1>
        <p className='text-[12px] opacity-60'> رضا استوار فارغ ااتحصیل و دانش آموخته دانشگاه تهران در رشته ی خبرنگاری است که گوشه ای از تجریبات خود را در یادش به اشتراک می گذارد. رضا استوار فارغ ااتحصیل و دانش آموخته دانشگاه تهران در رشته ی خبرنگاری است که گوشه ای از تجریبات خود را در یادش به اشتراک می گذارد</p>
      </div>
      <div className='flex  justify-end space-x-3'>
      <button className="bg-[#002433] w-[10vw] ml-3 h-[36px] my-4 rounded-md text-[12px] flex justify-center items-center space-x-3 ">
      <img src={'/assets/images/3bullet.png'} />
         افزودن به لیست 
      </button>
      
      <button className="bg-[#002433] w-[36px] h-[36px] my-4 rounded-md text-[12px] flex justify-center items-center ">
      <img src={'/assets/images/dislike.png'} />
      </button>
      
      <button className="bg-[#002433] w-[36px] h-[36px] my-4 rounded-md text-[12px] flex justify-center items-center ">
      <img src={'/assets/images/like.png'} />
      </button>
      
     
      </div>
    </div>
  )
}

export default TeacherInfo