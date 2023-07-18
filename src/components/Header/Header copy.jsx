import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Header({settings}) {
    // const [sisterConcern, setSisterConcern]=useState(false);  
    // const [menuHomeActive, setMenuHomeActive] = useState(false);
    const [menuServicesActive, setMenuServicesActive] = useState(false);
    const [menuPagesActive, setMenuPagesActive] = useState(false);
    const [menuBlogActive, setMenuBlogActive] = useState(false);
    const [menuMobileActive, setMenuMobileActive] = useState(false);
    const [scrolled, setScrolled] = useState("");
    const [sectionActive, setSectionActive] = useState("home");

    // const {asPath} = useRouter();

    const isActive = (path) =>{
        if(path==asPath){
            return "active";
        }else{
            return "";
        }
    }
    const isSectionActive = (path) =>{
        if(path==asPath){
            return "active";
        }else{
            return "";
        }
    }
    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled("sticked");
        }
        else {
            setScrolled("");
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
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
        <header id="header" className={`header fixed-top ${scrolled}`} data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between">

            <Link href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                <h1>HeroBiz<span>.</span></h1>
            </Link>

            <nav id="navbar" className="navbar">
                <ul>
                    <li><Link className="nav-link" href="/#hero" scroll={false}>Home</Link></li>
                    <li><Link className="nav-link" href="/#about" scroll={false}>About</Link></li>
                    <li><Link className="nav-link" href="/#services" scroll={false}>Services</Link></li>
                    <li><Link className="nav-link" href="/#portfolio" scroll={false}>Portfolio</Link></li>
                    <li><Link className="nav-link" href="/#team" scroll={false}>Team</Link></li>
                    {/* <li><a href="/blog">Blog</a></li> */}
                    {/* <li className="dropdown megamenu"><a href="#"><span>Mega Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li>
                            <a href="#">Column 1 link 1</a>
                            <a href="#">Column 1 link 2</a>
                            <a href="#">Column 1 link 3</a>
                        </li>
                        <li>
                            <a href="#">Column 2 link 1</a>
                            <a href="#">Column 2 link 2</a>
                            <a href="#">Column 3 link 3</a>
                        </li>
                        <li>
                            <a href="#">Column 3 link 1</a>
                            <a href="#">Column 3 link 2</a>
                            <a href="#">Column 3 link 3</a>
                        </li>
                        <li>
                            <a href="#">Column 4 link 1</a>
                            <a href="#">Column 4 link 2</a>
                            <a href="#">Column 4 link 3</a>
                        </li>
                        </ul>
                    </li> */}
                    {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    <li><Link className="nav-link" href="/#contact" scroll={false}>Contact</Link></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle d-none"></i>
            </nav>

            <Link className="btn-getstarted" href="/#contact" scroll={false}>Get Started</Link>

            </div>
        </header>
        </>
    )
}