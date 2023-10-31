import { useEffect, useState } from "react";
import "./App.css";
import { AudioPlayer } from "./components/audioPlayer/AudioPlayer";
import { NavMenu } from "./components/navMenu/NavMenu";
import { SideBar } from "./components/sideBar/SideBar";
import { TrackList } from "./components/trackList/TrackList";
import { GlobalStyle } from "./globalStyles";
import { StyledContainer, StyledMain, StyledWrapper } from "./style";

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
      <StyledWrapper>
        <StyledContainer>
          <StyledMain>
            <NavMenu />
            <TrackList isLoading={isLoading} />
            <SideBar isLoading={isLoading} />
          </StyledMain>
          <AudioPlayer isLoading={isLoading} />
          <footer></footer>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
}

export default App;
