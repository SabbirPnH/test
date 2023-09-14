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

import Slider_bg_1 from "../../public/assets/img/hero-carousel/1.jpg";
import Slider_bg_2 from "../../public/assets/img/hero-carousel/2.jpg";
import Slider_bg_3 from "../../public/assets/img/hero-carousel/3.jpg";
import Slider_bg_4 from "../../public/assets/img/hero-carousel/4.jpg";
import Slider_bg_5 from "../../public/assets/img/hero-carousel/5.jpg";
import Slider_bg_6 from "../../public/assets/img/hero-carousel/6.jpg";
import Slider_bg_7 from "../../public/assets/img/hero-carousel/7.jpg";

import client_1 from "../../public/assets/img/clients/client-1.png";
import client_2 from "../../public/assets/img/clients/client-2.png";
import client_3 from "../../public/assets/img/clients/client-3.png";
import client_4 from "../../public/assets/img/clients/client-4.png";
import client_5 from "../../public/assets/img/clients/client-5.png";
import client_6 from "../../public/assets/img/clients/client-6.png";
import Link from "next/link";

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
      <title>PnH It Solution</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      </Head>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="hero  carousel-fade">

        <Carousel className="" activeIndex={heroSlideIndex} onSelect={(index) => setHeroSlideIndex(index)} interval={3000} variant="dark" fade nextIcon={slide.nextIcon} prevIcon={slide.prevIcon}>
          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_1.src})`}}>
            <div className="container">
              <div className="row justify-content-center gy-6">

                <div className="col-lg-5 col-md-8">
                  {/* <Image src={slideImage_1} priority className="img-fluid img" alt=""/> */}
                </div>

                <div className="col-lg-9 text-center mb-5">
                    {/* <h2></h2>
                    <p></p>
                    <a href="#featured-services" className="btn-get-started scrollto ">Get Started</a> */}
                </div>

              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_2.src})`}}></Carousel.Item>
          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_3.src})`}}></Carousel.Item>
          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_4.src})`}}></Carousel.Item>
          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_5.src})`}}></Carousel.Item>
          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_6.src})`}}>
            <div className="container-fluid d-none d-sm-block h-100">
              <div className="row h-100">
                <div className="col-sm-1"></div>
                <div className="col-sm-6" style={{ margin: "auto 0" }}>
                  <div className="text-center">
                      <h2>We work together</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="slider-bg" style={{backgroundImage: `url(${Slider_bg_7.src})`}}></Carousel.Item>
          
        </Carousel>

        {/* <a className="carousel-control-prev" href="#hero" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

        <ol className="carousel-indicators"></ol> */}

      </section>
      <main id="main">

      {/* <!-- ======= Featured Services Section ======= --> */}
      <section id="featured-services" className="featured-services">
        <div className="container">

          <div className="row gy-4">

            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-activity icon"></i></div>
                <h4><a href="" className="stretched-link">8+ Years of Experience</a></h4>
                <p>We have been workning on this feild since 2015</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                <h4><a href="" className="stretched-link">Team Work</a></h4>
                <p>We work together as like family. </p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                <h4><a href="" className="stretched-link">24/7</a></h4>
                <p>We ensure maintenence for each moment. </p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                <h4><a href="" className="stretched-link">Online Service</a></h4>
                <p>No matter where you are located, we give service in each place through online as well as offline. </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Featured Services Section --> */}

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>About Us</h2>
            <p>We pride ourselves on delivering high-quality solutions on time and within budget, while maintaining strong communication and transparency throughout the entire process. </p>
          </div>

          <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-5">
              <div className="about-img">
                <img src="assets/img/about.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-7">
              <h3 className="pt-0 pt-lg-5">We are a leading it solution company. </h3>

              <ul className="nav nav-pills mb-3">
                <li><a className="nav-link active" data-bs-toggle="pill" href="#tab1">About Us</a></li>
                <li><a className="nav-link" data-bs-toggle="pill" href="#tab2">Our Mission</a></li>
                <li><a className="nav-link" data-bs-toggle="pill" href="#tab3">Our Vision</a></li>
              </ul>

              <div className="tab-content">

                <div className="tab-pane fade show active" id="tab1">

                  <p className="fst-italic">PNH IT Solutions is a leading IT firm dedicated to providing innovative and comprehensive technology solutions to businesses of all sizes. With a team of highly skilled professionals and a proven track record of success, we deliver cutting-edge solutions tailored to meet the unique needs and challenges of our clients. </p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Software Development Solutions:</h4>
                  </div>
                  <p>Developing custom software applications to address specific business needs. This could involve programming languages like Python, Java, C++, or web development technologies like HTML, CSS, and JavaScript.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>IT Support and Managed Services:</h4>
                  </div>
                  <p>Outsourcing IT support or opting for managed services to ensure the ongoing maintenance, monitoring, and support of IT systems.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Infrastructure Solutions:</h4>
                  </div>
                  <p>Building and maintaining physical IT infrastructure, including servers, data centers, and storage systems.</p>

                </div>

                <div className="tab-pane fade show" id="tab2">

                  <p className="fst-italic">Our goal is to empower organizations by leveraging the latest advancements in IT to drive productivity, efficiency, and growth. Whether it&apos;s developing custom software applications, implementing robust cybersecurity measures, or optimizing IT infrastructure, we have the expertise to deliver results. </p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Excellence:</h4>
                  </div>
                  <p>We strive for excellence in everything we do, from delivering high-quality    software and hardware solutions to providing top-notch customer service.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Innovation:</h4>
                  </div>
                  <p>We are dedicated to staying at the forefront of technological advancements. We continuously seek innovative solutions to address the unique needs and challenges of our clients.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Integrity:</h4>
                  </div>
                  <p>Integrity is the foundation of our business. We uphold the highest ethical standards in all our interactions, maintaining transparency and honesty with our clients, employees, and partners.
