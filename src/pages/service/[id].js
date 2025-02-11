
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
//     revalidate: 10,
//   };
// }

// export default function ServiceDetails({ service, services }) {
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

//   const currentServiceId = router.query.id;

//   return (
//     <>
//     <Head>
//       <title>PnH It Solution - Service-Details</title>
//       <meta content="" name="description" />
//       <meta content="" name="keywords" />
//     </Head>
//     <div className="mt-5">
//       {service.map((item) => (
//         <div key={item.id} className="service-details-all sp py-5 mt-5">
//           <div className="container">
//             <div className="row g-4">
//               {/* Sidebar Section */}
//               <div className="col-lg-4">
//                 <div
//                   className="details-sidebar"
//                   style={{
//                     backgroundColor: "#f5f3f4",
//                     padding: "16px",
//                     borderRadius: "6px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#000",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     Our Services
//                   </h3>
//                   <ul
//                     className="service-list"
//                     style={{
//                       listStyleType: "none",
//                       padding: "0",
//                       marginTop: "12px",
//                       overflowY: "visible", // Always visible
//                     }}
//                   >
//                     {services.map((serviceItem) => (
//                       <Link
//                         key={serviceItem.id}
//                         href={`/service/${serviceItem.id}`}
//                       >
//                         <p
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             fontSize: "14px",
//                             fontWeight: "600",
//                             backgroundColor:
//                               currentServiceId ===
//                               serviceItem.id.toString()
//                                 ? "#f97233"
//                                 : "#fff",
//                             color:
//                               currentServiceId ===
//                               serviceItem.id.toString()
//                                 ? "#fff"
//                                 : "#000",
//                             padding: "10px",
//                             margin: "5px 0",
//                             borderRadius: "4px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           {serviceItem.services_name} <FaArrowRightLong />
//                         </p>
//                       </Link>
//                     ))}
//                   </ul>
//                 </div>

//                 <div
//                   className="details-box-call d-none d-md-block"
//                   style={{
//                     backgroundColor: "#f97233",
//                     padding: "16px",
//                     borderRadius: "8px",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#fff",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     If You Need Any Help, Contact Us
//                   </h3>
//                   <a
//                     href="tel:+8801873003333"
//                     style={{
//                       color: "#f97233",
//                       backgroundColor: "#fff",
//                       padding: "12px",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: "100%",
//                       borderRadius: "6px",
//                       fontWeight: "bold",
//                       fontSize: "14px",
//                       marginTop: "12px",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <img
//                       src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png"
//                       alt="Call Icon"
//                       style={{ marginRight: "8px" }}
//                     />
//                     +880 1873 003333
//                   </a>
//                 </div>
//               </div>

//               {/* Details Section */}
//               <div className="col-lg-8">
//                 <div className="service-details-area">
//                   <article>
//                     <div className="heading1">
//                       <div className="image">
//                         <img
//                           src={item.bg_image_two}
//                           alt="Service Details"
//                           style={{
//                             width: "100%",
//                             borderRadius: "8px",
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <p
//                       style={{
//                         marginTop: "12px",
                      
//                       }}
//                       dangerouslySetInnerHTML={{ __html: item.description }}
//                     ></p>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </>
//   );
// }







// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function ServiceDetails() {
//   const router = useRouter();
//   const { id } = router.query; 

//   const [services, setServices] = useState([]); 
//   const [serviceDetails, setServiceDetails] = useState(null); 
//   const [loading, setLoading] = useState(true);

  
//   useEffect(() => {
//     if (!id) return; 

//     const fetchServicesAndDetails = async () => {
//       try {
//         setLoading(true);

       
//         const resServices = await fetch("https://admin.pnhit.pnhbd.com/api/services");
//         const servicesData = await resServices.json();
//         setServices(servicesData);

       
//         const resService = await fetch(
//           `https://admin.pnhit.pnhbd.com/api/single-service/${id}`
//         );
//         const serviceData = await resService.json();
//         setServiceDetails(Array.isArray(serviceData) ? serviceData[0] : serviceData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServicesAndDetails();
//   }, [id]); 

//   if (loading) {
//     return <div className="text-center mt-5">Loading...</div>;
//   }

//   if (!serviceDetails) {
//     return <div className="text-center mt-5">Service not found.</div>;
//   }

  

//   return (
//     <>
//       <Head>
//         <title>PnH IT Solution - Service Details</title>
//         <meta content="Service details for PnH IT Solution." name="description" />
//         <meta content="IT services, solutions, PnH IT" name="keywords" />
//       </Head>

