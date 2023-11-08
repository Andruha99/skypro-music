import { useEffect, useState } from "react";
import { AudioPlayer } from "./components/audioPlayer/AudioPlayer";
import { NavMenu } from "./components/navMenu/NavMenu";
import { SideBar } from "./components/sideBar/SideBar";
import { TrackList } from "./components/trackList/TrackList";
import { GlobalStyle } from "./globalStyles";
import * as S from "./style";
import { AppRoutes } from "./routes";
import { CATEGORIES } from "./constants";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <TrackList isLoading={isLoading} />
            <SideBar isLoading={isLoading} categories={CATEGORIES} />
          </S.Main>
          <AudioPlayer isLoading={isLoading} />
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
