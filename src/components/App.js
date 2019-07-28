import React, { Fragment } from "react";
import "../stylesheets/App.css";
import Header from "../components/Header";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import AddMovie from "../pages/AddMovie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/add" component={AddMovie} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
function App() {
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