//       <div className="mt-5">
//         <div className="service-details-all sp py-5 mt-5">
//           <div className="container">
//             <div className="row g-4">
//               {/* Sidebar Section */}
//               <div className="col-lg-4">
//                 <div
//                   className="details-sidebar"
//                   style={{
//                     backgroundColor: "#f5f3f4",
//                     padding: "16px",
//                     borderRadius: "6px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#000",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     Our Services
//                   </h3>
//                   <ul
//                     className="service-list"
//                     style={{
//                       listStyleType: "none",
//                       padding: "0",
//                       marginTop: "12px",
//                       overflowY: "visible",
//                     }}
//                   >
//                     {services.map((serviceItem) => (
//                       <Link key={serviceItem.id} href={`/service/${serviceItem.id}`} passHref>
//                         <p
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             fontSize: "14px",
//                             fontWeight: "600",
//                             backgroundColor:
//                               id === serviceItem.id.toString() ? "#f97233" : "#fff",
//                             color: id === serviceItem.id.toString() ? "#fff" : "#000",
//                             padding: "10px",
//                             margin: "5px 0",
//                             borderRadius: "4px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           {serviceItem.services_name} <FaArrowRightLong />
//                         </p>
//                       </Link>
//                     ))}
//                   </ul>
//                 </div>

//                 <div
//                   className="details-box-call d-none d-md-block"
//                   style={{
//                     backgroundColor: "#f97233",
//                     padding: "16px",
//                     borderRadius: "8px",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#fff",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     If You Need Any Help, Contact Us
//                   </h3>
//                   <a
//                     href="tel:+8801873003333"
//                     style={{
//                       color: "#f97233",
//                       backgroundColor: "#fff",
//                       padding: "12px",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: "100%",
//                       borderRadius: "6px",
//                       fontWeight: "bold",
//                       fontSize: "14px",
//                       marginTop: "12px",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <img
//                       src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png"
//                       alt="Call Icon"
//                       style={{ marginRight: "8px" }}
//                     />
//                     +880 1873 003333
//                   </a>
//                 </div>
//               </div>

//               {/* Details Section */}
//               <div className="col-lg-8">
//                 <div className="service-details-area">
//                   <article>
//                     <div className="heading1">
//                       <div className="image">
//                         <img
//                           src={serviceDetails.bg_image_two || ""}
//                           alt={serviceDetails.services_name || "Service Details"}
//                           style={{
//                             width: "100%",
//                             borderRadius: "8px",
//                           }}
//                         />
//                       </div>
//                     </div>
                    
//                     <p
//                       style={{
//                         marginTop: "12px",
//                         textAlign: "justify",
//                       }}
//                       dangerouslySetInnerHTML={{
//                         __html: serviceDetails.description || "No description available.",
//                       }}
//                     ></p>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }







// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function ServiceDetails() {
//   const router = useRouter();
//   const { id } = router.query; 

//   const [services, setServices] = useState([]); 
//   const [serviceDetails, setServiceDetails] = useState(null); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(false); 

 
//   useEffect(() => {
//     if (!id) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);

       
//         const resServices = await fetch("https://admin.pnhit.pnhbd.com/api/services");
//         if (!resServices.ok) throw new Error("Failed to fetch services");
//         const servicesData = await resServices.json();
//         setServices(servicesData);

       
//         const resServiceDetails = await fetch(
//           `https://admin.pnhit.pnhbd.com/api/single-service/${id}`
//         );
//         if (!resServiceDetails.ok) throw new Error("Service not found");
//         const serviceData = await resServiceDetails.json();
//         setServiceDetails(Array.isArray(serviceData) ? serviceData[0] : serviceData);

//         setError(false); 
//       } catch (err) {
//         console.error(err.message);
//         setError(true);
//         setServiceDetails(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <div className="text-center mt-5">Loading...</div>;
//   }

//   if (error || !serviceDetails) {
//     return <div className="text-center mt-5">Service not found.</div>;
//   }

//   return (
//     <>
//       <Head>
//         <title>{serviceDetails.services_name} - Service Details</title>
//         <meta name="description" content={`Details about ${serviceDetails.services_name}`} />
//         <meta name="keywords" content="IT services, PnH IT solutions, services" />
//       </Head>

