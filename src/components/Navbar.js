import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    fontSize: 15,
    padding: "0 20px",
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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          August Decoration
        </Typography>
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
