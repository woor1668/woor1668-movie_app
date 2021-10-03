import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* exact: 패치 이름과 동일할 때만 나옴 */}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
export default App;