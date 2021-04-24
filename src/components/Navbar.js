import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  leftWrapper: {
    display: "flex",
    paddingLeft: "4rem",
    flexGrow: 1,
  },
  rightWrapper: {
    paddingRight: "4rem",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0",
  },
  logo: {
    height: "5rem",
    width: "6rem",
  },
  button: {
    fontFamily: "inherit",
    fontSize: 19.5,
    padding: "0 2rem",
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
            <Typography variant="h6">August Decoration</Typography>
          </Box>
        </Box>
        <Box className={classes.rightWrapper}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
