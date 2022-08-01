import {Link} from "react-router-dom";

const EnterpriseComp = () => {
  return (
    <div className='h-[320px] mx-auto w-full mt-40'>
      <div className='bg-[#000E14] h-[320px] py-10 pr-36 w-fit'>
        <div className='flex items-center gap-3'>
          <div className='bg-[#00CC6A] w-2 h-5 rounded-xl '></div>
          <p className='text-[#E6FFF3] text-2xl'> پلن سازمانی</p>
        </div>
        <p className='text-[#C4C4C4] text-lg mt-[35px] ml-[500px] leadin'>
          سازمانها و شرکت به جهت ارتقای سطح کیفی نیروی انسانی خود می توانند از
          پلن ویژه آموزش یادش برای آموزش مهارتها استفاده کنند.
        </p>
        <div className='flex gap-4 mt-[30px]'>
          <Link to={"/for-business"}>
            <button className='text-[#E6E9EB] w-[150px] h-[46px] rounded-md border-2 border-solid border-[#80FFC2]'>
              بیشتر بدانید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseComp;
