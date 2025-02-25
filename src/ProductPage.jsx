import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowRightArrowLeft, faMoneyBillTransfer, faTruckFast, faCalendarCheck, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import img1 from "./assets/J5.jpg"
import img2 from "./assets/J4.jpg"
import img3 from "./assets/J6.jpg"
import img4 from "./assets/J9.jpg"

function ProductPage() {
    const [mainImage, setMainImage] = useState(img1);
    const [quantity, setQuantity] = useState(1);

    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const handleQuantityChange = (change) => {
        if (quantity + change >= 1) {
            setQuantity(quantity + change);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="product-page-container">
            <div className="product-page-image-gallery">
                <div className="product-page-main-image">
                    <img src={mainImage} alt="Main Product" />
                </div>
                <div className="product-page-thumbnail-gallery">
                    <img src= {img1} alt="Thumbnail 1" onClick={() => handleThumbnailClick(img1)} />
                    <img src= {img3} alt="Thumbnail 2" onClick={() => handleThumbnailClick(img3)} />
                    <img src= {img4}alt="Thumbnail 3" onClick={() => handleThumbnailClick(img4)} />
                </div>
            </div>
            <div className="product-page-product-details">
                <h2 className="product-page-product-title">Bint Beef</h2>
                <div className="product-page-rating">
                    ☆☆☆☆☆ 0 reviews | <a href="#">Write a review</a>
                </div>
                <div className="product-page-price">
                    $114.00 <span>$122.00</span>
                </div>
                <div className="product-page-availability">
                    Availability: In Stock
                </div>
                <div className="product-page-details-list">
                    <p><strong>Ex Tax:</strong> $60.00</p>
                    <p><strong>Price in reward points:</strong> 400</p>
                    <p><strong>Brand:</strong> Apple</p>
                    <p><strong>Product Code:</strong> Product 15</p>
                    <p><strong>Reward Points:</strong> 100</p>
                </div>
                <div className="product-page-options-list">
                    <h4>Colors</h4>
                    <div className="product-page-color-options">
                        <div className="product-page-color-option blue"></div>
                        <div className="product-page-color-option brown"></div>
                        <div className="product-page-color-option green"></div>
                    </div>
                    <h4>Checkbox</h4>
                    <div className="product-page-checkbox-options">
                        <label><input type="checkbox" /> Checkbox 1 (+$12.00)</label>
                        <label><input type="checkbox" /> Checkbox 2 (+$36.00)</label>
                        <label><input type="checkbox" /> Checkbox 3 (+$24.00)</label>
                        <label><input type="checkbox" /> Checkbox 4 (+$48.00)</label>
                    </div>
                </div>
                <div className="product-page-add-to-cart-section">
                    <div className="product-page-quantity-input">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <input type="text" value={quantity} readOnly />
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <button className="product-page-add-to-cart-button">ADD TO CART</button>
                    <button className="product-page-wishlist-button"><FontAwesomeIcon icon={faHeartRegular} /></button>
                    <button className="product-page-compare-button"><FontAwesomeIcon icon={faArrowRightArrowLeft} /></button>
                </div>
                <div></div>
            </div>
            <div className="product-page-icons-section">
                <div className="product-page-icon-box">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    <span>90 DAY MONEY BACK</span>
                </div>
                <div className="product-page-icon-box">
                    <FontAwesomeIcon icon={faTruckFast} />
                    <span>IN-STORE EXCHANGE</span>
                </div>
                <div className="product-page-icon-box">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <span>LOWEST PRICE GUARANTEE</span>
                </div>
                <div className="product-page-icon-box">
                    <FontAwesomeIcon icon={faUmbrella} />
                    <span>SHOPPING GUARANTEE</span>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;