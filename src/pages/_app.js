import Layout from "@/components/Layout/Layout";
import Head from "next/head"
import { useEffect,useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "yet-another-react-lightbox/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from "next/router";
import Loading from "./loading"
import "../../public/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../public/assets/vendor/glightbox/css/glightbox.min.css"
import "../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../public/assets/css/main.css"
import "../../public/assets/css/variables-orange.css"
import "../../public/assets/vendor/swiper/swiper-bundle.min.css"
;







export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true); 
    const handleComplete = () => setLoading(false); 

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <Layout>
      {loading ? <Loading /> : <Component {...pageProps} />}
      </Layout>

    </>
  );
}
