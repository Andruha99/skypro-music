import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { logInUser, registerUser } from "../../api";
import { useAuthContext } from "../../context/AuthContext";

export default function AuthPage({ isAllow, setIsAllow, isLoginMode = true }) {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const { setCurrentUser } = useAuthContext();

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Заполните логин/пароль");
      return;
    }

    alert(`Выполняется вход: ${email} ${password}`);
    setDisabledButton(true);
    if (email && password) {
      logInUser({ setCurrentUser, navigate, setIsAllow, email, password });
    } else {
      setError("Неизвестная ошибка входа");
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Заполните логин/пароль");
      return;
    }

    if (password !== repeatPassword) {
      alert("Проверьте правильность введенного пароля");
      return;
    }

    if (email && password && repeatPassword) {
      alert(`Выполняется регистрация: ${email} ${password}`);
      setDisabledButton(true);
      registerUser({ navigate, setIsAllow, email, password }).then(() => {
        localStorage.setItem("user", email);
        setIsAllow(true);
      });
    } else {
      setError("Неизвестная ошибка регистрации");
    }
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
              {disabledButton ? (
                <Link to={"/"}>
                  <S.PrimaryButton disabled onClick={handleLogin}>
                    Войти
                  </S.PrimaryButton>
                </Link>
              ) : (
                <Link to={"/"}>
                  <S.PrimaryButton onClick={handleLogin}>Войти</S.PrimaryButton>
                </Link>
              )}

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
              {disabledButton ? (
                <Link to={"/"}>
                  <S.PrimaryButton disabled onClick={handleRegister}>
                    Зарегистрироваться
                  </S.PrimaryButton>
                </Link>
              ) : (
                <Link to={"/"}>
                  <S.PrimaryButton onClick={handleRegister}>
                    Зарегистрироваться
                  </S.PrimaryButton>
                </Link>
              )}
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