</p>

                </div>

                <div className="tab-pane fade show" id="tab3">

                  <p className="fst-italic">To be a global leader in technology innovation, empowering businesses and individuals to thrive in the digital age. We envision a future where our cutting-edge solutions and services transform industries, drive sustainable growth, and enhance the quality of life for people worldwide. Our commitment to excellence, innovation, and ethical business practices will continue to guide us as we shape the future of IT.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Technological Leadership:</h4>
                  </div>
                  <p>We aim to lead the way in technology innovation, setting industry standards and pushing the boundaries of what&apos;s achievable. Our solutions will be at the forefront of emerging technologies, driving progress and transformation.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Positive Impact:</h4>
                  </div>
                  <p>We aspire to create a positive impact on the world through our technology solutions. Whether it&apo;s by enhancing business efficiency, improving quality of life, or addressing global challenges, our work will leave a lasting, positive mark on society.</p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>Global Reach:</h4>
                  </div>
                  <p>We envision a global presence, with our technology solutions touching lives and businesses across continents. We will expand our reach to serve a diverse range of clients, industries, and communities.</p>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Clients Section ======= --> */}
      <section id="clients" className="clients">
        <div className="container">
          <div className="clients-header">
            <h2 className="text-center">Our Clients</h2>
            <p>These are just a few examples, and our client base extends across various other industries such as telecommunications, energy, transportation, and more. </p>
          </div>
        </div>
        <div className="container" data-aos="zoom-out">
          {domLoaded && (<Swiper
            modules={[Autoplay, Keyboard]}
            // modules={[Navigation, Pagination, Keyboard]}
            // spaceBetween={50}
            speed={400}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 80
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 120
              }
            }}
        
            // navigation
            // pagination={{
            //     el: '.swiper-pagination',
            //     type: 'bullets',
            //     clickable: true
            //   }}
          >
            <SwiperSlide><Image src={client_1} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><Image src={client_2} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><Image src={client_3} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><Image src={client_4} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><Image src={client_5} className="img-fluid" alt="" /></SwiperSlide>
            <SwiperSlide><Image src={client_6} className="img-fluid" alt="" /></SwiperSlide>
          </Swiper>
          )}  

        </div>
      </section>
      

      <section id="onfocus" className="onfocus">
        <div className="container-fluid p-0" data-aos="fade-up">

          <div className="row g-0">
            <div className="col-lg-6 video-play position-relative">
              <Lightbox
                  open={aboutUsVideoOpen}
                  close={() => setAboutUsVideoOpen(false)}
                  slides={
                    [
                      {
                        type: "video",
                        width: 1280,
                        height: 720,
                        poster: "assets/img/about-us-thumbnail.webp",
                        sources: [
                          {
                            src:
                              "assets/video/about-us.mp4",
                            type: "video/mp4"
                          }
                        ]
                      }
                    ]
                  }
                  plugins={[Video]}
                  video={{
                    controls:true,
                    playsInline:true,
                    autoPlay:true,
                    loop:true,
                  }}
              />
              <a onClick={() => setAboutUsVideoOpen(true)} className="glightbox play-btn"></a>

            </div>
            <div className="col-lg-6">
              <div className="content d-flex flex-column justify-content-center h-100">
                <h3>A wide range of topics and technologies, so it would be helpful for all.</h3>
                <p className="fst-italic">
                We believe as an IT Firm, PNH is outstanding and committed to provide sincere service to its valued clients. I find it preactive in service. 
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> We play a crucial role in the modern world, as technology has become an integral part of virtually every aspect of business and daily life.</li>
                </ul>
                <a href="#" className="read-more align-self-start"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

        </div>
      </section>
      

      <section id="features" className="features">
        <div className="container" data-aos="fade-up">

          <ul className="nav nav-tabs row gy-4 d-flex">

            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                <i className="bi bi-binoculars color-cyan"></i>
                <h4>E-commerce</h4>
              </a>
            </li>

            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <i className="bi bi-box-seam color-indigo"></i>
                <h4>POS/Inventory</h4>
              </a>
            </li>

            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <i className="bi bi-brightness-high color-teal"></i>
                <h4>Domain & Hosting</h4>
              </a>
            </li>

            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <i className="bi bi-command color-red"></i>
                <h4>School-college</h4>
              </a>
            </li>

            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5">
                <i className="bi bi-easel color-blue"></i>
                <h4> Erp</h4>
              </a>
            </li>

            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6">
                <i className="bi bi-map color-orange"></i>
                <h4>Account Management</h4>
              </a>
            </li>

          </ul>

          <div className="tab-content">

            <div className="tab-pane active show" id="tab-1">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                  <h3>E-commerce</h3>
                  <p className="fst-italic">
                  E-commerce services encompass a wide range of offerings designed to support online businesses in various aspects of their operations. Whether you&apos;re starting an e-commerce business or looking to improve an existing one, here are some key e-commerce services you might consider:
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> Website Development and Design: Creating an appealing and functional e-commerce website is essential. E-commerce website development services include designing user-friendly interfaces, optimizing for mobile devices, and integrating secure payment gateways.</li>
                    <li><i className="bi bi-check-circle-fill"></i> E-commerce Platform Setup: Choosing the right e-commerce platform (e.g., Shopify, WooCommerce, Magento) is crucial. E-commerce services can assist in selecting, setting up, and customizing the platform to meet your specific business needs.</li>
                    {/* <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li> */}
                  </ul>
                  {/* <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p> */}
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                  <img src="assets/img/features-1.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-2">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>POS/Inventory</h3>
                  <p>
                  Point of Sale (POS) and Inventory management services are crucial for businesses that sell physical products, whether they operate in retail, e-commerce, hospitality, or other industries. These services help businesses efficiently manage their sales, track inventory levels, and optimize operations. Here are some key components and functionalities of POS and inventory management services:
                  </p>
                  {/* <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> Sales Processing: POS systems facilitate the processing of sales transactions, including accepting payments, issuing receipts, and calculating taxes.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Inventory Integration: POS software should integrate seamlessly with your inventory management system to automatically update stock levels when sales occur.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Payment Processing: POS services often include payment processing capabilities, allowing businesses to accept various payment methods, including credit cards, debit cards, cash, and digital wallets.</li>
                    {/* <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li> */}
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-2.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-3">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Domain & Hosting</h3>
                  <p>
                  Domain and hosting services are essential components for establishing and maintaining a website or online presence.Domain services refer to the services and activities associated with the registration, management, and maintenance of domain names on the internet. A domain name is the user-friendly web address (e.g., www.example.com) used to locate websites and online resources. Hosting services provide the infrastructure and technologies needed to make websites accessible to users worldwide.

                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> Domain Registration and Renewal: A domain name is the unique web address that users type into their browsers to access a website. Domain registration is the process of acquiring and owning a domain name. You can register domain names through domain registrars, which are accredited by domain authorities like ICANN (Internet Corporation for Assigned Names and Numbers).</li>
                    <li><i className="bi bi-check-circle-fill"></i> Web Hosting: Web hosting is a service that provides the necessary infrastructure (servers and storage) to store and serve website files and content to visitors on the internet. There are different types of web hosting, including shared hosting, VPS hosting, dedicated hosting, and cloud hosting, each offering varying levels of resources and control.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Server Management: Depending on the type of hosting service you choose, you may have varying degrees of control over server settings and configurations. Managed hosting services handle server maintenance, security, and updates, while unmanaged services require you to manage these aspects yourself.</li>
                  </ul>
                  {/* <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-3.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* <div className="tab-pane" id="tab-4">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Hosting</h3>
                  <p>
                  Hosting services, often referred to as web hosting services, are essential for individuals and businesses looking to publish their websites or web applications on the internet. These services provide the infrastructure and technologies needed to make websites accessible to users worldwide. Here are the key components and types of hosting services:

                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> Shared Hosting: Shared hosting is a budget-friendly option where multiple websites share the same server resources. It&apos;s suitable for small websites with low traffic. However, resource limitations and potential performance issues can arise as multiple sites share the same server.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Virtual Private Server (VPS) Hosting: VPS hosting offers a dedicated portion of a physical server with virtualization technology. Users have more control and resources compared to shared hosting. It&apos;s a good choice for medium-sized websites with moderate traffic.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Dedicated Hosting: Dedicated hosting provides an entire physical server dedicated to a single client. It offers maximum control, performance, and security. Dedicated hosting is ideal for large websites, e-commerce platforms, and applications with high traffic.</li><li><i className="bi bi-check-circle-fill"></i> Cloud Hosting: Cloud hosting utilizes a network of interconnected virtual servers (cloud infrastructure) to distribute resources dynamically. It offers scalability, flexibility, and redundancy, making it suitable for websites and applications with varying traffic loads.
                    </li><li><i className="bi bi-check-circle-fill"></i> Managed Hosting: Managed hosting services include server management tasks such as software updates, security monitoring, and technical support. It allows website owners to focus on content and functionality without worrying about server administration.</li><li><i className="bi bi-check-circle-fill"></i> WordPress Hosting: WordPress hosting is optimized for WordPress-powered websites, offering features like one-click WordPress installation, automatic updates, and specialized support for WordPress-related issues.
                    </li><li><i className="bi bi-check-circle-fill"></i> Reseller Hosting: Reseller hosting allows individuals or businesses to purchase server resources and sell hosting plans to others. It&apos;s a way for entrepreneurs to start their web hosting businesses.
                    </li><li><i className="bi bi-check-circle-fill"></i> Email Hosting: Email hosting services focus on providing reliable email solutions, including email server setup, email account management, and spam filtering.</li>
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-4.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div> */}

            <div className="tab-pane" id="tab-5">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>School-college Erp</h3>
                  <p>
                  A School-College ERP (Enterprise Resource Planning) service is a software solution designed to streamline and automate various administrative, academic, and operational processes within educational institutions, including schools and colleges. These ERP systems are tailored to meet the specific needs of educational organizations and can help improve efficiency, communication, and data management. Here are some key features and functionalities typically offered by School-College ERP services:
                  </p>
                  {/* <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> Student Information System (SIS):
                      Student enrollment and ,Student attendance tracking, Grade management and transcripts
                      Student performance analysis and reporting, Teacher and Staff Management.</li>
                    {/* <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li> */}
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-5.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-6">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Account Management</h3>
                  <p>
                  Account management services refer to a range of financial and administrative services provided by various institutions to help individuals, businesses, and organizations manage their financial accounts and transactions effectively. These services are designed to simplify financial processes, enhance security, and provide support for account-related tasks. Here are some common types of account management services:
                  </p>
                  {/* <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i> Bank Account Management:</li>
                    <li><i className="bi bi-check-circle-fill"></i> Online Banking: Access and manage bank accounts, check balances, view transaction history, pay bills, and transfer funds through secure online banking platforms.Mobile Banking: Perform banking tasks on mobile devices through dedicated banking apps, including check deposits via mobile capture.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Portfolio Management: Professional management of investment portfolios to achieve specific financial goals, risk tolerance, and investment strategies.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Robo-Advisors: Automated investment platforms that use algorithms to manage and optimize investment portfolios based on user preferences.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Credit Card Statements: View and manage credit card statements, transaction history, and available credit limits.</li>
                    <li><i className="bi bi-check-circle-fill"></i> Payment Services: Set up automatic payments, pay bills, and monitor credit card activity to prevent fraud.</li>
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-6.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Our Services</h2>
            <p>We provide comprehensive technological solutions to businesses and organizations to address their specific IT challenges and needs.</p>
          </div>

          <div className="row gy-5">

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services-1.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Software Development</h3>
                  </a>
                  <p>Designing, coding, testing, and maintaining programs to solve problems and meet needs.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services-2.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Web Development</h3>
                  </a>
                  <p>UI design, coding functionality. Define site goals, audience, and content.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services-3.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Mobile Apps Development</h3>
                  </a>
                  <p>Develop app UI (Swift/Objective-C for iOS, Java/Kotlin for Android), set up servers, databases, APIs, and conduct thorough testing.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services-4.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Graphics Design</h3>
                  </a>
                  <p>Visual communication through typography, imagery, color, layout for print, digital, & multimedia.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services-5.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Digital Marketing</h3>
                  </a>
                  <p>Utilizes online strategies (SEO, Social Media, Email, Affiliate, E-commerce, Influencer) to promote products, brands, and individuals.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
              <div className="service-item">
                <div className="img">
                  <img src="assets/img/services-6.png" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Brand Building</h3>
                  </a>
                  <p>Cultivating a strong, trusted identity for business, product, or individual, fostering loyalty and credibility.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
        
      <Testimonial />

      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Hosting Service</h2>
            <p>We also provide domain & hosting service as we are one stop solution. So no need to worry. We will provide each and everything that you need. </p>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-item">

                <div className="pricing-header">
                  <h3>Basic</h3>
                  <h4><sup>৳</sup>999<span> / year</span></h4>
                </div>

                <ul>
                  <li><i className="bi bi-dot"></i> <span>5 GB NVMe Storage</span></li>
                  <li><i className="bi bi-dot"></i> <span>Unlimited Bandwidth</span></li>
                  <li><i className="bi bi-dot"></i> <span>Unlimited E-Mail ID</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE & Auto SSL</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE cPanel</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE LiteSpeed</span></li>
                  <li><i className="bi bi-dot"></i> <span>99.9%Uptime</span></li>
                  <li className="na"><i className="bi bi-x"></i> <span>No domain</span></li>
                </ul>

                <div className="text-center mt-auto">
                  <Link href="#contact" className="buy-btn">Buy Now</Link>
                </div>

              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="pricing-item featured">

                <div className="pricing-header">
                  <h3>Business Plan</h3>
                  <h4><sup>৳</sup>2499<span> / year</span></h4>
                </div>

                <ul>
                  <li><i className="bi bi-dot"></i> <span>10 GB NVMe Storage</span></li>
                  <li><i className="bi bi-dot"></i> <span>Unlimited Bandwidth</span></li>
                  <li><i className="bi bi-dot"></i> <span>Unlimited E-Mail ID</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE & Auto SSL</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE cPanel</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE LiteSpeed</span></li>
                  <li><i className="bi bi-dot"></i> <span>99.9%Uptime</span></li>
                  <li><i className="bi bi-dot"></i> <span>Free .COM Domain</span></li>
                </ul>

                <div className="text-center mt-auto">
                <Link href="#contact" className="buy-btn">Buy Now</Link>
                </div>

              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
              <div className="pricing-item">

                <div className="pricing-header">
                  <h3>Corporate Plan</h3>
                  <h4><sup>৳</sup>3999<span> / year</span></h4>
                </div>

                <ul>
                  <li><i className="bi bi-dot"></i> <span>20 GB NVMe Storage</span></li>
                  <li><i className="bi bi-dot"></i> <span>Unlimited Bandwidth</span></li>
                  <li><i className="bi bi-dot"></i> <span>Unlimited E-Mail ID</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE & Auto SSL</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE cPanel</span></li>
                  <li><i className="bi bi-dot"></i> <span>FREE LiteSpeed</span></li>
                  <li><i className="bi bi-dot"></i> <span>99.9%Uptime</span></li>
                  <li><i className="bi bi-dot"></i> <span>Free .COM Domain</span></li>
                </ul>

                <div className="text-center mt-auto">
                <Link href="#contact" className="buy-btn">Buy Now</Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
      

      <section id="faq" className="faq">
        <div className="container-fluid" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

              <div className="content px-xl-5">
                <h3>Frequently Asked <strong>Questions</strong></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
              </div>

              <div className="accordion accordion-flush px-xl-5" id="faqlist">

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      <i className="bi bi-question-circle question-icon"></i>
                      What kinds of services do you provide?
                    </button>
                  </h3>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                    We are committed to serve all kinds of IT Service 
                    like- Website, Software, Domain, Hosting, 
                    Graphics Design, and Digital Marketing.

                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      <i className="bi bi-question-circle question-icon"></i>
                      Why partner with PNH IT Solutions?

                    </button>
                  </h3>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                    With over 8+ years of experience serving the IT needs of a small to medium-sized business, Uniserve IT Solutions has been able to navigate the ever-shifting world of IT by keeping ahead of the trends. Setting ourselves as an example, our clients have benefited from our advanced solutions as we continuously provide more value and efficiency to exceed their expectations.

                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      <i className="bi bi-question-circle question-icon"></i>
                      What is the process of after service?

                    </button>
                  </h3>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                    This revision will provide you with a solid foundation for understanding IT services and IT service management principles.We are committed to provide 4 month revision after service/product placement. 

                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                      <i className="bi bi-question-circle question-icon"></i>
                      What is your response time?
                    </button>
                  </h3>
                  <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      <i className="bi bi-question-circle question-icon"></i>
                      We do our best to settle issues as soon as possible. We always ensure a fast response time and have our help desk support available to assist you. Our goal is to deliver the best quality of service and meet your IT needs and minimize any disruptions or downtime related to your system.
                    </div>
                  </div>
                </div>

                {/* <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                      <i className="bi bi-question-circle question-icon"></i>
                      Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                    </button>
                  </h3>
                  <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </div>
                  </div>
                </div> */}

              </div>

            </div>

            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url("assets/img/faq.png")`}}>&nbsp;</div>
          </div>

        </div>
      </section>

      {/* <Portfolio /> */}

      {/* <section id="team" className="team">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Our Team</h2>
            <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
          </div>

          <div className="gy-5">

          {domLoaded && (<Swiper
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            // spaceBetween={50}
            speed={1000}
            loop
            autoplay={{
              delay: 300000,
              disableOnInteraction: false
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 60
              }
            }}
            navigation
            pagination
          >
            <SwiperSlide>
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="team-member">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
            </SwiperSlide>
          </Swiper>
          )}  



          </div>

        </div>
      </section> */}



      <section id="contact" className="contact">
        <div className="container">

          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Here are some general steps to help you find the contact information you need.</p>
          </div>

        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4018909009083!2d90.36839805452047!3d23.80430389250119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d154ff5095%3A0x914bd669ac3a2dab!2sPnH%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1674900107293!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="container">

          <div className="row gy-5 gx-lg-5">

            <div className="col-lg-4">

              <div className="info">
                <h3>Get in touch</h3>

                <div className="info-item d-flex">
                  <a className="decoration-none cursor-pointer" href="https://goo.gl/maps/f5CZMwnqFg3qsXfL9"><i className="bi bi-geo-alt flex-shrink-0"></i></a>
                  <div>
                    <h4>Location:</h4>
                    <p className="text-primary">184, Razia Plaza. Level-6, Mirpur-10, Dhaka-1216, Bangladesh</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <a className="decoration-none cursor-pointer" href="mailto:info@it.pnhbd.com"><i className="bi bi-envelope flex-shrink-0"></i></a>
                  <div>
                    <h4>Email:</h4>
                    <p><a className="decoration-none cursor-pointer" href="mailto:info@it.pnhbd.com">info@it.pnhbd.com</a></p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <a className="decoration-none cursor-pointer" href="tel:+8801873003333"><i className="bi bi-phone flex-shrink-0"></i></a>
                  <div>
                    <h4>Call:</h4>
                    <p><a className="decoration-none cursor-pointer" href="tel:+8801873003333">+880 1873 003333</a></p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <a className="decoration-none cursor-pointer" href="http://wa.me/8801873003333"><i className="bi bi-whatsapp flex-shrink-0"></i></a>
                  <div>
                    <h4>WhatsApp:</h4>
                    <p><a className="decoration-none cursor-pointer" href="http://wa.me/8801873003333">+880 1873 003333</a></p>
                  </div>
                </div>

              </div>

            </div>

            <div className="col-lg-8">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>

        </div>
      </section>

      </main>
      {/* <!-- End #main --> */}
    </>
  )
}
