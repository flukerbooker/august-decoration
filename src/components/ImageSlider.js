import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  headImage: {
    height: "80rem",
    width: "100%",
    objectFit: "cover",
  },
  carousel: {
    position: "relative",
  },
  imgWrapper: {
    position: "relative",
  },

  // imgName: {
  //   fontSize: "3rem",
  //   textAlign: "center",
  //   width: "100%",
  //   position: "absolute",
  //   left: "50%",
  //   bottom: "0",
  //   margin: "0",
  //   transform: "translateX(-50%)",
  //   backgroundColor: "rgba(0,0,0,0.5)",
  //   padding: "2.5rem 0",
  //   color: "white",
  //   zIndex: 1,
  // },
});

const images = [
  {
    id: "1",
    name: "Main Lobby - The Politan-Breeze, Nonthaburi",
    url: "/images/head1.jpg",
  },
  {
    id: "2",
    name: "Library Area - The Politan-Breeze, Nonthaburi",
    url: "/images/head2.jpg",
  },
  {
    id: "3",
    name: "Reception Area - Residence Metropole Thonglor",
    url: "/images/head3.jpg",
  },
];

const ImageSlider = () => {
  const imageRef = useRef();
  const classes = useStyles();
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      navButtonsWrapperProps={{
        style: {
          padding: "0 4rem",
        },
      }}
      className={classes.carousel}
    >
      {images.map((image) => {
        return (
          <Box className={classes.imgWrapper} key={image.id}>
            <img
              src={image.url}
              className={classes.headImage}
              alt={image.name}
              ref={imageRef}
            />
            {/* <h2 className={classes.imgName}>{image.name}</h2> */}
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
