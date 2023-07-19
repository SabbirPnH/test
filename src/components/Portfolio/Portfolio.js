import React from 'react';
import slides from "../../data/slides";
import photos from "../../data/photos";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import Image from "next/image";


export default function Portfolio() {
    const [portfolio, setPortfolio] = React.useState(photos);
    const [portfolioSlides, setPortfolioSlides] = React.useState(slides);
    const [portfolioIndex, setPortfolioIndex] = useState(-1);
    const [activeCat, setActiveCat] = React.useState('all');

    const filterCategory=(category) =>{
        setActiveCat(category);
        if(category=="all"){
            setPortfolio(photos);
            setPortfolioSlides(slides);
            return;
        }
        let filteredData = photos.filter((value)=>{
            return value.category.includes(category);
        })
        setPortfolio(filteredData);

        filteredData = slides.filter((value)=>{
            return value.category.includes(category);
        })
        setPortfolioSlides(filteredData);
    }
    const isCatActive = (cat) =>{
        return activeCat == cat?"filter-active":"";
    }    
    return (
        <section id="portfolio" className="portfolio" data-aos="fade-up">

        <div className="container">

        <div className="section-header">
            <h2>Portfolio</h2>
            <p>Non hic nulla eum consequatur maxime ut vero memo vero totam officiis pariatur eos dolorum sed fug dolorem est possimus esse quae repudiandae. Dolorem id enim officiis sunt deserunt esse soluta consequatur quaerat</p>
        </div>

        </div>

        <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">

        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

            <ul className="portfolio-flters">
                <li className={isCatActive("all")} onClick={() => filterCategory('all')}>All</li>
                <li className={isCatActive("product")} onClick={() => filterCategory('web')}>Web Development</li>
                <li className={isCatActive("app")} onClick={() => filterCategory('app')}>App Development</li>
                <li className={isCatActive("branding")} onClick={() => filterCategory('software')}>Software Solution</li>
                <li className={isCatActive("books")} onClick={() => filterCategory('others')}>Others</li>
            </ul>

            <div className="row g-0 portfolio-container">

                {portfolio.map(({ src, alt, width, height, category }, key) => {
                    return(
                        <div key={key} className={`col-xl-3 col-lg-4 col-md-6 portfolio-item filter-${category}`}>
                            <Image src={`/${src}`} width={width} height={height} className="img-fluid" alt={alt} />
                            <div className="portfolio-info">
                            <h4>{alt}</h4>
                            <a onClick={() => setPortfolioIndex(key)} className="preview-link" style={{cursor: 'pointer'}}><i className="bi bi-zoom-in"></i></a>
                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                            </div>
                        </div>
                    )
                })}

            </div>

            <Lightbox
                open={portfolioIndex >= 0}
                index={portfolioIndex}
                close={() => setPortfolioIndex(-1)}
                slides={portfolioSlides}
            />

        </div>

        </div>
        </section>
    )
}



