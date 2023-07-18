import Link from "next/link";
import Script from "next/script";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Footer() {

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

        if(asPath != "/portfolio"){
            try {
                const observable = {
                    hero: document.querySelector('#hero'),
                    about: document.querySelector('#about'),
                    services: document.querySelector('#services'),
                    // portfolio: document.querySelector('#portfolio'),
                    team: document.querySelector('#team'),
                    contact: document.querySelector('#contact')
                }
                const pos = {
                    hero: observable.hero.getBoundingClientRect(),
                    about: observable.about.getBoundingClientRect(),
                    services: observable.services.getBoundingClientRect(),
                    // portfolio: observable.portfolio.getBoundingClientRect(),
                    team: observable.team.getBoundingClientRect(),
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
                } else if (pos.team.top < window.innerHeight && pos.team.bottom >= 0) {
                    setSelectedEventKey(5);
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

    return (
        <>
            <footer id="footer" className="footer">

            <div className="footer-content">
            <div className="container">
                <div className="row">

                <div className="col-lg-3 col-md-6">
                    <div className="footer-info">
                    <h3>PnH It Solution</h3>
                    <p>
                        184, Razia Plaza. Level-6 <br />
                        Mirpur-10, Dhaka-1216, Bangladesh<br /><br />
                        <strong>Phone:</strong> <a className="decoration-none cursor-pointer" href="mailto:info@it.pnhbd.com"> +880 1873 003333</a><br />
                        <strong>Email:</strong> <a className="decoration-none cursor-pointer" href="tel:+8801873003333"> info@it.pnhbd.com</a><br />
                    </p>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <div activeKey={selectedEventKey} onSelect={(selectedKey) => setSelectedEventKey(selectedKey)}>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i><Nav.Link eventKey={1} href="/#hero">Home</Nav.Link></li>
                            <li><i className="bi bi-chevron-right"></i><Nav.Link eventKey={2} href="/#about">About</Nav.Link></li>
                            <li><i className="bi bi-chevron-right"></i><Nav.Link eventKey={3} href="/#services">Services</Nav.Link></li>
                            <li><i className="bi bi-chevron-right"></i><Nav.Link eventKey={4} href="/portfolio">Portfolio</Nav.Link></li>
                            <li><i className="bi bi-chevron-right"></i><Nav.Link eventKey={5} href="/#team">Team</Nav.Link></li>
                            <li><i className="bi bi-chevron-right"></i><Nav.Link eventKey={6} href="/#contact">Contact</Nav.Link></li>
                        </ul>
                    </div>

                    {/* <ul>
                        <li><i className="bi bi-chevron-right"></i> <Link href="/#hero" scroll={false}>Home</Link></li>
                        <li><i className="bi bi-chevron-right"></i> <Link href="/#about" scroll={false}>About us</Link></li>
                        <li><i className="bi bi-chevron-right"></i> <Link href="/#services" scroll={false}>Services</Link></li>
                        <li><i className="bi bi-chevron-right"></i> <Link eventKey={4} href="/portfolio" scroll={false}>Portfolio</Link></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul> */}
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <Link href="/#services">Software Development</Link></li>
                    <li><i className="bi bi-chevron-right"></i> <Link href="/#services">Web Development</Link></li>
                    <li><i className="bi bi-chevron-right"></i> <Link href="/#services">Mobile App Development</Link></li>
                    <li><i className="bi bi-chevron-right"></i> <Link href="/#services">Graphics Design</Link></li>
                    <li><i className="bi bi-chevron-right"></i> <Link href="/#services">Digitaal Marketing</Link></li>
                    <li><i className="bi bi-chevron-right"></i> <Link href="/#services">Brand Building</Link></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Join to get update of our work & other things. </p>
                    <form action="" method="post">
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" />
                    </form>

                </div>

                </div>
            </div>
            </div>

            <div className="footer-legal text-center">
            <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                <div className="d-flex flex-column align-items-center align-items-lg-start">
                <div className="copyright">
                    Copyright &copy; <strong><span>Pnh It Solution</span></strong>. All Rights Reserved.
                </div>
                <div className="credits">
                    Developed by <Link href="/">Pnh It Solution</Link>
                </div>
                </div>

                <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                <Link className="facebook decoration-none cursor-pointer" href="http://fb.com/pnhitsolution/" ><i className="bi bi-facebook"></i></Link>
                <Link className="messenger decoration-none cursor-pointer" href="http://m.me/pnhitsolution/" ><i className="bi bi-messenger"></i></Link>
                <Link className="whatsapp decoration-none cursor-pointer" href="http://wa.me/8801873003333"><i className="bi bi-whatsapp"></i></Link>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <Link className="linkedin decoration-none cursor-pointer" href="https://bd.linkedin.com/company/pnh-corporation"><i className="bi bi-linkedin"></i></Link>
                </div>

            </div>
            </div>

            </footer>
            {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      /> */}
        {/* <script type="text/javascript" src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script type="text/javascript" src="assets/vendor/aos/aos.js"></script>
        <script type="text/javascript" src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script type="text/javascript" src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script type="text/javascript" src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script type="text/javascript" src="assets/js/main.js"></script> */}
      {/* <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer/>
      <Script src="assets/vendor/aos/aos.js" />
      <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
      <Script src="assets/vendor/swiper/swiper-bundle.min.js" />
      <Script src="assets/js/main.js" /> */}

        </>
    )
}