import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { showSignupModal } from "../../redux/Actions/Action";

//interface
interface loginUser {
  user: {
    email: string;
    password: string;
  };
}

const LoginFormComp: React.FC = () => {
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
    console.log(userData.user.email);
  };

  //
  const handleCreateAccount = () => {
    dispatch(showSignupModal());
  };

  //return
  return (
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
        Log in
      </button>
      <p className="text-[#1877F2] text-center text-[18px] sm:text-[13px]">
        Forgotton Password?
      </p>
      <hr />
      <button
        onClick={handleCreateAccount}
        className="bg-[#43b72c] text-white py-3 mx-12 rounded-md text-[19px] sm:mx-[90px] sm:py-[10px] sm:text-[17px]"
      >
        Create new account
      </button>
    </form>
  );
};

export default LoginFormComp;
