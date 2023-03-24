import React, { useState } from "react";
import {
  showSignupModal,
  showSplashScreen,
  hideSplashScreen,
} from "../../redux/Actions/Action";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "../../redux/types";
import { useNavigate } from "react-router-dom";

//interface
interface loginUser {
  user: {
    email: string;
    password: string;
  };
}

interface BackdropProps {
  show: boolean;
}

//
const Backdrop: React.FC<BackdropProps> = ({ show }) => {
  return (
    <div
      className={`fixed z-50 inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
        show ? "pointer-events-auto" : "pointer-events-none opacity-0"
      }`}
    />
  );
};

const LoginFormComp: React.FC = () => {
  //
  const hasModalShow = useSelector(
    (state: RootState) => state.signupModalReducer
  );

  const hasSplashScreen = useSelector(
    (state: RootState) => state.splashScreenReducer
  );

  //
  const navigate = useNavigate();

  //
  const { t } = useTranslation();

  //
  const dispatch = useDispatch();
  //
  const [userData, setUserData] = useState<loginUser>({
    user: {
      email: "",
      password: "",
    },
  });

  //handle input change
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData({
      user: {
        ...userData.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(showSplashScreen());
    setTimeout(() => {
      // dispatch(hideSplashScreen());
      console.log(hasSplashScreen);
      navigate("/main");
      console.log("2sec done");
    }, 2000);
  };

  //
  const handleCreateAccount = () => {
    dispatch(showSignupModal());
    document.body.style.overflow = "hidden";
  };

  //return
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="email"
          value={userData.user.email}
          onChange={handleInput}
          placeholder="Email address or phone number"
          className="py-4 px-3 text-[20px] border border-gray-400 rounded-md sm:py-3 sm:text-[18px]"
        />
        <input
          type="text"
          name="password"
          value={userData.user.password}
          onChange={handleInput}
          placeholder="Password"
          className="py-4 px-3 text-[20px] border border-gray-400 rounded-md sm:py-3 sm:text-[18px]"
        />
        <button
          type="submit"
          className="bg-[#1877F2] text-white py-3 rounded-md text-[19px] sm:py-2 lg:py-[11px]"
        >
          {t("logIn")}
        </button>
        <p className="text-[#1877F2] text-center text-[18px] sm:text-[13px]">
          {t("forgottonPassword")}
        </p>
        <hr />
        <button
          type="button"
          onClick={handleCreateAccount}
          className="bg-[#43b72c] text-white py-3 mx-12 rounded-md text-[19px] sm:mx-[90px] sm:py-[10px] sm:text-[17px]"
        >
          {t("createNewAccount")}
        </button>
      </form>
      <Backdrop show={hasModalShow} />
    </>
  );
};

export default LoginFormComp;