//       <div className="mt-5">
//         <div className="service-details-all sp py-5 mt-5">
//           <div className="container">
//             <div className="row g-4">
//               {/* Sidebar Section */}
//               <div className="col-lg-4">
//                 <div
//                   className="details-sidebar"
//                   style={{
//                     backgroundColor: "#f5f3f4",
//                     padding: "16px",
//                     borderRadius: "6px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#000",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     Our Services
//                   </h3>
//                   <ul
//                     className="service-list"
//                     style={{
//                       listStyleType: "none",
//                       padding: "0",
//                       marginTop: "12px",
//                       overflowY: "visible",
//                     }}
//                   >
//                     {services.map((serviceItem) => (
//                       <Link key={serviceItem.id} href={`/service/${serviceItem.id}`} passHref>
//                         <p
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             fontSize: "14px",
//                             fontWeight: "600",
//                             backgroundColor:
//                               id === serviceItem.id.toString() ? "#f97233" : "#fff",
//                             color: id === serviceItem.id.toString() ? "#fff" : "#000",
//                             padding: "10px",
//                             margin: "5px 0",
//                             borderRadius: "4px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           {serviceItem.services_name} <FaArrowRightLong />
//                         </p>
//                       </Link>
//                     ))}
//                   </ul>
//                 </div>

//                 <div
//                   className="details-box-call d-none d-md-block"
//                   style={{
//                     backgroundColor: "#f97233",
//                     padding: "16px",
//                     borderRadius: "8px",
//                     marginTop: "16px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       color: "#fff",
//                       fontWeight: "bold",
//                       fontSize: "18px",
//                     }}
//                   >
//                     If You Need Any Help, Contact Us
//                   </h3>
//                   <a
//                     href="tel:+8801873003333"
//                     style={{
//                       color: "#f97233",
//                       backgroundColor: "#fff",
//                       padding: "12px",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: "100%",
//                       borderRadius: "6px",
//                       fontWeight: "bold",
//                       fontSize: "14px",
//                       marginTop: "12px",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <img
//                       src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png"
//                       alt="Call Icon"
//                       style={{ marginRight: "8px" }}
//                     />
//                     +880 1873 003333
//                   </a>
//                 </div>
//               </div>

            
//               <div className="col-lg-8">
//                 <div className="service-details-area">
//                   <article>
//                     <div className="heading1">
//                       <div className="image">
//                         <img
//                           src={serviceDetails.bg_image_two || ""}
//                           alt={serviceDetails.services_name || "Service Details"}
//                           style={{
//                             width: "100%",
//                             borderRadius: "8px",
//                           }}
//                         />
//                       </div>
//                     </div>

//                     <p
//                       style={{
//                         marginTop: "12px",
//                         textAlign: "justify",
//                       }}
//                       dangerouslySetInnerHTML={{
//                         __html: serviceDetails.description || "No description available.",
//                       }}
//                     ></p>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function ServiceDetails() {
//   const router = useRouter();
//   const { id } = router.query; // Get service ID from URL

//   const [services, setServices] = useState([]); // Store all services
//   const [serviceDetails, setServiceDetails] = useState(null); // Store selected service details
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!id) return; // Ensure ID is available

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch all services
//         const resServices = await fetch("https://admin.pnhit.pnhbd.com/api/services");
//         if (!resServices.ok) throw new Error("Failed to fetch services");
//         const servicesData = await resServices.json();
//         setServices(servicesData);

//         // Fetch selected service by ID
//         const resServiceDetails = await fetch(`https://admin.pnhit.pnhbd.com/api/single-service/${id}`);
//         if (!resServiceDetails.ok) throw new Error("Service not found");
//         let serviceData = await resServiceDetails.json();

//         // Handle API response format (check if data is inside an object)
//         if (serviceData?.data) serviceData = serviceData.data;
//         setServiceDetails(Array.isArray(serviceData) ? serviceData[0] : serviceData);

//         setError(false); // Reset error state
//       } catch (err) {
//         console.error(err.message);
//         setError(true);
//         setServiceDetails(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   // Handle loading state
//   if (loading) return <div className="text-center mt-5">Loading...</div>;

//   // Handle error or empty service details
//   if (error || !serviceDetails) return <div className="text-center mt-5">Service not found.</div>;

//   return (
//     <>
//       <Head>
//         <title>{serviceDetails?.services_name || "Service"} - Service Details</title>
//         <meta name="description" content={`Details about ${serviceDetails?.services_name}`} />
//         <meta name="keywords" content="IT services, PnH IT solutions, services" />
//       </Head>

