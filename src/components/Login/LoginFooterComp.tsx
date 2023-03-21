import React from "react";
import { useTranslation } from "react-i18next";

const LoginFooterComp: React.FC = () => {
  //
  const { t, i18n } = useTranslation();

  //return
  return (
    <div className="footer hidden xmd:block xmd:px-28 text-gray-600 text-[12px]">
      <div className="languagesFooter flex space-x-3 bg-white py-3 px-2">
        <p>{t("englishUK")}</p>
        <p>{t("urdu")}</p>
        <p>{t("pashto")}</p>
        <p>{t("arabia")}</p>
        <p>{t("hindi")}</p>
        <p>{t("farsi")}</p>
        <p>{t("spanish")}</p>
        <p>{t("deutsch")}</p>
      </div>
      <hr />
      <div className="languagesFooter grid grid-cols-4  xmd:flex xmd:space-x-4 bg-white py-3 px-2">
        <p>{t("pashto")}</p>
        <p>{t("Arabia")}</p>
        <p>{t("hindi")}</p>
        <p>{t("farsi")}</p>
        <p>{t("spanish")}</p>
        <p>{t("deutsch")}</p>
        <p>{t("signup")}</p>
        <p>{t("login")}</p>
        <p>{t("massenger")}</p>
        <p>{t("fbLite")}</p>
        <p>{t("metaPlay")}</p>
        <p>{t("instagram")}</p>
        <p>{t("services")}</p>
      </div>
      <footer>
        <p className="py-4 text-center text-[20px] xmd:text-left xmd:text-[14px] xmd:pl-2 text-gray-600">
          {t("meta")}
        </p>
      </footer>
    </div>
  );
};

export default LoginFooterComp;
