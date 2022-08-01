import {Link} from "react-router-dom";

const AboutComp = () => {
  return (
    <div className='flex h-[562px] justify-end'>
      <div className='flex flex-col w-[40vw]'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
          <p className='text-[#E6FFF3] text-2xl'>درباره یادش</p>
        </div>
        <p className='text-[#C4C4C4] text-lg mt-[15px]'>
          درباره ما بیشتر بدانید
        </p>
        <p className='text-[#C4C4C4] mt-8'>
          یادگیری دغدغه همیشگی افراد است اما بستر مناسبی برای آن وجود ندارد.
          یادش یک پلتفرم آموزشی برای شرکتها، اساتید، مدیران تولید محتوا و افراد
          است که دسترسی به ویدیوهای آموزشی را برای کاربران آسانتر کرده است.
        </p>
        <Link to={"/about"}>
          <button className='mt-8 text-[#E6FFF3] border-2 border-solid border-[#80FFC2] w-[160px] h-[46px] rounded-md'>
            بیشتر بدانید
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutComp;
