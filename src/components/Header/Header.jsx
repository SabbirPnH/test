
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Image from "next/image";
// import logo from "../../../public/assets/img/logo.png";

// export default function Header() {
//   const [menuData, setMenuData] = useState([]);
//   const [scrolled, setScrolled] = useState("");
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(""); 
//   const router = useRouter();

//   // Fetch menu data
//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await fetch("https://admin.pnhit.pnhbd.com/api/menus");
//         const data = await response.json();
//         setMenuData(data);

//         // Set the first menu item as active initially
//         if (data.length > 0) {
//           setActiveMenu(data[0].url);
//         }
//       } catch (error) {
//         console.error("Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   // Handle scroll to update navbar style and active menu
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setScrolled(offset > 200 ? "sticked" : "");

//       // Dynamically update active menu item based on the section in view
//       const closestSection = getClosestVisibleSection(menuData);
//       if (closestSection) {
//         setActiveMenu(closestSection.url);
//       } else {
//         // If no section is visible, set active menu to an empty string
//         setActiveMenu("");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [menuData]);

//   // Helper function to find the closest visible section
//   const getClosestVisibleSection = (sections) => {
//     for (const section of sections) {
//       if (section.url.startsWith("/#")) {
//         const sectionId = section.url.replace("/#", "");
//         const sectionElement = document.getElementById(sectionId);
//         if (sectionElement) {
//           const { top, height } = sectionElement.getBoundingClientRect();
//           const sectionMidPoint = top + height / 2;

//           if (sectionMidPoint > 0 && sectionMidPoint < window.innerHeight) {
//             return section; // Return the closest visible section
//           }
//         }
//       }
//     }
//     return null; // No visible section found
//   };

//   // Handle menu item click
//   const handleMenuItemClick = (menuItem, e) => {
//     e.preventDefault(); // Prevent default link behavior

//     if (menuItem.url.startsWith("/#")) {
//       const sectionId = menuItem.url.replace("/#", "");
//       if (router.pathname === "/") {
//         // If already on the homepage, scroll to the section
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//         window.history.pushState({}, "", `#${sectionId}`);
//       } else {
//         // Navigate to the homepage and pass the section ID as a hash
//         router.push(`/${menuItem.url}`);
//       }
//     } else {
//       // Handle non-anchor links
//       router.push(menuItem.url);
//     }
//     setActiveMenu(menuItem.url); // Set the active menu item
//     setShowOffcanvas(false); // Close the Offcanvas menu
//   };

//   return (
//     <>
//       <Navbar expand="md" className={`header mb-3 fixed-top ${scrolled}`}>
//         <Container fluid>
//           <Navbar.Brand className="mw-13 md-ms-5 p-0">
//             <Link href="/">
//               <Image
//                 src={logo}
//                 loading="lazy"
//                 className="img-fluid"
//                 alt="PnH IT Solution Logo"
//               />
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="offcanvasNavbar-expand-md"
//             onClick={() => setShowOffcanvas(true)} // Open the Offcanvas
//           />
//           <Navbar.Offcanvas
//             id="offcanvasNavbar-expand-md"
//             aria-labelledby="offcanvasNavbar-expand-md"
//             placement="start"
//             style={{ width: "75%" }} // Set Offcanvas to 75% width
//             show={showOffcanvas}
//             onHide={() => setShowOffcanvas(false)} // Close the Offcanvas
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title className="d-flex justify-content-between align-items-center">
//                 <Image
//                   className="d-block d-md-none"
//                   src={logo}
//                   alt="Logo"
//                   width={100}
//                 />
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-center flex-grow-1 pe-3">
//                 <ul className="list-unstyled">
//                   {menuData.map((menuItem) => (
//                     <li key={menuItem.id}>
//                       <Nav.Link
//                         href={menuItem.url}
//                         onClick={(e) => {
//                           handleMenuItemClick(menuItem, e);
//                         }}
//                         className={activeMenu === menuItem.url ? "active" : "" }
//                       >
//                         {menuItem.menu_name}
//                       </Nav.Link>
//                     </li>
//                   ))}
//                 </ul>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//           <Link className="btn-getstarted" href="/#contact">
//             Get Started
//           </Link>
//         </Container>
//       </Navbar>
      
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";

export default function Header() {
  const [menuData, setMenuData] = useState([]);
  const [scrolled, setScrolled] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); 
  const router = useRouter();

  // Fetch menu data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("https://admin.pnhit.pnhbd.com/api/menus");
        const data = await response.json();
        setMenuData(data);

        // Set the active menu based on URL hash or first menu item
        const hash = window.location.hash;
        if (hash) {
          // Match the hash with the corresponding section and menu item
          const menuItem = data.find(item => item.url === `/#${hash.slice(1)}`);
          if (menuItem) {
            setActiveMenu(menuItem.url);
          }
        } else {
          // Default to the first menu item if no hash is present
          if (data.length > 0) {
            setActiveMenu(data[0].url);
          }
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  // Handle scroll to update navbar style and active menu
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 200 ? "sticked" : "");

      // Dynamically update active menu item based on the section in view
      const closestSection = getClosestVisibleSection(menuData);
      if (closestSection) {
        setActiveMenu(closestSection.url);
      } else {
        setActiveMenu("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuData]);

  // Helper function to find the closest visible section
  const getClosestVisibleSection = (sections) => {
    for (const section of sections) {
      if (section.url.startsWith("/#")) {
        const sectionId = section.url.replace("/#", "");
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const { top, height } = sectionElement.getBoundingClientRect();
          const sectionMidPoint = top + height / 2;

          if (sectionMidPoint > 0 && sectionMidPoint < window.innerHeight) {
            return section; // Return the closest visible section
          }
        }
      }
    }
    return null;
  };

  // Handle menu item click
  const handleMenuItemClick = (menuItem, e) => {
    e.preventDefault(); // Prevent default link behavior

    if (menuItem.url.startsWith("/#")) {
      const sectionId = menuItem.url.replace("/#", "");
      if (router.pathname === "/") {
        // If already on the homepage, scroll to the section
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        window.history.pushState({}, "", `#${sectionId}`);
      } else {
        // Navigate to the homepage and pass the section ID as a hash
        router.push(`/${menuItem.url}`);
      }
    } else {
      // Handle non-anchor links
      router.push(menuItem.url);
    }
    setActiveMenu(menuItem.url); // Set the active menu item
    setShowOffcanvas(false); // Close the Offcanvas menu
  };

  return (
    <>
      <Navbar expand="md" className={`header mb-3 fixed-top ${scrolled}`}>
        <Container fluid>
          <Navbar.Brand className="mw-13 md-ms-5 p-0">
            <Link href="/">
              <Image
                src={logo}
                loading="lazy"
                className="img-fluid"
                alt="PnH IT Solution Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            onClick={() => setShowOffcanvas(true)} // Open the Offcanvas
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbar-expand-md"
            placement="start"
            style={{ width: "75%" }} // Set Offcanvas to 75% width
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)} // Close the Offcanvas
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="d-flex justify-content-between align-items-center">
                <Image
                  className="d-block d-md-none"
                  src={logo}
                  alt="Logo"
                  width={100}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <ul className="list-unstyled">
                  {menuData.map((menuItem) => (
                    <li key={menuItem.id}>
                      <Nav.Link
                        href={menuItem.url}
                        onClick={(e) => {
                          handleMenuItemClick(menuItem, e);
                        }}
                        className={activeMenu === menuItem.url ? "active" : "" }
                      >
                        {menuItem.menu_name}
                      </Nav.Link>
                    </li>
                  ))}
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Link className="btn-getstarted" href="/#contact">
            Get Started
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
