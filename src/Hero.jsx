import React, { useState, useEffect } from "react";
import img1 from "./assets/banner1.jpg";
import img2 from "./assets/banner2.jpg";
import img3 from "./assets/banner3.jpg";
import img4 from "./assets/slider-1.png";
import img5 from "./assets/ico-celander.png";
import img6 from "./assets/ico-freeship.png";
import img7 from "./assets/ico-celander.png";
import img8 from "./assets/ico-umbrella.png";
import img9 from "./assets/slider-2.png";
import img10 from "./assets/slider-3.png";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [img4, img9, img10]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length); 
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); 
  }, [carouselImages.length]);

  return (
    <div className="main-container">
      <div className="search-header">
        <span className="top-search-label">Top Search:</span>
        <span className="top-search-keywords">
          Acer, APPLE, Black, Canon, Cogs, Confi, Kate, Lor, Product, Zolof The Rock And Roll Destroyer
        </span>
      </div>

      <div className="main-content">
        <div className="carousel">
          <div className="carousel-item">
            <img
              src={carouselImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="carousel-image"
            />
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="sidebar-item">
            <img src={img1} alt="Watches" className="sidebar-image" />
          </div>
          <div className="sidebar-item">
            <img src={img2} alt="Jewelry" className="sidebar-image" />
          </div>
          <div className="sidebar-item">
            <img src={img3} alt="New Arrivals" className="sidebar-image" />
          </div>
        </div>
      </div>

      <div className="footer-feature">
        <div className="footer-item">
          <img src={img5} alt="Jewelry" className="footer-icon" />
          <div className="footer-text">90 Day Money Back</div>
        </div>
        <div className="footer-item">
          <img src={img6} alt="Jewelry" className="footer-icon" />
          <div className="footer-text">In-Store Exchange</div>
        </div>
        <div className="footer-item">
          <img src={img7} alt="Jewelry" className="footer-icon" />
          <div className="footer-text">Lowest Price Guarantee</div>
        </div>
        <div className="footer-item">
          <img src={img8} alt="Jewelry" className="footer-icon" />
          <div className="footer-text">Shopping Guarantee</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
