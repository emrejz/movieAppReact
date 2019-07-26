import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { InputLabel, Select, FormControl, MenuItem } from "@material-ui/core/";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../stylesheets/MovieAdd.css";
import { useSelector, useDispatch } from "react-redux";
import { getDirectors } from "../actions/directorActions";
import { addMovie } from "../actions/movieActions";
import LoadingSpinner from "../components/LoadingSpinner";
const defaultImage = require("../img.png");
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "black !important"
  },

  paper: {
    backgroundColor: "black !important",

    color: "white",
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      color: "white"
    }
  },
  textField: {
    border: "2px solid white",
    color: "white !important"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "black"
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [titleC, setTitleC] = useState(true);
  const [year, setYear] = useState("");
  const [yearC, setYearC] = useState(true);
  const [imdb, setImdb] = useState("");
  const [imdbC, setImdbC] = useState(true);
  const [director, setDirector] = useState("5c30d4a30697d313e00b3417");
  const [picURL, setPicURL] = useState("");
  const [picURLC, setPicURLC] = useState(true);
  const store = useSelector(state => state.directorReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDirectors());
  }, []);
  const isValid = () => {
    picURL.length < 1 ? setPicURLC(false) : setPicURLC(true);
    title.length < 1 || title.length > 30 ? setTitleC(false) : setTitleC(true);

    year < 1800 || year > 2020 ? setYearC(false) : setYearC(true);
    imdb < 0 || imdb > 10 || imdb === "" ? setImdbC(false) : setImdbC(true);
    return (
      picURL.length < 1 ||
      title.length < 1 ||
      title.length > 30 ||
      year < 1800 ||
      year > 2020 ||
      imdb < 0 ||
      imdb > 10 ||
      imdb === ""
    );
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (isValid()) {
    } else {
      dispatch(
        addMovie({
          title,
          category: "asd",
          country: "asd",
          imdb_score: imdb,
          director_id: director,
          cover: picURL,
          year
        })
      );
    }
  };
  return store.fetching ? (
    <Container
      className={classes.cardGrid}
      maxWidth="md"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <LoadingSpinner loading={store.fetching} />
    </Container>
  ) : !store.directorData.message ? (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        className={"customGrid"}
        item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Movie
          </Typography>
          <form
            autocomplete="off"
            onSubmit={e => handleSubmit(e)}
            className={classes.form}
            noValidate
          >
            {!titleC ? (
              <div style={{ color: "red" }}>
                Title must be between 1 and 30 char!
              </div>
            ) : (
              ""
            )}
            <TextField
              className={classes.textField}
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            {!yearC ? (
              <div style={{ color: "red" }}>
                Year must be between 1800 and 2020!
              </div>
            ) : (
              ""
            )}
            <TextField
              className={classes.textField}
              margin="normal"
              required
              fullWidth
              id="year"
              label="Year"
              name="year"
              value={year}
              onChange={e => {
                setYear(e.target.value);
              }}
            />
            {!imdbC ? (
              <div style={{ color: "red" }}>
                Imdb score must be between 0 and 10!
              </div>
            ) : (
              ""
            )}
            <TextField
              className={classes.textField}
              margin="normal"
              required
              fullWidth
              type="number"
              id="imdb_score"
              label="IMDB Score"
              name="imdb_score"
              value={imdb}
              onChange={e => {
                setImdb(e.target.value);
              }}
            />
            {!picURLC ? (
              <div style={{ color: "red" }}>
                Picture URL field cannot be empty!
              </div>
            ) : (
              ""
            )}
            <TextField
              className={classes.textField}
              margin="normal"
              required
              fullWidth
              id="pictureURL"
              label="Pic. URL"
              name="pictureURL"
              value={picURL}
              onChange={e => {
                setPicURL(e.target.value.trim());
              }}
            />
            <FormControl
              style={{ color: "white !important" }}
              className={"customSelect"}
              required
            >
              <InputLabel htmlFor="outlined-age-simple">Director</InputLabel>

              <Select
                style={{ color: "white !important" }}
                value={director}
                onChange={e => setDirector(e.target.value)}
              >
                {store.directorData instanceof Array
                  ? store.directorData.map(item => (
                      <MenuItem value={item._id}>
                        {item.name} {item.surname}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              OK
            </Button>
          </form>
        </div>
      </Grid>
      <Grid className={"item"} item xs={12} sm={6} md={6}>
        <img
          alt="img"
          style={{
            backgroundImage:
              "url(" + (picURL !== "" ? picURL : defaultImage) + ")"
          }}
        />
      </Grid>
    </Grid>
  ) : (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container component="main" className={classes.root}>
        <Container
          maxWidth="md"
          className={classes.cardGrid}
          style={{ display: "flex" }}
        >
          <Typography
            style={{ alignSelf: "center", margin: "auto" }}
            className={"h1Font"}
            variant="h2"
          >
            SIGN IN/UP TO SEE THIS PAGE
          </Typography>
        </Container>
      </Grid>
    </Container>
  );
}
