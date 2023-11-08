import React from "react";
import {
  StyledLogInContainer,
  StyledLogInWrap,
  StyledFormLogo,
  StyledForm,
  StyledFormInput,
  StyledButtonsContainer,
  StyledEnterButton,
  StyledRegisterButton,
} from "./styles";
import { Link } from "react-router-dom";

export const LogInForm = () => {
  return (
    <StyledLogInWrap>
      <StyledLogInContainer>
        <StyledFormLogo src="img/logo_modal.png" />
        <StyledForm>
          <StyledFormInput type="email" placeholder="Почта" />
          <StyledFormInput type="password" placeholder="Пароль" />
          <StyledButtonsContainer>
            <StyledEnterButton type="submit">Войти</StyledEnterButton>
            <Link to="/register">
              <StyledRegisterButton type="button">
                Зарегистрироваться
              </StyledRegisterButton>
            </Link>
          </StyledButtonsContainer>
        </StyledForm>
      </StyledLogInContainer>
    </StyledLogInWrap>
  );
};
