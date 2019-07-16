import React from "react";
import "../stylesheets/App.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../actions/movieActions";

function App() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(store);

  return (
    <div className="App">
      <button onClick={() => dispatch(getMovies())}>asddas</button>
    </div>
  );
}

export default App;
