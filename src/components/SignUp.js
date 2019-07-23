import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { signUpFunc } from "../actions/authActions";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#0E0D0A"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = ({ setOpen }) => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getPasswordC, setPasswordC] = useState("");
  const store = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  const isValid = () =>
    !getUsername ||
    !getPassword ||
    !getPasswordC ||
    getPassword !== getPasswordC;
  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid()) {
      dispatch(signUpFunc(getUsername, getPassword)).then(res => {
        if (res.value) {
          setOpen(false);
          setUsername("");
          setPassword("");
          setPasswordC("");
        }
      });
    }
  };
  return (
    <Container className={"container"} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {Object.keys(store.errors).length !== 0 ? (
          <Typography color="error" component="h1" variant="h6">
            Username already exists!
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
            onChange={e => setUsername(e.target.value.trim())}
            value={getUsername}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            onChange={e => setPasswordC(e.target.value.trim())}
            value={getPasswordC}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordC"
            label="Password"
            type="password"
            id="passwordC"
            autoComplete="current-password"
          />

          <button className="btn2 btnDeneme">
            <div className="left" />
            SIGN UP!
            <div className="right" />
          </button>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
