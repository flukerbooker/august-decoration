import React from "react";
import Carousel from "react-material-ui-carousel";
import Typography from "@material-ui/core/Typography";

const ImageSlider = () => {
  let images = [
    {
      name: "Image 1",
      description: "Image 1 description",
    },
    {
      name: "Image 2",
      description: "Image 2 description",
    },
    {
      name: "Image 3",
      description: "Image 3 description",
    },
  ];
  return (
    <Carousel navButtonsAlwaysVisible={true}>
      {images.map((image) => {
        return (
          <Typography variant="h5" align="center">
            {image.name}
          </Typography>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
