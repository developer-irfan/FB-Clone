import React from "react";

const LoginFormComp: React.FC = () => {
  return (
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Email address or phone number"
        className="py-4 px-3 text-[20px] border border-gray-400 rounded-md sm:py-3 sm:text-[18px]"
      />
      <input
        type="text"
        placeholder="Password"
        className="py-4 px-3 text-[20px] border border-gray-400 rounded-md sm:py-3 sm:text-[18px]"
      />
      <button className="bg-[#1877F2] text-white py-3 rounded-md text-[19px] sm:py-2 lg:py-[11px]">
        Log in
      </button>
      <p className="text-[#1877F2] text-center text-[18px] sm:text-[13px]">
        Forgotton Password?
      </p>
      <hr />
      <button className="bg-[#43b72c] text-white py-3 mx-12 rounded-md text-[19px] sm:mx-[90px] sm:py-[10px] sm:text-[17px]">
        Create new account
      </button>
    </form>
  );
};

export default LoginFormComp;
