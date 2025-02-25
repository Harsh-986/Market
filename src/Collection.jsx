import img1 from "./assets/collections-1-1.png"
import img2 from "./assets/collections-2-1.png"
import img3 from "./assets/collections-3-1.png"
import img4 from "./assets/collections-4-1.png"
import img5 from "./assets/collections-5-1.png"
import img6 from "./assets/collections-6-1.png"



function Collection() {
    return (
        <div class="collections">
            <h2 class="collections__title">COLLECTIONS</h2>
            <div class="collections__grid">
                <div class="collection-item">
                    <img src={img1} alt="Furniture" class="collection-item__icon" />
                <h3 class="collection-item__title">FURNITURE</h3>
                </div>
                <div class="collection-item">
                    <img src={img2} alt="Gift Idea" class="collection-item__icon" />
                    <h3 class="collection-item__title">GIFT IDEA</h3>
                </div>
                <div class="collection-item">
                    <img src={img3} alt="Cool Gadgets" class="collection-item__icon" />
                    <h3 class="collection-item__title">COOL GADGETS</h3>
                </div>
                <div class="collection-item">
                    <img src={img4} alt="Outdoor Activities" class="collection-item__icon" />
                    <h3 class="collection-item__title">OUTDOOR ACTIVITIES</h3>
                </div>
                <div class="collection-item">
                    <img src={img5} alt="Accessories" class="collection-item__icon" />
                    <h3 class="collection-item__title">ACCESSORIES FOR</h3>
                </div>
                <div class="collection-item">
                    <img src={img6} alt="Women World" class="collection-item__icon" />
                    <h3 class="collection-item__title">WOMEN WORLD</h3>
                </div>
            </div>
        </div>

    )
}

export default Collection