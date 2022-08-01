import React from "react";
import AdvantagesComp from "../components/forbusiness/Advantages";
import BannerComp from "../components/forbusiness/Banner";
import FaqComp from "../components/forbusiness/Faq";
import ForBusinessHeroComp from "../components/forbusiness/Hero";
import TeachersComp from "../components/forbusiness/Teachers";
import TestimonialsComp from "../components/forbusiness/Testimonials";

const ForBusinessPage = () => {
  return (
    <>
      <div>
        <img
          className='absolute w-[456px] h-[456px] left-[848px] top-[1912px] blur-xl'
          src={"/assets/images/Ellipse79.png"}
          alt=''
        />
        <img
          className='absolute w-auto h-[343px] top-[1954px]'
          src={"/assets/images/vector252.png"}
          alt=''
        />
      </div>
      <div className='px-20'>
        <ForBusinessHeroComp />
        <TeachersComp />
      </div>
      <TestimonialsComp />
      <div className='px-20'>
        <AdvantagesComp />
        <FaqComp />
      </div>
      <BannerComp />
    </>
  );
};

export default ForBusinessPage;
