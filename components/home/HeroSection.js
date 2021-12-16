import classes from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>Interior fit-out and refurbishment</h2>
        <h1>Always Focus on Every Single Detail</h1>
        <p>
          August Decoration are interior fit-out and refurbishment contractor
          specialized in Commercial offices, governor offices, Luxury
          Residences, Hotels and interior restaurant.
        </p>
      </div>
      <div className={classes.imgContainer}>
        <Image src="" alt="welcome-image" />
      </div>
    </div>
  );
};

export default HeroSection;
