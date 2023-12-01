import React from "react";
import AuthPage from "../../components/logIn/LogInForm";

export const LoginPage = (props) => {
  return (
    <AuthPage
      isAllow={props.isAllow}
      setIsAllow={props.setIsAllow}
      handleEnter={props.handleEnter}
    />
  );
};
