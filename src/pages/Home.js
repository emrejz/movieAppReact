import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SlideDiaglog from "../components/SlideDiaglog";
const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: "#F3F6F8",
    padding: theme.spacing(22, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to the movie app.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
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
                onClick={() => setOpen(true)}
                variant="outlined"
                color="primary"
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
      </Container>
    </div>
  );
};

export default Home;
