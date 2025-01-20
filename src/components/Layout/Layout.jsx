import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Layout({ children }) {
  return (
    <>
      <Header>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Header>
      {children}
      <Footer />
    </>
  );
}
