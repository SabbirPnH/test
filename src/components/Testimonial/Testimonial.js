import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';

import testimonial_image_1 from "../../../public/assets/img/testimonials/testimonials-1.png";
import testimonial_image_2 from "../../../public/assets/img/testimonials/testimonials-2.png";
import testimonial_image_3 from "../../../public/assets/img/testimonials/testimonials-3.png";
import testimonial_image_4 from "../../../public/assets/img/testimonials/testimonials-4.png";
import testimonial_image_5 from "../../../public/assets/img/testimonials/testimonials-5.png";

export default function Testimonial() {

    return (
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">

            <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Keyboard]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                      }}
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <Image src={testimonial_image_1} className="testimonial-img" alt="" />
                            <h3>Mr. Mamun</h3>
                            <h4>Founder & CEO of NLEXIC</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                The design they created perfectly captures the essence of our brand and delivers a visually appealing and user-friendly interface. Our website now stands out from our competitors and effectively showcases our products/services. 

                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <Image src={testimonial_image_2} className="testimonial-img" alt="" />
                            <h3>Mohammad Aminur Rahman</h3>
                            <h4>Founder & CEO of Mor Suraha<br/>
                              Adjunct Faculty JU & GUB</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                I believe as an IT Firm, PNH is outstanding and committed to provide sincere service to its valued clients. I find it preactive in service. 
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <Image src={testimonial_image_3} className="testimonial-img" alt="" />
                            <h3>Mohammad Sohel</h3>
                            <h4>Managing Director of Samir Group</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Taking services by  PNH IT Solution for  Web Design has been an exceptional experience. They truly understood our vision and translated it into a stunning website. From the initial consultation to the final launch, their team was highly professional, responsive, and attentive to our needs. 
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <Image src={testimonial_image_4} className="testimonial-img" alt="" />
                            <h3>Abdul Hamid Gazi</h3>
                            <h4>Founder of Alifa Group LTD</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                The design they created perfectly captures the essence of our brand and delivers a visually appealing and user-friendly interface. Our website now stands out from our competitors and effectively showcases our products/services. 
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                            <Image src={testimonial_image_5} className="testimonial-img" alt="" />
                            <h3>Mr. Khalid</h3>
                            <h4>Founder & CEO of BeeSpaceStudios</h4>
                            <div className="stars">
                                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                The design they created perfectly captures the essence of our brand and delivers a visually appealing and user-friendly interface. Our website now stands out from our competitors and effectively showcases our products/services.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


                </div>
                <div className="swiper-pagination"></div>
            </div>

            </div>
        </section>
    )
}



