import img1 from "./assets/banner2-1.png"
import img2 from "./assets/banner2-2.png"
import img3 from "./assets/banner2-3.png"
import img4 from "./assets/banner2-4.png"


function Adds() {
    return (
       <div className="module">
            <div className="modcontent clearfix">
                <div className="banner-wraps">
                    <div className="m-banner row">
                        <div className="banner htmlconten1 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="banners">
                                <div>
                                <a href="#">
                                    <img src={img1} alt="banner1" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="htmlconten2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="module banners">
                            <div>
                                <a href="#">
                                    <img src={img2} alt="banner2" />
                                </a>
                            </div>
                        </div>
                        <div className="banners">
                            <div>
                                <a href="#">
                                    <img src={img3} alt="banner3" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="banner htmlconten3 hidden-sm col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="banners">
                            <div>
                                <a href="#">
                                    <img src={img4} alt="banner4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};



export default Adds