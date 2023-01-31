import { type NextPage } from "next";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Story />
      <Services />
    </>
  );
};

export default Home;
