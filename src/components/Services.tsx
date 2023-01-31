import Card from "./Card";
import heroBg from "../../public/img/hero-bg.jpg";

const Services = () => {
  return (
    <section className="page-width flex flex-col gap-8 py-16">
      <h2>Services</h2>
      <Card title="3D Design" button="explore" href="/" img={heroBg} />
      <Card title="3D Design" button="explore" href="/" img={heroBg} />
      <Card title="3D Design" button="explore" href="/" img={heroBg} />
    </section>
  );
};

export default Services;
