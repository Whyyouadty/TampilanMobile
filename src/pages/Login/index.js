import React from "react";
import {LoginContextProvider} from "../../stores/LoginContextState"
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <LoginContextProvider>
      <LoginForm />
    </LoginContextProvider>
  );
};

export default Login