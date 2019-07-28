import React, { Fragment } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import SlideDiaglog from "./SlideDiaglog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, withRouter } from "react-router-dom";
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../actions/authActions";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "inline-block",
    fontSize: "16px",

    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  customButton: {
    "&:hover": {
      border: "1px solid white"
    }
  }
}));

const Header = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();
  const session = useSelector(state => state);
  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }
  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      className={classes.menu}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="pageMenu">
        <NavLink to="/" exact>
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        </NavLink>
        <NavLink to="/movies">
          <MenuItem onClick={handleMenuClose}> Movies</MenuItem>
        </NavLink>
        <NavLink to="/directors">
          <MenuItem onClick={handleMenuClose}>Directors</MenuItem>
        </NavLink>
        <NavLink to="/movie/add">
          <MenuItem onClick={handleMenuClose}>Add Movie</MenuItem>
        </NavLink>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {session.sessionReducer.session.error ? (
        <Fragment>
          <MenuItem
            onClick={() => {
              setOpen1(true);
              handleMobileMenuClose();
            }}
          >
            <IconButton color="inherit">
              <FontAwesomeIcon icon={faSignInAlt} />
            </IconButton>
            <p>SIGN IN</p>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpen(true);
              handleMobileMenuClose();
            }}
          >
            <IconButton color="inherit">
              <FontAwesomeIcon icon={faUserPlus} />
            </IconButton>
            <p>SIGN UP </p>
          </MenuItem>
        </Fragment>
      ) : (
        <MenuItem
          onClick={() => {
            localStorage.clear();
            dispatch(getSession());
            //   window.location.reload();
            props.history.push("/");
            handleMobileMenuClose();
          }}
        >
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </IconButton>
          <p>SIGN OUT </p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <SlideDiaglog
        open={open}
        setOpen={setOpen}
        open1={open1}
        setOpen1={setOpen1}
      />
      <AppBar className={"AppBar"} position="fixed">
        <Toolbar>
          <IconButton
            className={classes.button}
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            PAGES
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {session.sessionReducer.session.error ? (
              <Fragment>
                <IconButton
                  onClick={() => {
                    setOpen1(true);
                  }}
                  className={classes.customButton}
                  color="inherit"
                >
                  SIGN IN
                </IconButton>
                <IconButton
                  onClick={() => {
                    setOpen(true);
                  }}
                  className={classes.customButton}
                  color="inherit"
                >
                  SIGN UP
                </IconButton>
              </Fragment>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.clear();
                  dispatch(getSession());
                  //   window.location.reload();
                  props.history.push("/");
                }}
                className={classes.customButton}
                color="inherit"
              >
                SIGN OUT
              </IconButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              style={{ marginBottom: "3px" }}
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default withRouter(Header);
