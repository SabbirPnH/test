import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image'

import logo from "../../../public/assets/img/logo.png";

export default function Header({settings}) {
    // const [sisterConcern, setSisterConcern]=useState(false);  
    // const [menuHomeActive, setMenuHomeActive] = useState(false);
    const [menuServicesActive, setMenuServicesActive] = useState(false);
    const [menuPagesActive, setMenuPagesActive] = useState(false);
    const [menuBlogActive, setMenuBlogActive] = useState(false);
    const [menuMobileActive, setMenuMobileActive] = useState(false);
    const [scrolled, setScrolled] = useState("");
    
    let {asPath} = useRouter();
    let key = 1;
    let offsetKey = 200;

    if(asPath == "/portfolio"){
        key = 4;
        offsetKey = 20;
    }
    const [selectedEventKey, setSelectedEventKey] = useState(key);

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > offsetKey) {
            setScrolled("sticked");
        }
        else {
            setScrolled("");
        }

        if(asPath != "/portfolio"){
            try {
                const observable = {
                    hero: document.querySelector('#hero'),
                    about: document.querySelector('#about'),
                    services: document.querySelector('#services'),
                    // portfolio: document.querySelector('#portfolio'),
                    // team: document.querySelector('#team'),
                    contact: document.querySelector('#contact')
                }
                const pos = {
                    hero: observable.hero.getBoundingClientRect(),
                    about: observable.about.getBoundingClientRect(),
                    services: observable.services.getBoundingClientRect(),
                    // portfolio: observable.portfolio.getBoundingClientRect(),
                    // team: observable.team.getBoundingClientRect(),
                    contact: observable.contact.getBoundingClientRect()
                }
                
            
                if (pos.hero.top < window.innerHeight && pos.hero.bottom >= 0) {
                    setSelectedEventKey(1);
                } else if (pos.about.top < window.innerHeight && pos.about.bottom >= 0) {
                    setSelectedEventKey(2);
                } else if (pos.services.top < window.innerHeight && pos.services.bottom >= 0) {
                    setSelectedEventKey(3);
                //   } else if (pos.portfolio.top < window.innerHeight && pos.portfolio.bottom >= 0) {
                //     setSelectedEventKey(4);
                // } else if (pos.team.top < window.innerHeight && pos.team.bottom >= 0) {
                //     setSelectedEventKey(5);
                } else if (pos.contact.top < window.innerHeight && pos.contact.bottom >= 0) {
                    setSelectedEventKey(6);
                }
            } catch(e){
            }
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })
    // useEffect(()=>{
    //     if(!sisterConcern){
    //         getData();
    //     }
    // })
    // const getData=()=>{
    //     fetch('DATA/sister_concern.json'
    //     ,{
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }
    //     )
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         setSisterConcern(myJson)
    //     });
    // }

    
    return (
        <>
            <Navbar expand="md" className={`header mb-3 fixed-top ${scrolled}`}>
            <Container fluid className={asPath != "/portfolio"?"":"nav-light"}>
                <Navbar.Brand className="mw-13 md-ms-5 p-0" href="/"><Image src={logo} loading="lazy" className="img-fluid" alt="PnH It Solution Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas
                id="offcanvasNavbar-expand-md"
                aria-labelledby="offcanvasNavbar-expand-md"
                placement="start"
                >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                <Nav activeKey={selectedEventKey} onSelect={(selectedKey) => setSelectedEventKey(selectedKey)} className="justify-content-center flex-grow-1 pe-3">
                    <ul>
                        <li><Nav.Link eventKey={1} href="/#hero">Home</Nav.Link></li>
                        <li><Nav.Link eventKey={2} href="/#about">About</Nav.Link></li>
                        <li><Nav.Link eventKey={3} href="/#services">Services</Nav.Link></li>
                        <li><Nav.Link eventKey={4} href="/portfolio">Portfolio</Nav.Link></li>
                        {/* <li><Nav.Link eventKey={5} href="/#team">Team</Nav.Link></li> */}
                        <li><Nav.Link eventKey={6} href="/#contact">Contact</Nav.Link></li>
                    </ul>
                </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Link className="btn-getstarted" href="/#contact" scroll={false}>Get Started</Link>
            </Container>
            </Navbar>
        </>
    )
}