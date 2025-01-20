import React, { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [faqData, setFaqData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(
          "https://admin.pnhit.pnhbd.com/api/faqs"
        );
        setFaqData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch FAQs.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { faqs, faq_infos } = faqData || {};

  return (
    <section id="faq" className="faq">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content px-xl-5">
              <h3>{faq_infos?.[0]?.title || "Frequently Asked"}</h3>
              <p style={{ color: '#485664' }}>
                {faq_infos?.[0]?.text || "Learn more about our services here."}
              </p>
            </div>

            <div className="accordion accordion-flush px-xl-5" id="faqlist">
              {faqs?.map((faq, index) => (
                <div
                  className="accordion-item"
                  key={faq.id}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-content-${faq.id}`}
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={`faq-content-${faq.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{
              backgroundImage: `url(${
                faq_infos?.[0]?.slider_image || "default-image.jpg"
              })`,
            }}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
