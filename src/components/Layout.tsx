interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <header>Header</header>
      <div>{children}</div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
