import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-black">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
