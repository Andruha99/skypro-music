import React from "react";
import { LogInForm } from "../../components/logIn/LogInForm";

export const LoginPage = (props) => {
  return <LogInForm handleEnter={props.handleEnter} />;
};
