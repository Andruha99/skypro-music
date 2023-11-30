import React from "react";
import AuthPage from "../../components/logIn/LogInForm";

export const LoginPage = (props) => {
  return <AuthPage handleEnter={props.handleEnter} />;
};
