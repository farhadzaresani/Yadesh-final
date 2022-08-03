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

      <div className='px-20 '>
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
