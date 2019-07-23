import React, { Fragment, useEffect } from "react";
import "../stylesheets/App.css";
import { useDispatch } from "react-redux";
import { getMovies } from "../actions/movieActions";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/movies" render={() => <Movies />} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [localStorage.getItem("token")]);

  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
