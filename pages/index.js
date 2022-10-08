import Head from "next/head";
import HeroSection from "../components/home/HeroSection";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>August | Home</title>
        <meta
          name="description"
          content="August Decoration was established in 1990. August Decoration are interior fit-out and refurbishment contractor specialized in Commercial offices, governor offices, Luxury Residences, Hotels and interior restaurant. Over 25 years of experience in interior contractor industry, we have high skilled teams and technicians specialized in all aspect of the interior construction that can execute the project within the short period of time."
        />
      </Head>
      <HeroSection />
    </>
  );
};

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {},
  };
};

export default HomePage;
