import Card from "./Card";
import placeholder from "../../public/img/hero-bg.jpg";

const Services = () => {
  return (
    <section className="page-width flex flex-col gap-8 py-16">
      <h2>Services</h2>
      <Card title="Photography" button="explore" href="/" img={placeholder} />
      <Card title="3D Design" button="explore" href="/" img={placeholder} />
      <Card title="UX/UI Design" button="explore" href="/" img={placeholder} />
    </section>
  );
};

export default Services;
