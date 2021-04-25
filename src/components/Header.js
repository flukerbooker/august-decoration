import React from "react";
import Typewriter from "typewriter-effect";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "calc(75rem)",
    color: "#CCA43B",
    backgroundColor: "#242F40",
  },
  centerWrapper: {
    position: "relative",
    top: "50%",
    left: "57.5%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    fontSize: "7.5rem",
    margin: "1rem 0",
  },
  description: {
    fontSize: "3rem",
  },
  button: {
    fontSize: "1.4rem",
    marginTop: "12rem",
    marginRight: "1.5rem",
    padding: "1rem 6rem",
  },
  buttonWrapper: {
    display: "flex",
  },
  buttonName: {
    margin: "0",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.centerWrapper}>
        <h1 className={classes.title}>AUGUST DECORATION</h1>
        <Box className={classes.description}>
          <Typewriter
            options={{ loop: true, autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(40)
                .typeString("We Always Focus on Every Detail.")
                .pauseFor(2000)
                .deleteAll()
                .changeDeleteSpeed(5)
                .pauseFor(2000)
                .start();
            }}
          />
        </Box>
        <div className={classes.buttonWrapper}>
          <Button className={classes.button} variant="outlined" color="primary">
            <h2 className={classes.buttonName}>About Us</h2>
          </Button>
          <Button className={classes.button} variant="outlined" color="primary">
            <h2 className={classes.buttonName}>Project</h2>
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Header;
