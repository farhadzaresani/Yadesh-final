import React from "react";
import SignupFormComp from "../components/signup/Form";
import SignupSideComp from "../components/signup/Side";

const SignupPage = () => {
  return (
    <div className=' flex bg-white'>
      <SignupSideComp />
      <div className='flex items-center justify-center'>
        <SignupFormComp />
      </div>
    </div>
  );
};

export default SignupPage;
