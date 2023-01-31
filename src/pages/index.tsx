import { type NextPage } from "next";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Story />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
