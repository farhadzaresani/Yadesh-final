import React from "react";
import LoginFormComp from "../components/login/Form";
import LoginSideComp from "../components/login/Side";

const LoginPage = () => {
  return (
    <div className='flex gap-60 px-16'>
      <LoginSideComp />
      <LoginFormComp />
    </div>
  );
};

export default LoginPage;
