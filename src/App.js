import { GlobalStyle } from "./globalStyles";
import * as S from "./style";
import { AppRoutes } from "./routes";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isAllow, setIsAllow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <>
      <AuthContext.Provider
        value={{ currentUser, setCurrentUser, isAllow, setIsAllow }}
      >
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <AppRoutes isAllow={isAllow} setIsAllow={setIsAllow} />
          </S.Container>
        </S.Wrapper>
      </AuthContext.Provider>
    </>
  );
}

export default App;
