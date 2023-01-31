import Button from "./Button";

const Story = () => {
  return (
    <section className="page-width flex flex-col gap-8 py-16">
      <h2>My story</h2>
      <p>
        Hello, my name is Nout Koggel . I am a 17 year old UX/UI designer,
        photographer and 3D modeller based in Amsterdam. I am currently studying
        Crossmedia specialising in UX/UI design at Grafisch Lyceum Utrecht.
      </p>
      <Button variant="secondary">Read more</Button>
    </section>
  );
};

export default Story;
