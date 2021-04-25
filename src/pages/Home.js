import React from "react";
// import Typography from "@material-ui/core/Typography";
import ImageSlider from "../components/ImageSlider";
import Header from "../components/Header";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ImageSlider />
      {/* <Typography variant="h2" align="center">
        Home
      </Typography> */}
    </React.Fragment>
  );
};

export default Home;
