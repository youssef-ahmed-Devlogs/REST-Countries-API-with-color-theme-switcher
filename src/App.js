import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Header from "./components/Header";
import SingleRegion from "./components/views/SingleRegion";
import {RegionsProvider} from "./context/RegionsContext";

function App() {

  return (
    <RegionsProvider>
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/region/:name" exact component={SingleRegion} />
        </BrowserRouter>
      </div>
    </RegionsProvider>
   
  );
}

export default App;
