import post1 from './assets/blog5.jpg';
import img1 from './assets/9.jpg';
import img2 from './assets/18.jpg';
import img3 from './assets/m1.jpg';
import img4 from './assets/m2.jpg';
import img5 from './assets/captcha.jpg';

function Page1() {
    return (
        <div className="blog-container">
            {/* Sidebar */}
            <div className="blog-sidebar">
                <div className="blog-category">
                    <h2>Blog Category</h2>
                    <ul>
                        <li>Our Blog</li>
                        <li>Demo Category 2</li>
                        <li>Demo Category 3</li>
                        <li>Demo Category 4</li>
                        <li>Demo Category 5</li>
                    </ul>
                </div>
                <div className="latest-product">
                    <h2>Latest Product</h2>
                    {[
                        { img: img1, name: "Sunt Molup", price: "$100.00" },
                        { img: img2, name: "Et Spare", price: "$99.00" },
                        { img: img3, name: "Cisi Chicken", price: "$59.00" },
                        { img: img4, name: "Kevin Labor", price: "$245.00" },
                    ].map((product, index) => (
                        <div key={index} className="product-item">
                            <img src={product.img} alt={product.name} />
                            <div>
                                <h3>{product.name}</h3>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Blog Content */}
            <div className="unique-blog-main-content">
                <h1>KIRE TUMA DEMONSTRAVERUNT LECTOR</h1>
                <p className="blog-meta">
                    Post by: Admin | Created Date: Tue, Feb 16, 2016 | 0 Comments
                </p>
                <div className="blog-post-image-wrapper">
                    <img src={post1} alt="KIRE TUMA DEMONSTRAVERUNT LECTOR" className="blog-post-image-1" />
                </div>
                <p>
                    Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus.
                    Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean
                    molestie justo sed aliquam euismod. Maecenas laoreet bibendum laoreet. Morbi tempor massa sit amet
                    purus lobortis, non porta tellus dignissim.
                </p>
                <p>
                    Proin dictum justo a nisl pellentesque egestas. Nulla commodo euismod nisi ac bibendum. Mauris in
                    pellentesque tellus, in cursus magna. Sed volutpat dui bibendum mi molestie, at volutpat nunc
                    dictum. Fusce sagittis massa id eros scelerisque, eget accumsan magna lacinia. Nullam posuere neque
                    at neque dictum interdum.
                </p>
                <p>
                    Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean
                    molestie justo sed aliquam euismod. Maecenas laoreet bibendum laoreet. Morbi tempor massa sit amet
                    purus lobortis, non porta tellus dignissim. Proin dictum justo a nisl pellentesque egestas. Nulla
                    commodo euismod nisi ac bibendum.
                </p>

                <div className="comment-section">
                    <h2>Leave your comment</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Your Comment:</label>
                            <textarea id="comment" name="comment" rows="5" required></textarea>
                            <p className="note">Note: HTML is not translated!</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="captcha">Enter the code in the box below:</label>
                            <input type="text" id="captcha" name="captcha" required />
                            <div className="captcha-box">
                                <img src={img5}alt="Captcha" />
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default Page1;
