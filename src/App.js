import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome.component";
import SearchPage from "./pages/search/search-page.component";
import DisplayPage from "./pages/display/display.component";
import PlaylistPage from "./pages/platlist/playlist.component";

import "./App.css";
import LyricsPage from "./pages/lyrics/lyrics.component";
import PlaySong from "./components/playsong/playsong.component";
import { PlayProvider } from "./context/songContext";

function App() {
  return (
    <div className="App">
      <Router>
        <PlayProvider>
          <Welcome />
          <SearchPage />
          <Switch>
            {/* <Route exact path="/" component={DisplayPage} /> */}
            <Route exact path="/:key/playlist" component={PlaylistPage} />
            <Route exact path="/:song/lyrics" component={LyricsPage} />
          </Switch>
          <PlaySong />
        </PlayProvider>
      </Router>
    </div>
  );
}

export default App;
