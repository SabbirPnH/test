// import React from "react";

// const HostingCards = () => {
//   const plans = [
//     {
//       title: "Shared Hosting",
//       price: "$10/mth",
//       features: [
//         "Standard Performance",
//         "Web Hosting",
//         "Free 1-click install",
//       ],
//     },
//     {
//       title: "Shared Hosting",
//       price: "$10/mth",
//       features: [
//         "Standard Performance",
//         "Web Hosting",
//         "Free 1-click install",
//       ],
//     },
//     {
//       title: "Shared Hosting",
//       price: "$10/mth",
//       features: [
//         "Standard Performance",
//         "Web Hosting",
//         "Free 1-click install",
//       ],
//     },
//     {
//       title: "Shared Hosting",
//       price: "$10/mth",
//       features: [
//         "Standard Performance",
//         "Web Hosting",
//         "Free 1-click install",
//       ],
//     },
//   ];

//   return (
//     <div className=" py-5">
//       <div className="row g-4">
//         {plans.map((plan, index) => (
//           <div key={index} className="col-md-6 col-lg-3">
//             <div className="card text-center border-1 shadow-sm">
//               <div className="card-body">
//                 <div className="mb-3">
//                   <img
//                     src="https://via.placeholder.com/64"
//                     alt="Plan Icon"
//                     className="img-fluid"
//                   />
//                 </div>
//                 <h5 className="card-title mb-3">{plan.title}</h5>
//                 <ul className="list-unstyled mb-4">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="mb-2">
//                       <i className="bi bi-check-circle-fill  text-primary me-2"></i>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="mb-4">
//                   <strong>Starting at: </strong>
//                   <span className="fw-bold">{plan.price}</span>
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Get Started
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HostingCards;



import React from "react";
import { IoMdCheckmark } from "react-icons/io";
const HostingCards = () => {
  const plans = [
    {
      title: "Shared Hosting",
      price: "$10/mth",
      features: ["Standard Performance", "Web Hosting", "Free 1-click install"],
    },
    {
      title: "Shared Hosting",
      price: "$10/mth",
      features: ["Standard Performance", "Web Hosting", "Free 1-click install"],
    },
    {
      title: "Shared Hosting",
      price: "$10/mth",
      features: ["Standard Performance", "Web Hosting", "Free 1-click install"],
    },
    {
      title: "Shared Hosting",
      price: "$10/mth",
      features: ["Standard Performance", "Web Hosting", "Free 1-click install"],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card text-start border-1 shadow-sm">
              <div className="card-body">
                <div className="mb-3">
                  <img
                    src="assets/img/cloud-computing.png"
                    alt="Plan Icon"
                    className="img-fluid"
                  />
                </div>
                <h5 className="card-title mb-3 text-secondary">{plan.title}</h5>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="mb-2 text-sm d-flex align-items-center"
                    >
                      <IoMdCheckmark className="text-primary me-2 fw-semibold fs-6" />
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4">
                  <span className="text-secondary">Starting at: </span>
                  <span className="fw-bold">{plan.price}</span>
                </p>
                <a href="#" className="btn text-white bg-primary w-100">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostingCards;
