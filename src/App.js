import { useEffect, useState } from "react";
import "./App.css";
import { AudioPlayer } from "./components/audioPlayer/AudioPlayer";
import { NavMenu } from "./components/navMenu/NavMenu";
import { SideBar } from "./components/sideBar/SideBar";
import { TrackList } from "./components/trackList/TrackList";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList isLoading={isLoading} />
          <SideBar isLoading={isLoading} />
        </main>
        <AudioPlayer isLoading={isLoading} />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
