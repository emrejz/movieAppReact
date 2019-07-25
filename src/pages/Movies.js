import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  allPage: {
    backgroundColor: "#030303"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
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
  console.log(store);
  return (
    <div className={classes.allPage}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography className={classes.signInError} variant="h2">
          Movies
        </Typography>

        {store.fetching && (
          <Typography className={classes.signInError} variant="h4">
            Loading...
          </Typography>
        )}
        {store.fetched && store.moviesData instanceof Object && (
          <Typography className={classes.signInError} variant="h4">
            If you want to see movies you must sign in!
          </Typography>
        )}
        {store.fetched && store.moviesData instanceof Array && (
          <Grid container spacing={10}>
            {store.fetched &&
              store.moviesData.map(card => {
                console.log(card);
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
        )}
      </Container>
    </div>
  );
};

export default Movies;
