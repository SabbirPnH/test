import Head from "next/head";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import { useEffect, useState } from "react";
import Image from "next/image";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonial from "@/components/Testimonial/Testimonial";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";
import Link from "next/link";
import axios from "axios";
import Faq from "@/components/Faq";
import SidebarIcons from "@/components/SidebarIcons";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { RiMapPinLine } from "react-icons/ri";

export default function Home() {
  const [aboutUsVideoOpen, setAboutUsVideoOpen] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [domLoaded, setDomLoaded] = useState(false);
  const [feature, setFeature] = useState([]);
  const [clients, setClients] = useState([]);
  const [slider, setSlider] = useState([]);
  const [about, setAbout] = useState([]);
  const [missionVision, setMissionVision] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [products, setProducts] = useState([]);
  const [activTab, setActivTab] = useState(0);
  const [servicesData, setServicesData] = useState([]);
  const [plans, setPlans] = useState([]);
  const [modal, setModal] = useState([]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const slide = {
    nextIcon: (
      <span
        className="carousel-control-prev-icon bi bi-chevron-right"
        aria-hidden="true"
      ></span>
    ),
    prevIcon: (
      <span
        className="carousel-control-next-icon bi bi-chevron-left"
        aria-hidden="true"
      ></span>
    ),
  };
  // Fetch features data
  useEffect(() => {
    const fetchFeatureData = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/our-features"
        );
        const data = await response.json();
        setFeature(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchFeatureData();
  }, []);

  // Fetch features data
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/about-us"
        );
        const data = await response.json();

        setAbout(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchAboutData();
  }, []);

  // Fetch mission and vision data
  useEffect(() => {
    const fetchMissionVision = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/about-us/sub/1"
        );
        const data = await response.json();
        setMissionVision(data);
      } catch (error) {
        console.error("Error fetching mission and vision data:", error);
      }
    };
    fetchMissionVision();
  }, []);

  // Fetch client logos from API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/client-logo"
        );
        const data = await response.json();
        setClients(data);

        const titleResponse = await fetch(
          "https://admin.pnhit.pnhbd.com/api/clients-title"
        );
        const titleData = await titleResponse.json();
        setTitle(titleData.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClients();
  }, []);

  //Video Modal
  useEffect(() => {
    const fetchModal = async () => {
      try {
        const response = await axios.get(
          "https://admin.pnhit.pnhbd.com/api/leading-company"
        );
        setModal(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchModal();
  }, []);

  // Fetch slider data
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/sliders"
        );
        const data = await response.json();
        setSlider(data);
      } catch (error) {
        console.error("Error fetching mission and vision data:", error);
      }
    };

    fetchSlider();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://admin.pnhit.pnhbd.com/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/services"
        );
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/hosting"
        );
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>PnH It Solution</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
      </Head>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="hero  carousel-fade">
        <Carousel
          className=""
          activeIndex={heroSlideIndex}
          onSelect={(index) => setHeroSlideIndex(index)}
          interval={3000}
          variant="dark"
          fade
          nextIcon={slide.nextIcon}
          prevIcon={slide.prevIcon}
        >
          {slider.map((img, id) => (
            <Carousel.Item
              key={id}
              className="slider-bg"
              style={{ backgroundImage: `url(${img.slider_image})` }}
            ></Carousel.Item>
          ))}
        </Carousel>
      </section>
      <main id="main">
        {/* <!-- ======= Featured Services Section ======= --> */}
        <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row gy-2">
              {feature.map((service, index) => (
                <div
                  key={service.id}
                  className={`col-xl-3 col-md-6 d-flex aos-init aos-animate`}
                  data-aos="zoom-out"
                  data-aos-delay={index * 200}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <Image
                      
                        src={service.image}
                        alt="icon-img"
                        width={40}
                        height={40}
                      />
                      {/* <i className={`bi ${service.icon} icon`}></i> */}
                    </div>
                    <h4>
                      <a href={service.link || "#"} className="stretched-link">
                        {service.title}
                      </a>
                    </h4>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- End Featured Services Section --> */}

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            {about.map((item) => (
              <div key={item.id} className="section-header">
                <h2>{item.title}</h2>
                <p>{item.title_two}</p>
              </div>
            ))}

            <div
              className="row g-4 g-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-5">
                <div className="about-img">
                  {about.map((img) => (
                    <img
                      key={img.id}
                      src={img.image}
                      className="img-fluid"
                      alt={img.title}
                    />
                  ))}
                </div>
              </div>

              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  We are a leading IT solution company.
                </h3>

                {/* Nav Pills for Tabs */}
                <ul className="nav nav-pills mb-3">
                  {missionVision.map((item) => (
                    <li key={item.id}>
                      <a
                        className={`nav-link ${
                          activeTab === item.id ? "active" : ""
                        }`}
                        data-bs-toggle="pill"
                        href={`#tab${item.id}`}
                        onClick={() => setActiveTab(item.id)}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Tab Content */}
                <div className="tab-content">
                  {missionVision.map((item) => (
                    <div
                      key={item.id}
                      className={`tab-pane fade ${
                        activeTab === item.id ? "show active" : ""
                      }`}
                      id={`tab${item.id}`}
                    >
                      <p className="fst-italic">{item.desp}</p>

                      <div className="d-flex align-items-center mt-4">
                        <i className="bi bi-check2"></i>
                        <h4>{item.title_two}</h4>
                      </div>
                      <p>{item.desp_two}</p>

                      <div className="d-flex align-items-center mt-4">
                        <i className="bi bi-check2"></i>
                        <h4>{item.title_three}</h4>
                      </div>
                      <p>{item.desp_three}</p>

                      <div className="d-flex align-items-center mt-4">
                        <i className="bi bi-check2"></i>
                        <h4>{item.title_four}</h4>
                      </div>
                      <p>{item.desp_four}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- End About Section --> */}

        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row gy-4 d-flex">
              {products.map((product, index) => (
                <li
                  key={product.id}
                  className="nav-item col-6 col-md-4 col-lg-2 d-flex align-items-stretch"
                  role="presentation"
                >
                  <button
                    className={`nav-link ${
                      activTab === index ? "active show" : ""
                    } d-flex flex-column align-items-center justify-content-center`}
                    onClick={() => setActivTab(index)}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <i
                      className={`${product.icon}`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h4 className="text-center mt-2">{product.title}</h4>
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`tab-pane ${
                    activTab === index ? "active show" : ""
                  }`}
                >
                  <div className="row gy-4">
                    <div
                      className="col-lg-8 order-2 order-lg-1"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {/* <h3>{product.title}</h3> */}
                      <p
                        style={{ textAlign: "justify" }}
                        dangerouslySetInnerHTML={{ __html: product.desp }}
                      ></p>
                    
                    </div>
                    <div
                      className="col-lg-4 order-1 order-lg-2 text-center"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <img
                        src={product.image || "https://via.placeholder.com/300"}
                        alt={product.name}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients">
  <div className="container">
    <div className="clients-header">
      <h2 className="text-center">Our Clients</h2>
      <p>
        These are just a few examples, and our client base extends across
        various other industries such as telecommunications, energy,
        transportation, and more.
      </p>
    </div>
  </div>
  <div className="container" data-aos="zoom-out">
    {domLoaded && (
      <Swiper
        modules={[Autoplay, Keyboard]}
        speed={400}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        }}
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <Image
              src={client.image}
              alt={`Logo of ${client.name}`}
              width={100}
              height={100}
              className="img-fluid cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )}
  </div>
</section>

        <section id="onfocus" className="onfocus">
          {modal.map((item) => (
            <div
              key={item.id}
              className="container-fluid p-0"
              data-aos="fade-up"
            >
              <div className="row g-0">
                <div className="col-lg-6 video-play position-relative">
                  <Lightbox
                    open={aboutUsVideoOpen}
                    close={() => setAboutUsVideoOpen(false)}
                    slides={[
                      {
                        type: "video",
                        width: 1280,
                        height: 720,
                        poster: item.image,
                        sources: [
                          {
                            src: "assets/video/about-us.mp4",
                            type: "video/mp4",
                          },
                        ],
                      },
                    ]}
                    plugins={[Video]}
                    video={{
                      controls: true,
                      playsInline: true,
                      autoPlay: true,
                      loop: true,
                    }}
                  />
                  <a
                    onClick={() => setAboutUsVideoOpen(true)}
                    className="glightbox play-btn"
                  ></a>
                </div>
                <div className="col-lg-6">
                  <div className="content d-flex flex-column justify-content-center h-100">
                    <h3>{item.title} </h3>

                    <p className="fst-italic">{item.desp}</p>

                    <ul>
                      <li>
                        <i className="bi bi-check-circle"></i> We play a crucial
                        role in the modern world, as technology has become an
                        integral part of virtually every aspect of business and
                        daily life.
                      </li>
                    </ul>
                    <a href="#" className="read-more align-self-start">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Services</h2>
              <p>
                We provide comprehensive technological solutions to businesses
                and organizations to address their specific IT challenges and
                needs.
              </p>
            </div>

            <div className="row gy-5">
              {servicesData.map((service, index) => (
                <div
                  className="col-xl-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                  key={service.id}
                >
                  <Link href={`/service/${service.id}`}>
                    <div className="service-item">
                      <div className="img">
                        <img
                          src={service.bg_image}
                          className="img-fluid"
                          alt={service.services_name}
                        />
                      </div>
                      <div className="details position-relative">
                        <div>
                          <div className="icon">
                            <i className={`${service.image}`}></i>
                          </div>
                        </div>
                        <a href="#" className="stretched-link">
                          <h3>{service.services_name}</h3>
                        </a>
                        <p style={{ textAlign: 'justify', color: 'black' }}>
                          {service.title}
                        </p>

                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonial />
        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Hosting Service</h2>
              <p>
                We also provide domain & hosting service as we are one-stop
                solution. So no need to worry. We will provide each and
                everything that you need.
              </p>
            </div>

            <div className="row gy-4">
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`col-lg-4 ${index === 1 ? "featured" : ""}`}
                   data-aos="zoom-in"
                  data-aos-delay={200 + index * 100}
                >
                  <div
                    className={`pricing-item ${
                      plan.title === "BDIX Web Hosting" ? "featured" : ""
                    }`}
                    style={
                      plan.title === "BDIX Web Hosting"
                        ? { border: "4px solid #fd7e14" }
                        : {}
                    }
                  >
                    <div className="pricing-header">
                      <h3>{plan.title}</h3>
                      <h4 >
                        <sup>৳</sup>
                        {plan.title_two}
                      </h4>
                    </div>

                    <ul>
                      {plan.title_three && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_three}</span>
                        </li>
                      )}
                      {plan.title_four && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_four}</span>
                        </li>
                      )}
                      {plan.title_five && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_five}</span>
                        </li>
                      )}
                      {plan.title_six && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_six}</span>
                        </li>
                      )}
                      {plan.title_seven && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_seven}</span>
                        </li>
                      )}
                      {plan.title_eight && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_eight}</span>
                        </li>
                      )}
                      {plan.title_nine && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_nine}</span>
                        </li>
                      )}
                      {plan.title_ten && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_ten}</span>
                        </li>
                      )}
                      {plan.title_eliven && (
                        <li>
                          <i className="bi bi-dot"></i>{" "}
                          <span>{plan.title_eliven}</span>
                        </li>
                      )}
                    </ul>

                    <div className="text-center mt-auto">
                      <Link href={plan.button_link}target="_blank">
                        <button className="buy-btn">{plan.button}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Faq />

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p>
                Here are some general steps to help you find the contact
                information you need.
              </p>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4018909009083!2d90.36839805452047!3d23.80430389250119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d154ff5095%3A0x914bd669ac3a2dab!2sPnH%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1674900107293!5m2!1sen!2sbd"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="container">
            <div className="row gy-5 gx-lg-5">
              <div className="col-lg-4">
                <div className="info">
                  <h3>Get in touch</h3>

                  <div className="info-item d-flex align-items-center">
  <a
    className="decoration-none cursor-pointer"
    href="https://goo.gl/maps/f5CZMwnqFg3qsXfL9"
    style={{ display: 'flex', alignItems: 'center' }} 
  >
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 232597 333333"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      style={{ width: '25px', height: '25px' }} 
    >
      <path d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z" fill="#1a73e8"/>
      <path d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z" fill="#ea4335"/>
      <path d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z" fill="#4285f4"/>
      <path d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z" fill="#fbbc04"/>
      <path d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z" fill="#34a853"/>
    </svg>
  </a>
  <div className="ms-3">
    <h4>Location:</h4>
    <p className="text-primary">
      184, Razia Plaza. Level-6, Mirpur-10, Dhaka-1216, Bangladesh
    </p>
  </div>
