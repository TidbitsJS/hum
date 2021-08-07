import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/welcome/welcome.component";
import SearchPage from "./pages/search/search-page.component";
import DisplayPage from "./pages/display/display.component";
import PlaylistPage from "./pages/platlist/playlist.component";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Welcome />
        <SearchPage />
        <Switch>
          <Route exact path="/" component={DisplayPage} />
          <Route exact path="/:key/playlist" component={PlaylistPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
