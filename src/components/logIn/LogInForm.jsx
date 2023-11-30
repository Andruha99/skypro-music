import { Link } from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";

export default function AuthPage({ handleEnter, isLoginMode = true }) {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleLogin = async ({ email, password }) => {
    alert(`Выполняется вход: ${email} ${password}`);
    setError("Неизвестная ошибка входа");
  };

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
    setError("Неизвестная ошибка регистрации");
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <Link to={"/"}>
                <S.PrimaryButton onClick={handleEnter}>Войти</S.PrimaryButton>
              </Link>

              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <Link to={"/"}>
                <S.PrimaryButton onClick={handleEnter}>
                  Зарегистрироваться
                </S.PrimaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}

// import React from "react";
// import * as S from "./styles";

// export const LogInForm = (props) => {
//   return (
//     <S.LogInWrap>
//       <S.LogInContainer>
//         <S.FormLogo src="img/logo_modal.png" />
//         <S.Form>
//           <S.FormInput type="email" placeholder="Почта" />
//           <S.FormInput type="password" placeholder="Пароль" />
//           <S.ButtonsContainer>
//             <S.EnterButton to={"/"} onClick={props.handleEnter} type="submit">
//               Войти
//             </S.EnterButton>

//             <S.RegisterButton to="/register" type="button">
//               Зарегистрироваться
//             </S.RegisterButton>
//           </S.ButtonsContainer>
//         </S.Form>
//       </S.LogInContainer>
//     </S.LogInWrap>
//   );
// };
