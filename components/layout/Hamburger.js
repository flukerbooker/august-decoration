import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  const { toggle, setToggle } = props;
  return (
    <div
      className={`${classes.hamburger} ${toggle ? classes.toggled : ""}`}
      role="button"
      aria-expanded={toggle}
      onClick={() => setToggle(!toggle)}
    >
      <div className={`${classes.first} ${toggle ? classes.toggled : ""}`} />
      <div className={`${classes.second} ${toggle ? classes.toggled : ""}`} />
      <div className={`${classes.third} ${toggle ? classes.toggled : ""}`} />
    </div>
  );
};

export default Hamburger;
