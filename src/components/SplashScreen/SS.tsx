import React from "react";
import fbIcon from "../../assets/images/Facebook-logo.png";
import metaLogo from "../../assets/images/logo-Meta.png";
import { useTranslation } from "react-i18next";

const SS: React.FC = () => {
  const { t } = useTranslation();

  //return
  return (
    <>
      <div className="fixed inset-0 z-50 bg-white">
        <div className="flex items-start justify-center">
          <img src={fbIcon} alt="splash" className="w-[150px] pt-20" />
        </div>
        <div className="flex flex-col items-center pt-[500px] xmd:pt-64">
          <p className="text-gray-600 text-center">from</p>
          <div className="flex items-center justify-center">
            <img src={metaLogo} alt="" className="w-[50px]" />
            <p className="text-blue-600 text-center text-[16px] font-semibold">
              {t("metaSplash")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SS;
