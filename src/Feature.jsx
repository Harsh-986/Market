import img1 from "./assets/J5.jpg"
import img2 from "./assets/m3.jpg"
import img3 from "./assets/B9.jpg"
import img4 from "./assets/w10.jpg"


function FeaturedProducts() {
  return (
    <div className="featured-products">
      <h2 className="section-title">FEATURED PRODUCT</h2>
      <div className="product-grid">
        <div className="product-card">
          <div className="product-image">
            <img src={img1} alt="Heart Necklace" />
            <span className="badge">-15%</span>
          </div>
          <h3 className="product-title">Cupim Bris</h3>
          <div className="product-rating">★★★★☆</div>
          <div className="product-price">
            <span className="current-price">$50.00</span>
            <span className="original-price">$62.00</span>
          </div>
          <div className="product-actions">
            <button className="action-button">Add to Cart</button>
            <button className="icon-button">♡</button>
            <button className="icon-button">⟳</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={img2} alt="Lipsticks" />
            <span className="badge new">NEW</span>
          </div>
          <h3 className="product-title">Cisi Chicken</h3>
          <div className="product-rating">★★★★☆</div>
          <div className="product-price">
            <span className="current-price">$59.00</span>
          </div>
          <div className="product-actions">
            <button className="action-button">Add to Cart</button>
            <button className="icon-button">♡</button>
            <button className="icon-button">⟳</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={img3} alt="Handbag" />
          </div>
          <h3 className="product-title">Bint Beef</h3>
          <div className="product-rating">★★★★☆</div>
          <div className="product-price">
            <span className="current-price">$97.00</span>
          </div>
          <div className="product-actions">
            <button className="action-button">Add to Cart</button>
            <button className="icon-button">♡</button>
            <button className="icon-button">⟳</button>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src={img4} alt="Watch" />
          </div>
          <h3 className="product-title">Dail Lulpa</h3>
          <div className="product-rating">★★★★☆</div>
          <div className="product-price">
            <span className="current-price">$97.00</span>
          </div>
          <div className="product-actions">
            <button className="action-button">Add to Cart</button>
            <button className="icon-button">♡</button>
            <button className="icon-button">⟳</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
