import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { signInFunc, getSession } from "../actions/authActions";
import { getMovies } from "../actions/movieActions";
import { getDirectors } from "../actions/directorActions";
import "../stylesheets/Sign.css";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "white !important"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",

    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "inherit"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = ({ setOpen, setOpen1 }) => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  const store = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  const isValid = () => !getUsername || !getPassword;

  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid())
      dispatch(signInFunc(getUsername, getPassword)).then(async res => {
        try {
          localStorage.clear();
          if (res.value.status) {
            await localStorage.setItem("token", res.value.token);
            setOpen1(false);
            setUsername("");
            setPassword("");
            dispatch(getMovies(res.value.token));
            dispatch(getDirectors());
            dispatch(getSession(res.value.token));
          }
        } catch (error) {
          throw new Error(error);
        }
      });
  };
  return (
    <Container className={"container1"} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {store.tokenData.error && (
          <div style={{ color: "red" }}>{store.tokenData.error.message}</div>
        )}
        {store.tokenData && !store.tokenData.status ? (
          <Typography color="error" component="h1" variant="h6">
            {store.tokenData.message}
          </Typography>
        ) : (
          ""
        )}
        <form
          onSubmit={e => handleSubmit(e)}
          className={classes.form}
          noValidate
        >
          <TextField
            style={{ color: "white !important" }}
            onChange={e => setUsername(e.target.value.trim())}
            value={getUsername}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username2"
            label="Username"
            name="username2"
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={e => setPassword(e.target.value.trim())}
            value={getPassword}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Password"
            type="password"
            id="password2"
            autoComplete="current-password"
          />

          <Grid container style={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <button className="asd btn btn--future">
                SIGN IN!
                <span />
              </button>
            </Grid>
            <Grid item xs={12}>
              <Link
                className={"signUpLink"}
                href="#"
                onClick={() => {
                  setOpen1(false);
                  setOpen(true);
                }}
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignIn;
