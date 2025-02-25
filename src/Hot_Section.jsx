import img1 from "./assets/automotive-motocrycle.jpg"
import img2 from "./assets/bags-holiday-supplies-gifts.jpg"
import img3 from "./assets/electronics.jpg"
import img4 from "./assets/health-beauty.jpg"
import img5 from "./assets/jewelry-watches.jpg"
import img6 from "./assets/smartphone-tablets.jpg"
import img7 from "./assets/sports-outdoors.jpg"
import img8 from "./assets/toys-hobbies.jpg"


function Hot_Section() {
    return (
        <div class="categories">
            <h2 class="categories__title">HOT CATEGORIES</h2>
            <div class="categories__grid">
                <div class="category-card">
                    <img src={img1} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">AUTOMOTIVE & MOTORCYCLE</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>More Car Accessories</li>
                        <li>Car Alarms and Security</li>
                        <li>Car Audio & Speakers</li>
                        <li>Gadgets & Auto Parts</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img4} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">HEALTH & BEAUTY</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Salon & Spa Equipment</li>
                        <li>Fragrances</li>
                        <li>Shaving & Hair Removal..</li>
                        <li>Bath & Body</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img2} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">HOLIDAY SUPPLIES & GIFTS</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Gift & Lifestyle Gadgets..</li>
                        <li>Lighter & Cigar Supplies..</li>
                        <li>Gift for Woman</li>
                        <li>Gift for Man</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img8} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">TOYS & HOBBIES</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Helicopters & Parts</li>
                        <li>RC Cars & Parts</li>
                        <li>FPV System & Parts</li>
                        <li>Walkera</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img3} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">ELETRONICS</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Home Audio</li>
                        <li>Mp3 Players & Accessories..</li>
                        <li>Headphones, Headsets</li>
                        <li>Battereries & Chargers..</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img5} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">JEWELRY & WATCHES</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Men Watches</li>
                        <li>Wedding Rings</li>
                        <li>Earings</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img7} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">SPORTS & OUTDOORS</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Outdoor & Traveling</li>
                        <li>Camping & Hiking</li>
                        <li>Golf Supplies</li>
                        <li>Fishing</li>
                    </ul>
                </div> 
                <div class="category-card">
                    <img src={img6} alt="Automotive" class="category-card__image" />
                    <h3 class="category-card__title">SMARTPHONE & TABLETS</h3>
                    <a href="#" class="category-card__button">View More</a>
                    <ul class="category-card__list">
                        <li>Accessories for iPhone</li>
                        <li>Accessories for iPad</li>
                        <li>Accessories for Tablet PC</li>   
                    </ul>
                </div> 

            </div>
        </div>

    )
}

export default Hot_Section