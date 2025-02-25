
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Hot from './Hot_Section.jsx';
import Collection from './Collection.jsx';
import New from './New_Product.jsx';
import Adds from './Adds.jsx';
import Feature from './Feature.jsx';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Blog from './Blog.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';
import Contactus from './Contactus.jsx';
import Aboutus from './Aboutus.jsx';
import ProductPage from "./ProductPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Feature />
              <Adds />
              <New />
              <Collection />
              <Hot />
            </>
          } 
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/ProductPage" element={<ProductPage />} />


        {/* Add other routes here if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
