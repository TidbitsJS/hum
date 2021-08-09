import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome.component";
import SearchPage from "./pages/search/search-page.component";
import DisplayPage from "./pages/display/display.component";
import PlaylistPage from "./pages/platlist/playlist.component";

import "./App.css";
import LyricsPage from "./pages/lyrics/lyrics.component";
import PlaySong from "./components/playsong/playsong.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome />
        <SearchPage />
        <Switch>
          {/* <Route exact path="/" component={DisplayPage} /> */}
          <Route exact path="/:key/playlist" component={PlaylistPage} />
          <Route exact path="/:song/lyrics" component={LyricsPage} />
        </Switch>
        <PlaySong
          title="Mere liye"
          subtitle="Akhil sachdeva"
          img={null}
          audio={null}
        />
      </Router>
    </div>
  );
}

export default App;
