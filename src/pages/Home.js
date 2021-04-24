import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <React.Fragment>
      <ImageSlider />
      <Container>
        <Typography variant="h2" align="center">
          Home
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Home;
