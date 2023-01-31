import Button from "./Button";

const Hero = () => {
  return (
    <section className="page-width flex min-h-screen flex-col items-center justify-end gap-12 bg-[url('/img/hero-bg.jpg')] bg-cover pt-16 pb-48 text-center text-white">
      <section className="flex flex-col gap-6">
        <h1>Nout Koggel</h1>
        <h4>Photographer - 3D Artist - UI/UX Designer</h4>
      </section>
      <Button variant="primary" className="text-black">
        Contact me
      </Button>
    </section>
  );
};

export default Hero;
