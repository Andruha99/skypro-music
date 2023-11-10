import { GlobalStyle } from "./globalStyles";
import * as S from "./style";
import { AppRoutes } from "./routes";
import { useState } from "react";

function App() {
  const [isAllow, setIsAllow] = useState(false);

  const handleEnter = () => {
    localStorage.setItem("user", "agsdga");
    setIsAllow(!isAllow);
  };

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes handleEnter={handleEnter} isAllow={isAllow} />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