//       <div className="mt-5">
//         <div className="service-details-all sp py-5 mt-5">
//           <div className="container">
//             <div className="row g-4">
//               {/* Sidebar */}
//               <div className="col-lg-4">
//                 <div className="details-sidebar" style={{ backgroundColor: "#f5f3f4", padding: "16px", borderRadius: "6px" }}>
//                   <h3 style={{ color: "#000", fontWeight: "bold", fontSize: "18px" }}>Our Services</h3>
//                   <ul className="service-list" style={{ listStyleType: "none", padding: "0", marginTop: "12px" }}>
//                     {services.map((serviceItem) => (
//                       <Link key={serviceItem.id} href={`/service/${serviceItem.id}`} passHref>
//                         <p
//                           style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             fontSize: "14px",
//                             fontWeight: "600",
//                             backgroundColor: String(id) === String(serviceItem.id) ? "#f97233" : "#fff",
//                             color: String(id) === String(serviceItem.id) ? "#fff" : "#000",
//                             padding: "10px",
//                             margin: "5px 0",
//                             borderRadius: "4px",
//                             cursor: "pointer",
//                           }}
//                         >
//                           {serviceItem.services_name} <FaArrowRightLong />
//                         </p>
//                       </Link>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="details-box-call d-none d-md-block" style={{ backgroundColor: "#f97233", padding: "16px", borderRadius: "8px", marginTop: "16px" }}>
//                   <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>If You Need Any Help, Contact Us</h3>
//                   <a
//                     href="tel:+8801873003333"
//                     style={{
//                       color: "#f97233",
//                       backgroundColor: "#fff",
//                       padding: "12px",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: "100%",
//                       borderRadius: "6px",
//                       fontWeight: "bold",
//                       fontSize: "14px",
//                       marginTop: "12px",
//                       textDecoration: "none",
//                     }}
//                   >
//                     <img src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png" alt="Call Icon" style={{ marginRight: "8px" }} />
//                     +880 1873 003333
//                   </a>
//                 </div>
//               </div>

//               {/* Service Details */}
//               <div className="col-lg-8">
//                 <div className="service-details-area">
//                   <article>
//                     <div className="heading1">
//                       <div className="image">
//                         <img src={serviceDetails.bg_image_two || ""} alt={serviceDetails.services_name || "Service Details"} style={{ width: "100%", borderRadius: "8px" }} />
//                       </div>
//                     </div>

//                     <p style={{ marginTop: "12px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: serviceDetails.description || "No description available." }}></p>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  const res = await fetch("https://admin.pnhit.pnhbd.com/api/services");
  const services = await res.json();

  const paths = services.map((service) => ({
    params: { id: service.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const resServiceDetails = await fetch(`https://admin.pnhit.pnhbd.com/api/single-service/${params.id}`);
  let serviceDetails = await resServiceDetails.json();

  const resServices = await fetch("https://admin.pnhit.pnhbd.com/api/services");
  const services = await resServices.json();

  if (serviceDetails?.data) {
    serviceDetails = serviceDetails.data;
  }

  if (!serviceDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serviceDetails: Array.isArray(serviceDetails) ? serviceDetails[0] : serviceDetails,
      services,
    },
    revalidate: 10,
  };
}

export default function ServiceDetails({ serviceDetails, services }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark as client-side
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <>
      <Head>
        <title>{serviceDetails?.services_name || "Service"} - Service Details</title>
        <meta name="description" content={`Details about ${serviceDetails?.services_name}`} />
        <meta name="keywords" content="IT services, PnH IT solutions, services" />
      </Head>

      <div className="mt-5">
        <div className="service-details-all sp py-5 mt-5">
          <div className="container">
            <div className="row g-4">
              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="details-sidebar" style={{ backgroundColor: "#f5f3f4", padding: "16px", borderRadius: "6px" }}>
                  <h3 style={{ color: "#000", fontWeight: "bold", fontSize: "18px" }}>Our Services</h3>
                  <ul className="service-list" style={{ listStyleType: "none", padding: "0", marginTop: "12px" }}>
                    {services.map((serviceItem) => (
                      <Link key={serviceItem.id} href={`/service/${serviceItem.id}`} passHref>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "14px",
                            fontWeight: "600",
                            backgroundColor: String(router.query.id) === String(serviceItem.id) ? "#f97233" : "#fff",
                            color: String(router.query.id) === String(serviceItem.id) ? "#fff" : "#000",
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
                <div className="details-box-call d-none d-md-block" style={{ backgroundColor: "#f97233", padding: "16px", borderRadius: "8px", marginTop: "16px" }}>
                  <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>If You Need Any Help, Contact Us</h3>
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
                    <img src="https://html.vikinglab.agency/recrute/assets/img/icons/details-call.png" alt="Call Icon" style={{ marginRight: "8px" }} />
                    +880 1873 003333
                  </a>
                </div>
              </div>

              {/* Service Details */}
              <div className="col-lg-8">
                <div className="service-details-area">
                  <article>
                    <div className="heading1">
                      <div className="image">
                        <img src={serviceDetails.bg_image_two || ""} alt={serviceDetails.services_name || "Service Details"} style={{ width: "100%", borderRadius: "8px" }} />
                      </div>
                    </div>

                    <p style={{ marginTop: "12px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: serviceDetails.description || "No description available." }}></p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}