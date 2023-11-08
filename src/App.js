import { GlobalStyle } from "./globalStyles";
import * as S from "./style";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
