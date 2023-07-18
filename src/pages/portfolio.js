import Head from "next/head";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import { useEffect, useState } from "react";
import Image from "next/image";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonial from "@/components/Testimonial/Testimonial";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';

export default function Home() {
  const [aboutUsVideoOpen, setAboutUsVideoOpen] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const slide = {
    nextIcon: <span className="carousel-control-prev-icon bi bi-chevron-right" aria-hidden="true"></span>,
    prevIcon: <span className="carousel-control-next-icon bi bi-chevron-left" aria-hidden="true"></span>
  }

  return (
    <>
      <Head>
      <title>PnH It Solution - Portfolio</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      </Head>
      <main id="main" className="mt-5">
        <Portfolio />
      </main>
      {/* <!-- End #main --> */}
    </>
  )
}
