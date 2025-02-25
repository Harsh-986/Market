import React, { useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import { Link } from "react-router-dom";


function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setDropdownVisible(!dropdownVisible); // Toggle the dropdown visibility
  };

  return (
    <nav className="custom-navbar">
      <ul className="navbar-menu">
        <li
          className={`menu-item all-categories ${dropdownVisible ? "show-dropdown" : ""}`} // Toggle class
          onClick={handleClick}
        >
          ☰ All Categories
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li>Automotive & Motorcycle</li>
              <li>Electronic</li>
              <li>Sports & Outdoors</li>
              <li>Health & Beauty</li>
              <li>Smartphone & Tablets</li>
              <li>Flashlights & Lamps</li>
              <li>Camera & Photo</li>
              <li>Outdoor & Traveling Supplies</li>
              <li>Toys & Hobbies</li>
              <li>Jewelry & Watches</li>
              <li>Bags, Holiday Supplies</li>
              <li>More Car Accessories</li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <a href="#">Home</a>
        </li>
        <li className="menu-item">
          <a href="#">Features</a>
          <ul className="dropdown-menu-features">
            <li>
              <strong>LISTING PAGES</strong>
              <ul>
                <li><a>Category Page 1</a></li>
                <li><a>Category Page 2</a></li>
                <li><a>Category Page 3</a></li>
              </ul>
            </li>
            <li>
              <strong>PRODUCT PAGES</strong>
              <ul>
                <li><a>Image size - big</a></li>
                <li><a>Image size - medium</a></li>
                <li><a>Image size - small</a></li>
              </ul>
            </li>
            <li>
              <strong>SHOPPING PAGES</strong>
              <ul>
                <li><a>Shopping Cart Page</a></li>
                <li><a>Checkout Page</a></li>
                <li><a>Compare Page</a></li>
                <li><a>Wishlist Page</a></li>
              </ul>
            </li>
            <li>
              <strong>MY ACCOUNT PAGES</strong>
              <ul>
                <li><a>Login Page</a></li>
                <li><a>Register Page</a></li>
                <li><a>My Account</a></li>
                <li><a>Order History</a></li>
                <li><a>Order Information</a></li>
                <li><a>Product Returns</a></li>
                <li><a>Gift Voucher</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Pages</a>
          <ul className="dropdown-menu-pages">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <Link to="/Contactus"><a href="#">Contact Us</a></Link>
            </li>
            <li>
              <a href="#">Banner Effect</a>
            </li>
            <li>
              <Link to="/Aboutus"><a href="#">About Us 1</a></Link>
            </li>
            <li>
              <Link to="/Aboutus"><a href="#">About Us 2</a></Link>
            </li>
            <li>
              <Link to="/Aboutus"><a href="#">About Us 3</a></Link>
            </li>
            <li>
              <Link to="/Aboutus"><a href="#">About Us 4</a></Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Categories</a>
          <div className="categories-dropdown" >
            <div className="category-item">
              <img src={img4} alt="Jewelry & Watches" />
              <h3>AUTOMOBILES</h3>
              <ul>
                <li>Car Alarms and Security</li>
                <li>Car Audio & Speakers</li>
                <li>Gadgets & Auto Parts</li>
                <li>More Car Accessories</li>
              </ul>
            </div>
            <div className="category-item">
              <img src={img2} alt="Smart TV" />
              <h3>ELECTRONICS</h3>
              <ul>
                <li>Batteries & Chargers</li>
                <li>Headphones, Headsets</li>
                <li>Home Audio</li>
                <li>MP3 Players & Accessories</li>
              </ul>
            </div>
            <div className="category-item">
              <img src={img1}alt="Sale" />
              <h3>JEWELRY & WATCHES</h3>
              <ul>
                <li>Earrings</li>
                <li>Wedding Rings</li>
                <li>Men Watches</li>
              </ul>
            </div>
            <div className="category-item">
              <img src={img3} alt="Automotive" />
              <h3>BAGES, HOLIDAY SUPPLIES</h3>
              <ul>
                <li>Gift & Lifestyle Gadgets</li>
                <li>Gift for Man</li>
                <li>Gift for Woman</li>
                <li>Lighter & Cigar Supplies</li>
              </ul>
            </div>
          </div>
        </li>

        <li className="menu-item">
          <a href="#">Accessories</a>
        </li>
        <li className="menu-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="menu-item buy-theme">
          <a href="#">Buy Theme!</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
