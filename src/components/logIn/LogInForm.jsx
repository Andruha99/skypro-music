import React from "react";
import * as S from "./styles";

export const LogInForm = (props) => {
  return (
    <S.LogInWrap>
      <S.LogInContainer>
        <S.FormLogo src="img/logo_modal.png" />
        <S.Form>
          <S.FormInput type="email" placeholder="Почта" />
          <S.FormInput type="password" placeholder="Пароль" />
          <S.ButtonsContainer>
            <S.EnterButton to={"/"} onClick={props.handleEnter} type="submit">
              Войти
            </S.EnterButton>

            <S.RegisterButton to="/register" type="button">
              Зарегистрироваться
            </S.RegisterButton>
          </S.ButtonsContainer>
        </S.Form>
      </S.LogInContainer>
    </S.LogInWrap>
  );
};
