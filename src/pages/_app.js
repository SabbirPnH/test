import Layout from "@/components/Layout/Layout";
import Head from "next/head"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    // import("assets/js/main");
  }, []);

  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component { ...pageProps } />
      </Layout>

      {/* <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
      <Script src="assets/vendor/aos/aos.js" />
      <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
      <Script src="assets/vendor/swiper/swiper-bundle.min.js" /> */}
      {/* <Script src="assets/js/main.js" /> */}

    </>
  );
}
