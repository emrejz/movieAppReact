import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MovieCard from "../components/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../actions/movieActions";
import LoadingSpinner from "../components/LoadingSpinner";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "black !important"
  },
  allPage: {
    backgroundColor: "#030303"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "black"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  signInError: {
    padding: theme.spacing(6, 0),
    textAlign: "-webkit-center"
  }
}));

const Movies = () => {
  const classes = useStyles();
  const store = useSelector(state => state.movieReducer);
  const session = useSelector(state => state.sessionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (store.fetching) {
    return (
      <Container
        className={classes.cardGrid}
        maxWidth="md"
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <LoadingSpinner loading={store.fetching} />
      </Container>
    );
  } else if (store.fetched) {
    return (
      <div className={classes.allPage}>
        <Container className={classes.cardGrid} maxWidth="md">
          {store.moviesData instanceof Array && (
            <div>
              <Typography
                className={"h1Font"}
                style={{ color: "white", margin: "20px 0px" }}
                variant="h2"
              >
                Movies
              </Typography>
              <Grid container spacing={10}>
                {store.fetched &&
                  store.moviesData.map(card => {
                    return (
                      <MovieCard
                        key={card._id}
                        img={card.cover}
                        title={card.title}
                        director={card.director}
                      />
                    );
                  })}
              </Grid>
            </div>
          )}
          {store.moviesData.error && (
            <Grid container component="main" className={classes.root}>
              <Container
                maxWidth="md"
                className={classes.cardGrid}
                style={{ display: "flex", height: "100vh" }}
              >
                <Typography
                  style={{ alignSelf: "center", margin: "auto" }}
                  className={"h1Font"}
                  variant="h2"
                >
                  SIGN IN/UP TO SEE MOVIES PAGE
                </Typography>
              </Container>
            </Grid>
          )}
        </Container>
      </div>
    );
  } else {
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography className={classes.signInError} variant="h2">
          ERROR...
        </Typography>
      </Container>
    );
  }
};

export default Movies;
