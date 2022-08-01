import React from "react";


const CourseCard = () => {


  
  return (
    <div
      className='w-[350px] h-[350px] rounded-lg text-white flex flex-col justify-between '
      style={{backgroundImage: `url("/assets/images/bg.png")`}}>
      <button className='flex justify-center items-center bg-[#002433] w-[2vw] h-[2vw] rounded-lg text-white m-5'>
        <img src={"/assets/images/three-dots.png"} alt='three-dots' />
      </button>
      <div className=' h-[105px] w-full rounded-b-md flex flex-col justify-center  bg-gradient-to-t from-[#002433]'>
        <div className='mr-6'>
          <h1> کلان داداه ها- شبکه عصبی</h1>
          <p className='text-[12px]'>سروش هاشمی متخصص داده</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
