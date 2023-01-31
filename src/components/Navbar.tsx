import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="page-width fixed flex w-screen items-center justify-between bg-white py-4 shadow">
      <section>
        <h3>NK</h3>
      </section>
      <section>
        <HiOutlineMenuAlt4 size={32} />
      </section>
    </nav>
  );
};

export default Navbar;
