import Welcome from "./components/welcome/welcome.component";
import SearchPage from "./pages/search/search-page.component";
// import DisplayPage from "./pages/display/display.component";

import "./App.css";

function App() {
  return (
    <div>
      <Welcome />
      <SearchPage />
      {/* <DisplayPage /> */}
    </div>
  );
}

export default App;
