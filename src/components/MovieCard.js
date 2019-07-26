import React from "react";
import { Grid } from "@material-ui/core";
import "../stylesheets/Card.css";

const MovieCard = ({ img, title, director }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="card">
        <div className="imgBx">
          <img src={img} alt="images" />
        </div>
        <div className="details">
          <h2>
            {title}
            <br />
            <span>{director ? director.name : ""}</span>
          </h2>
        </div>
      </div>
    </Grid>
  );
};

export default MovieCard;
