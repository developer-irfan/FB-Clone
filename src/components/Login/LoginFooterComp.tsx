import React from "react";

const LoginFooterComp: React.FC = () => {
  return (
    <div className="footer hidden xmd:block xmd:px-28 text-gray-600 text-[12px]">
      <div className="languagesFooter flex space-x-3 bg-white py-3 px-2">
        <p>English (UK)</p>
        <p>اردو</p>
        <p>پښتو</p>
        <p>العربية</p>
        <p>हिन्दी বাংলা ਪੰਜਾਬੀ</p>
        <p>فارسی</p>
        <p>Español</p>
        <p>Deutsch</p>
      </div>
      <hr />
      <div className="languagesFooter grid grid-cols-4  xmd:flex xmd:space-x-4 bg-white py-3 px-2">
        <p>Signup</p>
        <p>Login</p>
        <p>Massenger</p>
        <p>FB Lite</p>
        <p>Meta Play</p>
        <p>Istagram</p>
        <p>Services</p>
        <p>Groups</p>
        <p>Helps</p>
        <p>FB Lite</p>
        <p>Meta Play</p>
        <p>Istagram</p>
        <p>Services</p>
      </div>
      <footer>
        <p className="py-4 text-center text-[20px] xmd:text-left xmd:text-[14px] xmd:pl-2 text-gray-600">
          Meta © 2023
        </p>
      </footer>
    </div>
  );
};

export default LoginFooterComp;
