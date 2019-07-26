import React, { useEffect, useState } from "react";
import "../stylesheets/Username.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SlideDiaglog from "../components/SlideDiaglog";
import { useSelector } from "react-redux";
const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: "#030303",
    padding: theme.spacing(22, 0, 6),
    color: "white"
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const session = useSelector(state => state.authReducer.tokenData.username);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  useEffect(() => {
    if (session !== null) {
      console.log(session);
      setUsername(session);
    }
  }, [session]);
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          className="h1Font"
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
        >
          Welcome to the movie app
        </Typography>
        {username ? (
          <div className="deconstructed">
            {username}
            <div> {username}</div>
            <div> {username}</div>
            <div> {username}</div>
            <div> {username}</div>
          </div>
        ) : (
          <div>
            <Typography
              className="h5Font"
              variant="h5"
              align="center"
              color="inherit"
              paragraph
            >
              You need to login a member to view content
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={() => setOpen1(true)}
                    variant="contained"
                    color="primary"
                  >
                    SIGN IN
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={"customBtn"}
                    onClick={() => setOpen(true)}
                    variant="outlined"
                    color="inherit"
                  >
                    SIGN UP
                  </Button>
                  <SlideDiaglog
                    open={open}
                    setOpen={setOpen}
                    open1={open1}
                    setOpen1={setOpen1}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
