// import Link from "next/link";
// import { useEffect, useState } from "react";
// export async function getStaticProps() {
//   const res = await fetch("https://admin.pnhit.pnhbd.com/api/services");
//   if (!res.ok) {
//     return { notFound: true }; 
//   }
//   const services = await res.json();

//   return {
//     props: {
//       services,
//     },
//   };
// }

// export default function ServiceList({ services }) {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }
//   return (
//     <section id="services" className="services mt-5">
//       <div className="container" data-aos="fade-up">
//         <div className="section-header">
//           <h2>Our Services</h2>
//           <p>
//             We provide comprehensive technological solutions to businesses and
//             organizations to address their specific IT challenges and needs.
//           </p>
//         </div>

//         <div className="row gy-5">
//           {services.map((service, index) => (
//             <div
//               className="col-xl-4 col-md-6"
//               data-aos="zoom-in"
//               data-aos-delay={200 + index * 100}
//               key={service.id}
//             >
//               <Link href={`/service/${service.id}`}>
//                 <div className="service-item">
//                   <div className="img">
//                     <img
//                       src={service.bg_image}
//                       className="img-fluid"
//                       alt={service.services_name}
//                     />
//                   </div>
//                   <div className="details position-relative">
//                     <div>
//                       <div className="icon">
//                         <i className={`${service.image}`}></i>
//                       </div>
//                     </div>
//                     <a href="#" className="stretched-link">
//                       <h3>{service.services_name}</h3>
//                     </a>
//                     <p className="text-justify text-black">{service.title}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://admin.pnhit.pnhbd.com/api/services");
  if (!res.ok) {
    return { notFound: true };
  }
  const services = await res.json();

  return {
    props: {
      services,
    },
  };
}

export default function ServiceList({ services }) {
  return (
    <section id="services" className="services mt-5">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            We provide comprehensive technological solutions to businesses and
            organizations to address their specific IT challenges and needs.
          </p>
        </div>

        <div className="row gy-5">
          {services.map((service, index) => (
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
              key={service.id}
            >
              <Link href={`/service/${service.id}`} passHref>
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
                    <p className="text-justify text-black">{service.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}