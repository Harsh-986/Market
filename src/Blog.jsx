import post1 from './assets/blog4.jpg';
import post2 from './assets/blog5.jpg';
import post3 from './assets/blog6.jpg';
import post4 from './assets/blog1.jpg';
import img1 from './assets/9.jpg';
import img2 from './assets/18.jpg';
import img3 from './assets/m1.jpg';
import img4 from './assets/m2.jpg';
import { Link } from "react-router-dom";

const blogPosts = [
    { id: 1, img: post1, title: "Kire Tuma Demonstraverunt Lector", date: "Tue, Feb 16, 2016", desc: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b", link: "/page1" },
    { id: 2, img: post2, title: "Ac Tincidun Suspendisse Malesuada", date: "Tue, Feb 16, 2016", desc: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b", link: "/page2" },
    { id: 3, img: post3, title: "Nire Tmas Kite Traverunt Lector Legere Legunt", date: "Tue, Feb 16, 2016", desc: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b", link: "/page3" },
    { id: 4, img: post4, title: "Another Unique Title", date: "Tue, Feb 16, 2016", desc: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet b", link: "/page4" },
];


function Blog(){
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

            {/* Main Content */}
            <div className="blog-main-content">
                <h2>Our Blog</h2>
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <div className="blog-post-image-wrapper">
                            <img src={post.img} alt={post.title} className="blog-post-image" />
                        </div>
                        <div className="blog-post-content">
                            <Link to={post.link}>
                                <h3 className="blog-post-title">{post.title}</h3>
                            </Link>
                            <p className="blog-post-desc">{post.desc}</p>
                            <p className="blog-post-meta">{post.date} | 0 Comments | Post by Admin</p>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Blog;
