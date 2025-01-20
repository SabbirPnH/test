
// import Link from 'next/link';
// import { useRouter } from "next/router";
// import { useEffect, useState } from 'react';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Image from 'next/image';

// import logo from "../../../public/assets/img/logo.png";

// export default function Header() {
//     const [menuData, setMenuData] = useState([]);
//     const [scrolled, setScrolled] = useState("");
//     const [selectedEventKey, setSelectedEventKey] = useState(null); 
//     const { asPath } = useRouter();
//     let offsetKey = asPath === "/portfolio" ? 20 : 200;

//     // Fetch menu data from API
//     useEffect(() => {
//         const fetchMenuData = async () => {
//             try {
//                 const response = await fetch('https://admin.pnhit.pnhbd.com/api/menus');
//                 const data = await response.json();
//                 setMenuData(data);
//             } catch (error) {
//                 console.error('Error fetching menu data:', error);
//             }
//         };

//         fetchMenuData();
//     }, []);

//     // Update selectedEventKey based on scroll position and page load
    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > offsetKey) {
    //         setScrolled("sticked");
    //     } else {
    //         setScrolled("");
    //     }

    //     if (asPath !== "/portfolio") {
    //         try {
    //             const observable = {
    //                 hero: document.querySelector('#hero'),
    //                 about: document.querySelector('#about'),
    //                 services: document.querySelector('#services'),
    //                 contact: document.querySelector('#contact'),
    //             };

    //             const pos = {
    //                 hero: observable.hero?.getBoundingClientRect(),
    //                 about: observable.about?.getBoundingClientRect(),
    //                 services: observable.services?.getBoundingClientRect(),
    //                 contact: observable.contact?.getBoundingClientRect(),
    //             };

    //             if (pos.hero && pos.hero.top < window.innerHeight && pos.hero.bottom >= 0) {
    //                 setSelectedEventKey(1);
    //             } else if (pos.about && pos.about.top < window.innerHeight && pos.about.bottom >= 0) {
    //                 setSelectedEventKey(2);
    //             } else if (pos.services && pos.services.top < window.innerHeight && pos.services.bottom >= 0) {
    //                 setSelectedEventKey(19);
    //             } else if (pos.contact && pos.contact.top < window.innerHeight && pos.contact.bottom >= 0) {
    //                 setSelectedEventKey(21);
    //             }
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     // Set the active menu item based on the current path
    //     if (asPath === "/" || asPath === "/#hero") {
    //         setSelectedEventKey(1); // Home menu active on page load
    //     } else if (asPath.includes("service")) {
    //         // Set active key to "Services" when on a service page
    //         setSelectedEventKey(19);
    //     } else {
    //         // For other pages, use menu based on path
    //         const activeMenu = menuData.find(menuItem => asPath.includes(menuItem.url));
    //         if (activeMenu) {
    //             setSelectedEventKey(activeMenu.id);
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [asPath, menuData]);

//     // Handle closing the Offcanvas menu on menu item click
//     const handleMenuItemClick = () => {
//         const offcanvas = document.getElementById('offcanvasNavbar-expand-md');
//         if (offcanvas) {
//             offcanvas.classList.remove('show'); // Close the menu when an item is clicked
//         }
//     };

//     return (
//         <>
//             <Navbar expand="md" className={`header mb-3 fixed-top ${scrolled}`}>
//                 <Container fluid className={asPath !== "/portfolio" ? "" : "nav-light"}>
//                     <Navbar.Brand className="mw-13 md-ms-5 p-0" href="/">
//                         <Image src={logo} loading="lazy" className="img-fluid" alt="PnH It Solution Logo" />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
//                     <Navbar.Offcanvas
//                         id="offcanvasNavbar-expand-md"
//                         aria-labelledby="offcanvasNavbar-expand-md"
//                         placement="start"
//                         style={{ width: '75%' }} // Set Offcanvas to 75% width
//                     >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title className="d-flex justify-content-between align-items-center">
//                                 <Image className="d-block d-md-none" src={logo} alt="Logo" width={100} />
                                
//                             </Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <Nav activeKey={selectedEventKey} onSelect={(selectedKey) => setSelectedEventKey(selectedKey)} className="justify-content-center flex-grow-1 pe-3">
//                             <ul className="list-unstyled">
//   {menuData.map((menuItem) => (
//     <li key={menuItem.id}>
//       <Nav.Link 
//         className="d-block d-lg-none border-bottom" // Border on mobile only
//         eventKey={menuItem.id} 
//         href={menuItem.url}
//         onClick={handleMenuItemClick}
//       >
//         {menuItem.menu_name}
//       </Nav.Link>
//       <Nav.Link 
//         className="d-none d-lg-block" // Visible on desktop only
//         eventKey={menuItem.id} 
//         href={menuItem.url}
//         onClick={handleMenuItemClick}
//       >
//         {menuItem.menu_name}
//       </Nav.Link>
//     </li>
//   ))}
// </ul>



