import React from "react";
import fbLogo from "../../assets/images/fbLogo.svg";
import LoginFormComp from "./LoginFormComp";
import LoginFooterComp from "./LoginFooterComp";

const LoginComp: React.FC = () => {
  return (
    <>
      <div className="bg-[#F0F2F5] h-full lg:h-[100vh] px-4 sm:px-32 xmd:px-4">
        <div className="sm:max-w-[400px] xmd:max-w-[100%] mx-auto">
          <div className="xmd:flex xmd:items-center xmd:justify-center lg:gap-16">
            <div className="content flex flex-col items-center justify-center py-2">
              <img
                src={fbLogo}
                alt=""
                className="h-[106px] w-[310px] xmd:ml-[-140px] lg:ml-[-230px]"
              />
              <h3 className="text-center text-[24px] py-3 sm:text-justify sm:text-[23px] sm:px-8 sm:py-1 leading-[28px]  xmd:px-4 xmd:w-[400px] lg:w-[500px]">
                Facebook helps you connect and share with the people in your
                life.
              </h3>
            </div>
            <div className="loginForm ">
              <div className="bg-white rounded-xl shadow-lg py-8 sm:my-4 px-4 xmd:w-[450px] lg:w-[420px] xmd:mt-[100px]">
                <div className="formContent">
                  <LoginFormComp />
                </div>
              </div>
              <div>
                <p className="py-4 text-center text-[20px] sm:text-[14px] lg:pb-10 lg:pt-2">
                  <span className="font-bold">Create a Page</span> for a
                  celebrity, brand or business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooterComp />
    </>
  );
};

export default LoginComp;
