import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