</div>


                  <div className="info-item d-flex align-items-center">
                    <a
                      className="decoration-none cursor-pointer"
                      href="mailto:info@it.pnhbd.com"
                    >
                       <IoMdMail style={{ color: '#EA4335', fontSize: '25px' }} />
                    </a>
                    <div className='ms-3'>
                      <h4>Email:</h4>
                      <p>
                        <a
                          className="decoration-none cursor-pointer"
                          href="mailto:info@it.pnhbd.com"
                        >
                          info@it.pnhbd.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item d-flex align-items-center">
                    <a
                      className="decoration-none cursor-pointer"
                      href="tel:+8801873003333"
                    >
                      <IoMdCall style={{ color: '#34b7f1', fontSize: '25px' }} />
                    </a>
                    <div className="ms-3">
                      <h4>Call:</h4>
                      <p>
                        <a
                          className="decoration-none cursor-pointer"
                          href="tel:+8801873003333"
                        >
                          +880 1873 003333
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item d-flex align-items-center">
                    <a
                      className="decoration-none cursor-pointer"
                      href="http://wa.me/8801873003333"
                    >
                     <FaWhatsapp style={{ color: '#25D366', fontSize: '25px' }} />
                    </a>
                    <div className="ms-3">
                      <h4>WhatsApp:</h4>
                      <p>
                        <a
                          className="decoration-none cursor-pointer"
                          href="http://wa.me/8801873003333"
                        >
                          +880 1873 003333
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SidebarIcons/>
      {/* <!-- End #main --> */}
    </>
  );
}