//                             </Nav>
//                         </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                     <Link className="btn-getstarted" href="/#contact" scroll={true}>Get Started</Link>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }





// import Link from 'next/link';
// import { useRouter } from "next/router";
// import { useEffect, useState } from 'react';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Image from 'next/image';

// import logo from "../../../public/assets/img/logo.png";

// export default function Header() {
//     const [menuData, setMenuData] = useState([]);
//     const [scrolled, setScrolled] = useState("");
//     const [selectedEventKey, setSelectedEventKey] = useState(null);
//     const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control Offcanvas visibility
//     const { asPath } = useRouter();
//     let offsetKey = asPath === "/portfolio" ? 20 : 200;

//     // Fetch menu data from API
//     useEffect(() => {
//         const fetchMenuData = async () => {
//             try {
//                 const response = await fetch('https://admin.pnhit.pnhbd.com/api/menus');
//                 const data = await response.json();
//                 setMenuData(data);
//             } catch (error) {
//                 console.error('Error fetching menu data:', error);
//             }
//         };

//         fetchMenuData();
//     }, []);

//     // Update selectedEventKey based on scroll position and page load
//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > offsetKey) {
//             setScrolled("sticked");
//         } else {
//             setScrolled("");
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [offsetKey]);

//     const scrollToSection = (id) => {
//         const section = document.querySelector(`#${id}`);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//     };

//     const handleMenuItemClick = (menuItem) => {
//         if (menuItem.url.startsWith('/#')) {
//             const sectionId = menuItem.url.replace('/#', '');
//             scrollToSection(sectionId);
//         }
//         setShowOffcanvas(false); // Close the Offcanvas menu
//     };

//     return (
//         <>
//             <Navbar expand="md" className={`header mb-3 fixed-top ${scrolled}`}>
//                 <Container fluid className={asPath !== "/portfolio" ? "" : "nav-light"}>
//                     <Navbar.Brand className="mw-13 md-ms-5 p-0" href="/">
//                         <Image src={logo} loading="lazy" className="img-fluid" alt="PnH It Solution Logo" />
//                     </Navbar.Brand>
//                     <Navbar.Toggle
//                         aria-controls="offcanvasNavbar-expand-md"
//                         onClick={() => setShowOffcanvas(true)} // Open the Offcanvas
//                     />
//                     <Navbar.Offcanvas
//                         id="offcanvasNavbar-expand-md"
//                         aria-labelledby="offcanvasNavbar-expand-md"
//                         placement="start"
//                         style={{ width: '75%' }} // Set Offcanvas to 75% width
//                         show={showOffcanvas}
//                         onHide={() => setShowOffcanvas(false)} // Close the Offcanvas
//                     >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title className="d-flex justify-content-between align-items-center">
//                                 <Image className="d-block d-md-none" src={logo} alt="Logo" width={100} />
//                             </Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <Nav activeKey={selectedEventKey} onSelect={(selectedKey) => setSelectedEventKey(selectedKey)} className="justify-content-center flex-grow-1 pe-3">
//                                 <ul className="list-unstyled">
//                                     {menuData.map((menuItem) => (
//                                         <li key={menuItem.id}>
//                                             <Nav.Link
//                                                 className="d-block d-lg-none border-bottom" // Border on mobile only
//                                                 eventKey={menuItem.id}
//                                                 href={menuItem.url}
//                                                 onClick={(e) => {
//                                                     e.preventDefault();
//                                                     handleMenuItemClick(menuItem);
//                                                 }}
//                                             >
//                                                 {menuItem.menu_name}
//                                             </Nav.Link>
//                                             <Nav.Link
//                                                 className="d-none d-lg-block" // Visible on desktop only
//                                                 eventKey={menuItem.id}
//                                                 href={menuItem.url}
//                                                 onClick={(e) => {
//                                                     e.preventDefault();
//                                                     handleMenuItemClick(menuItem);
//                                                 }}
//                                             >
//                                                 {menuItem.menu_name}
//                                             </Nav.Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </Nav>
//                         </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                     <Link className="btn-getstarted" href="/#contact" scroll={true}>Get Started</Link>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }







// import Link from 'next/link';
// import { useRouter } from "next/router";
// import { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Image from 'next/image';
// import logo from "../../../public/assets/img/logo.png";

