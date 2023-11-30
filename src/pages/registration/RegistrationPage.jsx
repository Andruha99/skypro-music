import React from "react";
import AuthPage from "../../components/logIn/LogInForm";

export const RegistrationPage = (props) => {
  return <AuthPage handleEnter={props.handleEnter} isLoginMode={false} />;
};
