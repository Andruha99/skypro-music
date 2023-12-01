import React from "react";
import AuthPage from "../../components/logIn/LogInForm";

export const RegistrationPage = (props) => {
  return (
    <AuthPage
      setIsAllow={props.setIsAllow}
      handleEnter={props.handleEnter}
      isLoginMode={false}
    />
  );
};
