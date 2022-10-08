import classes from "./Layout.module.css";
import Navbar from "./Navbar";
import { useState } from "react";
import Hamburger from "./Hamburger";
import MobileNavbar from "./MobileNavbar";
const Layout = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className={classes.layout}>
        <Hamburger toggle={toggle} setToggle={setToggle} />
        {!toggle ? (
          <>
            <header>
              <h2>August Decoration</h2>
              <Navbar toggle={toggle} />
            </header>
            <main>{props.children}</main>
          </>
        ) : (
          <MobileNavbar setToggle={setToggle} />
        )}
      </div>
    </>
  );
};

export default Layout;
