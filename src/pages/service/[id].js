// import { FaArrowRightLong } from "react-icons/fa6";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Head from "next/head";
// export async function getStaticPaths() {
//   const res = await fetch("https://admin.pnhit.pnhbd.com/api/services");
//   const services = await res.json();

//   const paths = services.map((service) => ({
//     params: { id: service.id.toString() },
//   }));

//   return { paths, fallback: "blocking" };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `https://admin.pnhit.pnhbd.com/api/single-service/${params.id}`
//   );
//   if (!res.ok) {
//     return { notFound: true };
//   }
//   const service = await res.json();

//   const servicesRes = await fetch("https://admin.pnhit.pnhbd.com/api/services");
//   const services = await servicesRes.json();
//   return {
//     props: {
//       service,
//       services,
//     },
//   };
// }

// export default function ServiceDetails({ service, services }) {
//   console.log(service)
//   const router = useRouter();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }
//   if (!isClient) {
//     return null;
//   }

//   return (
//     <>
//       <Head>
//         <title>PnH It Solution - Service-Details</title>
//         <meta content="" name="description" />
//         <meta content="" name="keywords" />
//       </Head>
//       <div className="mt-5">
//         {service.map((item) => (
//           <div key={item.id} className="service-details-all sp py-5 mt-5 ">
//             <div className="container">
//               <div className="row g-4">
//                 <div className="col-lg-4">
//                   <div className="details-sidebar bg-light">
//                     <div
//                       className="details-box3  p-4 rounded"
//                       style={{ backgroundColor: "#f5f3f4" }}
//                     >
//                       <h3 className="text-dark fw-bold">Our Services</h3>
//                       <ul className="service-list list-unstyled mt-3">
//                         {services.map((item) => (
//                           <Link key={item.id} href={`/service/${item.id}`}>
//                             <p className="d-flex justify-content-between cursor-pointer hover:bg-[##f97233] hover:text-[#fff] align-items-center text-dark fw-semibold fs-5 bg-white p-3 rounded custom-hover">
//                               {item.services_name} <FaArrowRightLong />
//                             </p>
//                           </Link>
//                         ))}
//                       </ul>
//                     </div>

//                     <div
//                       className="details-box-call p-4 rounded mt-4"
//                       style={{ backgroundColor: "#f97233" }}
//                     >
//                       <h3 className="text-white fw-bold">
//                       If You Need Any Help, Contact Us
//                       </h3>
//                       <a
//                         style={{ color: "#f97233" }}
//                         href="tel: +880 1873 003333"
//                         className="btn w-100 mt-3 d-inline-flex align-items-center justify-content-center p-3 bg-white text-[#f97233] fw-bold fs-5 fs-sm-4"
//                       >
//                         <img
//                           src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png"
//                           alt
//                           className="me-2"
//                         />
//                         +880 1873 003333
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-lg-8">
//                   <div className="service-details-area">
//                     <article>
//                       <div className="heading1">
//                         <p dangerouslySetInnerHTML={{ __html: item.description }}></p>

//                       </div>
//                     </article>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }



import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch("https://admin.pnhit.pnhbd.com/api/services");
  const services = await res.json();

  const paths = services.map((service) => ({
    params: { id: service.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://admin.pnhit.pnhbd.com/api/single-service/${params.id}`
  );
  if (!res.ok) {
    return { notFound: true };
  }
  const service = await res.json();

  const servicesRes = await fetch("https://admin.pnhit.pnhbd.com/api/services");
  const services = await servicesRes.json();
  return {
    props: {
      service,
      services,
    },
    revalidate: 10,
  };
}

export default function ServiceDetails({ service, services }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!isClient) {
    return null;
  }

  const currentServiceId = router.query.id;

  return (
    <>
    <Head>
      <title>PnH It Solution - Service-Details</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
    </Head>
    <div className="mt-5">
      {service.map((item) => (
        <div key={item.id} className="service-details-all sp py-5 mt-5">
          <div className="container">
            <div className="row g-4">
              {/* Sidebar Section */}
              <div className="col-lg-4">
                <div
                  className="details-sidebar"
                  style={{
                    backgroundColor: "#f5f3f4",
                    padding: "16px",
                    borderRadius: "6px",
                  }}
                >
                  <h3
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Our Services
                  </h3>
                  <ul
                    className="service-list"
                    style={{
                      listStyleType: "none",
                      padding: "0",
                      marginTop: "12px",
                      overflowY: "visible", // Always visible
                    }}
                  >
                    {services.map((serviceItem) => (
                      <Link
                        key={serviceItem.id}
                        href={`/service/${serviceItem.id}`}
                      >
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "14px",
                            fontWeight: "600",
                            backgroundColor:
                              currentServiceId ===
                              serviceItem.id.toString()
                                ? "#f97233"
                                : "#fff",
                            color:
                              currentServiceId ===
                              serviceItem.id.toString()
                                ? "#fff"
                                : "#000",
                            padding: "10px",
                            margin: "5px 0",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          {serviceItem.services_name} <FaArrowRightLong />
                        </p>
                      </Link>
                    ))}
                  </ul>
                </div>

                <div
                  className="details-box-call d-none d-md-block"
                  style={{
                    backgroundColor: "#f97233",
                    padding: "16px",
                    borderRadius: "8px",
                    marginTop: "16px",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    If You Need Any Help, Contact Us
                  </h3>
                  <a
                    href="tel:+8801873003333"
                    style={{
                      color: "#f97233",
                      backgroundColor: "#fff",
                      padding: "12px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginTop: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png"
                      alt="Call Icon"
                      style={{ marginRight: "8px" }}
                    />
                    +880 1873 003333
                  </a>
                </div>
              </div>

              {/* Details Section */}
              <div className="col-lg-8">
                <div className="service-details-area">
                  <article>
                    <div className="heading1">
                      <div className="image">
                        <img
                          src={item.bg_image_two}
                          alt="Service Details"
                          style={{
                            width: "100%",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "12px",
                      }}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}
