import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headImage: {
    height: "95vh",
    width: "100%",
    objectFit: "cover",
  },
  carousel: {
    position: "relative",
    padding: "0 5.5rem",
  },
});

const images = [
  {
    id: "1",
    name: "Image 1",
    url: "/images/head1.jpg",
  },
  {
    id: "2",
    name: "Image 2",
    url: "/images/head2.jpg",
  },
  {
    id: "3",
    name: "Image 3",
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
          padding: "0 7rem",
        },
      }}
      className={classes.carousel}
    >
      {images.map((image) => {
        return (
          <img
            key={image.id}
            src={image.url}
            className={classes.headImage}
            alt={image.name}
            ref={imageRef}
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
