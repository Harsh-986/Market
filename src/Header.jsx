import img1 from "./assets/theme_logo.png"
import img2 from "./assets/icon_search.png"
import img3 from "./assets/icon_minicart.png"


function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-left">
        <select className="Header-option">
            <option>
                    English
            </option>
            <option>
                    Arabic
            </option>
        </select>
        <select className="Header-option">
            <option>
                <span>US Dollar</span>
            </option>
            <option>
                <span>Euros</span>
            </option>
            <option>
                <span>Pounds</span>
            </option>
        </select>
        
      </div>
      <div className="top-header-right">
        <span className="dropdown">My Account ▼</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <TopHeader />
      <div className="header">
        <div className="logo">
          <img src={img1} alt="Logo" />
        </div>
        <div className="search-bar">
          <select>
            <option>All Categories</option>
          </select>
          <input type="text" placeholder="Search" />
          <button>
            <img src={img2} alt="Search" />
          </button>
        </div>
        <div className="cart">
          <div className="cart-icon">
            <img src={img3} alt="Cart" />
          </div>
          <div className="cart-text">
            MY CART<br />
            <span>2 item(s) - $1,262.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