// export default function Header() {
//     const [menuData, setMenuData] = useState([]);
//     const [scrolled, setScrolled] = useState("");
//     const [selectedEventKey, setSelectedEventKey] = useState(null);
//     const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control Offcanvas visibility
//     const { asPath } = useRouter();
//     let offsetKey = asPath === "/portfolio" ? 20 : 200;

//     // Fetch menu data from API
//     useEffect(() => {
//         const fetchMenuData = async () => {
//             try {
//                 const response = await fetch('https://admin.pnhit.pnhbd.com/api/menus');
//                 const data = await response.json();
//                 setMenuData(data);
//             } catch (error) {
//                 console.error('Error fetching menu data:', error);
//             }
//         };

//         fetchMenuData();
//     }, []);

//     // Update selectedEventKey based on scroll position and page load
//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > offsetKey) {
//             setScrolled("sticked");
//         } else {
//             setScrolled("");
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [offsetKey]);

//     const scrollToSection = (id) => {
//         const section = document.querySelector(`#${id}`);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//     };

//     const handleMenuItemClick = (menuItem) => {
//         if (menuItem.url.startsWith('/#')) {
//             const sectionId = menuItem.url.replace('/#', '');
//             scrollToSection(sectionId);
//         } else {
//             // For non-anchor links, allow normal navigation
//             window.location.href = menuItem.url;
//         }
//         setShowOffcanvas(false); // Close the Offcanvas menu
//     };

//     return (
//         <>
//             <Navbar expand="md" className={`header mb-3 fixed-top ${scrolled}`}>
//                 <Container fluid className={asPath !== "/portfolio" ? "" : "nav-light"}>
//                     <Navbar.Brand className="mw-13 md-ms-5 p-0" href="/">
//                         <Image src={logo} loading="lazy" className="img-fluid" alt="PnH It Solution Logo" />
//                     </Navbar.Brand>
//                     <Navbar.Toggle
//                         aria-controls="offcanvasNavbar-expand-md"
//                         onClick={() => setShowOffcanvas(true)} // Open the Offcanvas
//                     />
//                     <Navbar.Offcanvas
//                         id="offcanvasNavbar-expand-md"
//                         aria-labelledby="offcanvasNavbar-expand-md"
//                         placement="start"
//                         style={{ width: '75%' }} // Set Offcanvas to 75% width
//                         show={showOffcanvas}
//                         onHide={() => setShowOffcanvas(false)} // Close the Offcanvas
//                     >
//                         <Offcanvas.Header closeButton>
//                             <Offcanvas.Title className="d-flex justify-content-between align-items-center">
//                                 <Image className="d-block d-md-none" src={logo} alt="Logo" width={100} />
//                             </Offcanvas.Title>
//                         </Offcanvas.Header>
//                         <Offcanvas.Body>
//                             <Nav activeKey={selectedEventKey} onSelect={(selectedKey) => setSelectedEventKey(selectedKey)} className="justify-content-center flex-grow-1 pe-3">
//                                 <ul className="list-unstyled">
//                                     {menuData.map((menuItem) => (
//                                         <li key={menuItem.id}>
//                                             <Nav.Link
//                                                 className="d-block d-lg-none border-bottom" // Border on mobile only
//                                                 eventKey={menuItem.id}
//                                                 href={menuItem.url}
//                                                 onClick={(e) => {
//                                                     e.preventDefault();
//                                                     handleMenuItemClick(menuItem);
//                                                 }}
//                                             >
//                                                 {menuItem.menu_name}
//                                             </Nav.Link>
//                                             <Nav.Link
//                                                 className="d-none d-lg-block" // Visible on desktop only
//                                                 eventKey={menuItem.id}
//                                                 href={menuItem.url}
//                                                 onClick={(e) => {
//                                                     e.preventDefault();
//                                                     handleMenuItemClick(menuItem);
//                                                 }}
//                                             >
//                                                 {menuItem.menu_name}
//                                             </Nav.Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </Nav>
//                         </Offcanvas.Body>
//                     </Navbar.Offcanvas>
//                     <Link className="btn-getstarted" href="/#contact" scroll={true}>Get Started</Link>
//                 </Container>
//             </Navbar>
//         </>
//     );
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
  const [activeMenu, setActiveMenu] = useState(""); // Track active menu item
  const router = useRouter();

  // Fetch menu data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("https://admin.pnhit.pnhbd.com/api/menus");
        const data = await response.json();
        setMenuData(data);

        // Set the first menu item as active initially
        if (data.length > 0) {
          setActiveMenu(data[0].url);
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
        // If no section is visible, set active menu to an empty string
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
    return null; // No visible section found
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