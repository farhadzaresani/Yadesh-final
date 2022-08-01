import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {userSelect} from "../state/Slice";

import AboutComp from "../components/home/About";
import CustomersComp from "../components/home/Customers";
import EnterpriseComp from "../components/home/Enterprise";
import HomeHeroComp from "../components/home/Hero";
import HomeHeroLoggedComp from "../components/home/HeroLogged";
import KeepLearningComp from "../components/home/KeepLearning";
import MostViewedComp from "../components/home/MostViewed";
import MyPopularLessonsComp from "../components/home/MyPopularLessons";
import PopularCoursesComp from "../components/home/PopularCourses";
import PopularLessonsComp from "../components/home/PopularLessons";

const HomePage = () => {
  const currentUser = useSelector(userSelect);
  const dispatch = useDispatch();

  console.log(currentUser);

  return (
    <>
      {currentUser === null ? (
        <div className='flex flex-col px-20'>
          <div>
            <img
              className='absolute w-[562px] h-[562px] left-[686px] top-[121px] blur-[330px]'
              src={"/assets/images/Ellipse79.png"}
              alt=''
            />
            <img
              className='absolute w-[328px] h-[328px] left-[-4px] top-[880px] blur-[330px]'
              src={"/assets/images/Ellipse79.png"}
              alt=''
            />
            <img
              className='absolute w-[328px] h-[328px] left-[838px] top-[1383px] blur-[330px]'
              src={"/assets/images/Ellipse79.png"}
              alt=''
            />
            <img
              className='absolute w-[400px] h-[249px] left-[180px] top-[2996px] blur-[330px]'
              src={"/assets/images/Rectangle899.png"}
              alt=''
            />
          </div>

          <div className='flex flex-col gap-20'>
            <HomeHeroComp />
            <PopularCoursesComp />
            <AboutComp />
            <MostViewedComp />
            <CustomersComp />
            <EnterpriseComp />
          </div>
        </div>
      ) : (
        <>
          <div className='flex flex-col px-20'>
            <HomeHeroLoggedComp />
          </div>
          <KeepLearningComp />
          <div className='flex flex-col px-20'>
            <MostViewedComp />
            <PopularLessonsComp />
            <MyPopularLessonsComp />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
