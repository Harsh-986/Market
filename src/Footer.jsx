import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                <h4 className="footer__title">Information</h4>
                <ul className="footer__list">
                    <Link to="/Aboutus"  className="link-unique"><li className="footer__item">About Us</li></Link>
                    <li className="footer__item">FAQ</li>
                    <li className="footer__item">Order history</li>
                    <li className="footer__item">Order information</li>
                </ul>
                </div>
                <div className="footer__section">
                <h4 className="footer__title">Customer Service</h4>
                <ul className="footer__list">
                    <Link to="/Contactus" className="link-unique"><li className="footer__item">Contact Us</li></Link>
                    <li className="footer__item">Returns</li>
                    <li className="footer__item">Site Map</li>
                    <li className="footer__item">My Account</li>
                </ul>
                </div>
                <div className="footer__section">
                <h4 className="footer__title">My Account</h4>
                <ul className="footer__list">
                    <li className="footer__item">Brands</li>
                    <li className="footer__item">Gift Vouchers</li>
                    <li className="footer__item">Affiliates</li>
                    <li className="footer__item">Specials</li>
                    <li className="footer__item">Our Blog</li>
                </ul>
                </div>
                <div className="footer__section">
                <h4 className="footer__title">Contact Us</h4>
                <ul className="footer__contact">
                    <li className="footer__contact-item">
                    <span className="footer__icon">📍</span>
                    My Company, 42 avenue des Champs Elysees 75000 Paris France
                    </li>
                    <li className="footer__contact-item">
                    <span className="footer__icon">✉️</span>
                    Email: sales@yourcompany.com
                    </li>
                    <li className="footer__contact-item">
                    <span className="footer__icon">📞</span>
                    Phone 1: 0123456789
                    </li>
                    <li className="footer__contact-item">
                    <span className="footer__icon">📞</span>
                    Phone 2: (123) 4567890
                    </li>
                </ul>
                </div>
            </div>
            <div className="footer__keywords">
                <p>Top Stores: Brand Directory | Store Directory</p>
                <p>
                MOST SEARCHED KEYWORDS MARKET: Xiaomi Mi3 | Digiflip Pro XT 712 Tablet | Mi
                3 Phones | <a href="#">View all</a>
                </p>
                <p>
                MOBILES: Moto E | Samsung Mobile | Micromax Mobile | Nokia Mobile | HTC
                Mobile | <a href="#">View all</a>
                </p>

            </div>
            <div className="footer__bottom">
                <p>© 2016 Market. All Rights Reserved.</p>
                <div className="footer__payment-icons">
                <span>PayPal</span>
                <span>VISA</span>
                <span>American Express</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer