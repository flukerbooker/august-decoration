import Link from "next/link";
import React from "react";
import classes from "./MobileNavbar.module.css";

const MobileNavbar = (props) => {
  const { setToggle } = props;
  return (
    <nav className={classes.mobile_nav}>
      <ul>
        <li onClick={() => setToggle(false)}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => setToggle(false)}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={() => setToggle(false)}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li onClick={() => setToggle(false)}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
