import classes from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.main}>
        <Navbar />
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
