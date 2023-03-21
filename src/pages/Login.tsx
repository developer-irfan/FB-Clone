import React from "react";
import LoginComp from "../components/Login/LoginComp";
import CreateAccount from "./Signup/CreateAccount";

const Login: React.FC = () => {
  return (
    <div>
      <LoginComp />
      <CreateAccount />
    </div>
  );
};

export default Login;
