import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const LogInForm = () => {
  return (
    <S.LogInWrap>
      <S.LogInContainer>
        <S.FormLogo src="img/logo_modal.png" />
        <S.Form>
          <S.FormInput type="email" placeholder="Почта" />
          <S.FormInput type="password" placeholder="Пароль" />
          <S.ButtonsContainer>
            <S.EnterButton type="submit">Войти</S.EnterButton>
            <Link to="/register">
              <S.RegisterButton type="button">
                Зарегистрироваться
              </S.RegisterButton>
            </Link>
          </S.ButtonsContainer>
        </S.Form>
      </S.LogInContainer>
    </S.LogInWrap>
  );
};
