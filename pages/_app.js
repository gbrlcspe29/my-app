import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import Navbar from "../components/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
