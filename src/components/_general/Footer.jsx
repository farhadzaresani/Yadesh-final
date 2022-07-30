import React from "react";
import { Link } from "react-router-dom";


const FooterComp = () => {
  return(
<div  className="bg-black  flex flex-col justify-center pt-[4vw] items-center">
  <div className="w-[90vw] mb-5 ">
      <div className="h-[2px] w-[90vw] bg-gradient-to-r from-[#00FF85] opacity-30"></div>
      <div className=" mt-10 flex justify-between items-center " >
          <div className="text-white ">
            <h1 className="font-bold text-2xl " >یادش&</h1>
            <p className="text-[12px] opacity-60" >آموزش ویدویی آنلاین</p>
          </div>
          <div className=" flex ">
            <button className="ml-[1vw] text-white text-[14px] border-[2px]  border-[#00FF85] w-[80px] h-[35px] rounded-md">وارد شوید</button>
            <select className="w-[45px] h-[35px] rounded-md bg-[#001D29] text-white" name="languages" size={1}>
                <option value="ir"> IR </option>  
                <option value="ar"> AR </option>  
                <option value="en"> EN </option>
            </select>
          </div>
        </div>

        <div className=" flex mt-10 justify-between ">
          <div className="flex">

            <div className="flex space-x-10 ml-8 ">
              <div className="">
                <h1 className="border-b-[1px] h-[3vw] text-[12px] border-white border-opacity-30 text-white">گردش در یادش</h1>
                <div className="flex m-2">
                  <div className="flex flex-col text-[10px] text-opacity-70 items-start text-white space-y-3">
                    <Link className="  flex items-center justify-center h-[3vw] w-[8vw] rounded-md" to="/">صفحه ی اصلی</Link>
                    <Link className="bg-[#000E14] flex items-center justify-center h-[3vw] w-[7vw] rounded-md" to="/"> پنل کاربری</Link>
                    <Link className=" flex items-center justify-center  h-[3vw] w-[8vw] rounded-md" to="/">پروفایل کاربری</Link>
                    <Link className=" flex items-center justify-center h-[3vw] w-[6vw] rounded-md" to="/">کلاس ها</Link>
                    <Link className=" flex items-center justify-center h-[3vw] w-[10vw] rounded-md" to="/"> پلی لیست های من</Link>
         
                  </div>
                  <div className="flex flex-col text-white items-start text-opacity-70 text-[10px] space-y-3">
                    <Link className="flex items-center justify-center h-[3vw] w-[6vw] rounded-md" to="/">درباره ما</Link>
                    <Link className=" flex items-center justify-center h-[3vw] w-[6vw] rounded-md" to="/">پشتیبانی</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-10 ">
              <div className="">
                <h1 className="border-b-[1px] h-[3vw] text-[12px] border-white border-opacity-30 text-white ml-8">اپیزود های محبوب</h1>
                <div className="flex m-2">
                  <div className="flex flex-col items-start text-[10px] text-opacity-70 text-white space-y-3">
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">اقتصاد الکترونیک</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">  مبانی تجارت</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/"> حساب داری صنعتی</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/"> اصول سرمایه گذاری</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">اقتصاد کلان</Link>       
                  </div>      
                </div>
              </div>
            </div>

            <div className="flex space-x-10 ">
              <div className="">
                <h1 className="border-b-[1px] h-[3vw] text-[12px] border-white border-opacity-30 text-white">  دوره های برتر</h1>
                <div className="flex m-2">
                  <div className="flex flex-col items-start text-[10px]  text-opacity-70 text-white space-y-3">
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">سواد بصری</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">مبانی تجارت</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">اقتصاد الکترونیک</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">اصول سخنوری</Link>
                    <Link className=" flex items-center justify-center h-[3vw]  rounded-md" to="/">برنامه نویسی اندروید</Link>       
                  </div>      
                </div>
              </div>
            </div>
          </div>

    
        <div className=" w-[30vw] text-white flex flex-col justify-between mt-5">
          <div className="flex justify-between font-bold text-[15px]">
            <h1 className="flex"><div className="bg-[#00FF85] w-[6px] h-[15px] rounded-sm ml-2"></div>با ما در تماس باشید </h1>
            <p>77132376</p>
          </div>
          <div className="opacity-70 text-[10px]">
            <p>info@yadesh.com</p>
            <p className="w-[19vw]">تهران خیابان انقلاب اسلامی خیابان کارگر شمالی پلاک 42 واحد 2</p>
          </div>
          <div className="flex justify-between ">
              <div className="w-[100px] h-[100px] bg-[#000E14] rounded-lg"></div>
              <div className="w-[100px] h-[100px] bg-[#000E14] rounded-lg"></div>
              <div className="w-[100px] h-[100px] bg-[#000E14] rounded-lg"></div>
          </div>
        </div>
      </div>
  </div>
        <div className="bg-[#000E14]  flex items-center text-white  text-[12px] h-[65px] w-[98vw]">
          <div className="flex justify-between w-[40vw] mr-[8vw]">
            <Link className="" to='/'> حریم شخصی</Link>
            <Link className="opacity-50" to='/'> شرایط استفاده</Link>
            <Link className="opacity-50" to='/'>  نقشه سایت</Link>
            <Link className="opacity-50" to='/'>  پرسش های متداول</Link>

          </div>
        </div>

        <div className="text-[#E6E9EB] text-opacity-50 text-[12px] flex justify-between items-center w-[98vw] m-2 ">
          <div>
            <p>تمام حق و حقوق این سایت محفوظ است</p>
          </div>
          <div className="flex">
            <p className="ml-5">طراحی شده با</p>
            <p>توسط تیم خلاق</p>
          </div>


        </div>
  
</div>
    );
};

export default FooterComp;
