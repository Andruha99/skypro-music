import { GlobalStyle } from "./globalStyles";
import * as S from "./style";
import { AppRoutes } from "./routes";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isAllow, setIsAllow] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleEnter = () => {
    localStorage.setItem("user", "agsdga");
    setIsAllow(true);
  };

  return (
    <>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <AppRoutes
              handleEnter={handleEnter}
              isAllow={isAllow}
              setIsAllow={setIsAllow}
            />
          </S.Container>
        </S.Wrapper>
      </AuthContext.Provider>
    </>
  );
}

export default App;
