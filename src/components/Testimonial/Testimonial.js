import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await fetch(
          "https://admin.pnhit.pnhbd.com/api/reviews"
        );
        const data = await response.json();
        setTestimonial(data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchTestimonial();
  }, []);

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
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
            >
              {testimonial.map((item, id) => (
                <SwiperSlide key={id}>
                  <div className="testimonial-item">
                    <Image
                      src={item.image}
                      className="testimonial-img"
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    <h3>{item.name}</h3>
                    <h4>{item.designation}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, idx) => (
                        <i key={idx} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      {item.review}
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
