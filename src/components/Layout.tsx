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
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
