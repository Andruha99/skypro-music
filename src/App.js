import "./App.css";
import { AudioPlayer } from "./components/audioPlayer/AudioPlayer";
import { NavMenu } from "./components/navMenu/NavMenu";
import { SideBar } from "./components/sideBar/SideBar";
import { TrackList } from "./components/trackList/TrackList";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />
          <SideBar />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
