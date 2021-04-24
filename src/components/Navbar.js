import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: "2.4rem",
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  leftWrapper: {
    display: "flex",
    flexGrow: 1,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0",
  },
  logo: {
    height: "8rem",
    width: "9rem",
  },
  button: {
    fontFamily: "inherit",
    fontSize: "1.8rem",
    padding: "0 3.5rem",
  },
}));

const navItem = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/about" },
  { title: "Project", link: "/project" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Box className={classes.leftWrapper}>
          <Box className={classes.titleWrapper}>
            <img src="/images/logo.png" className={classes.logo} alt="logo" />
            <h2 className={classes.title}>August Decoration</h2>
          </Box>
        </Box>
        {navItem.map((item) => {
          return (
            <Button
              key={item.title}
              color="inherit"
              component={Link}
              to={item.link}
              className={classes.button}
            >
              {item.title}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
