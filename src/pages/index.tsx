import { type NextPage } from "next";
import Hero from "../components/Hero";
import Story from "../components/Story";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Story />
    </>
  );
};

export default Home;
