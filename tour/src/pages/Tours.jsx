import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function Tours() {
  return (
    <div>
        <BreadCrumps page="Our Tour" title="All of Our Tour Packages" />

        {/* tours slider section */}
        <section className="w3l-index5 pb-5 pt-4">
            <div className="container-fluid py-lg-5 py-md-4 py-2">
                <div 
                    className="title-main text-center mx-auto mb-md-5 mb-4" 
                    style={{ maxWidth: "600px" }} >
                        <p>Featured tours</p>
                        <h3 className="title-style">Most Popular Tours</h3>
                </div>
                <div className="inner-sec-w3layouts pb-4">
                    <div className="owl-three owl-carousel owl-theme">
                        <div className="item">
                            <div className="content-left-sec">
                                <a className="blog-link d-block zoom-image" href="tours.html">
                                    <img src="assets/images/s1.jpg"
                                        className="img-fluid scale-image" 
                                        alt="" /></a>
                                <div className="blog-info">
                                    <ul className="rating-list mb-2">
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                        <li className="ms-1">4.07</li>
                                    </ul>
                                    <a href="tours.html" className="to-title">Discovery Best Tours</a>
                                    <p className="mt-1"><i className="fas fa-map-marker-alt me-1"></i>Central Park West NY, USA</p>
                                    <div className="to-price mt-2">
                                        <label>From</label> <span>$39.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <p><i className="far fa-clock me-1"></i>10 Days</p>
                                        <a href="tours.html" className="btn btn-style btn-style-primary">Explore<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content-left-sec">
                                <a className="blog-link d-block zoom-image" href="tours.html">
                                    <img src="assets/images/s2.jpg"
                                        className="img-fluid scale-image" 
                                        alt="" />
                                </a>
                                <div className="blog-info">
                                    <ul className="rating-list mb-2">
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                        <li className="ms-1">4.05</li>
                                    </ul>
                                    <a href="tours.html" className="to-title">Dubai – Stunning Places</a>
                                    <p className="mt-1"><i className="fas fa-map-marker-alt me-1"></i>5th Avenue, London</p>
                                    <div className="to-price mt-2">
                                        <label>From</label> <span>$69.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <p><i className="far fa-clock me-1"></i>15 Days</p>
                                        <a href="tours.html" className="btn btn-style btn-style-primary">Explore<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content-left-sec">
                                <a className="blog-link d-block zoom-image" href="tours.html">
                                    <img src="assets/images/s3.jpg"
                                        className="img-fluid scale-image" 
                                        alt="" />
                                </a>
                                <div className="blog-info">
                                    <ul className="rating-list mb-2">
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                        <li className="ms-1">4.07</li>
                                    </ul>
                                    <a href="tours.html" className="to-title">Enquiry Form Only – Italy</a>
                                    <p className="mt-1"><i className="fas fa-map-marker-alt me-1"></i>Henley Street, Italy</p>
                                    <div className="to-price mt-2">
                                        <label>From</label> <span>$39.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <p><i className="far fa-clock me-1"></i>6 Days</p>
                                        <a href="tours.html" className="btn btn-style btn-style-primary">Explore<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content-left-sec">
                                <a className="blog-link d-block zoom-image" href="tours.html">
                                    <img src="assets/images/s4.jpg"
                                        className="img-fluid scale-image" 
                                        alt="" />
                                </a>
                                <div className="blog-info">
                                    <ul className="rating-list mb-2">
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                        <li className="ms-1">4.08</li>
                                    </ul>
                                    <a href="tours.html" className="to-title">Switzerland – best Zurich </a>
                                    <p className="mt-1"><i className="fas fa-map-marker-alt me-1"></i>Zermatt, USA</p>
                                    <div className="to-price mt-2">
                                        <label>From</label> <span>$49.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <p><i className="far fa-clock me-1"></i>7 Days</p>
                                        <a href="tours.html" className="btn btn-style btn-style-primary">Explore<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content-left-sec">
                                <a className="blog-link d-block zoom-image" href="tours.html">
                                    <img src="assets/images/s6.jpg"
                                        className="img-fluid scale-image" 
                                        alt="" />
                                </a>
                                <div className="blog-info">
                                    <ul className="rating-list mb-2">
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                        <li className="ms-1">4.09</li>
                                    </ul>
                                    <a href="tours.html" className="to-title">Paris – Eiffel Tower</a>
                                    <p className="mt-1"><i className="fas fa-map-marker-alt me-1"></i>Northern central France, Paris
                                    </p>
                                    <div className="to-price mt-2">
                                        <label>From</label> <span>$69.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <p><i className="far fa-clock me-1"></i>15 Days</p>
                                        <a href="tours.html" className="btn btn-style btn-style-primary">Explore<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="content-left-sec">
                                <a className="blog-link d-block zoom-image" href="tours.html">
                                    <img src="assets/images/s5.jpg"
                                        className="img-fluid scale-image" 
                                        alt="" />
                                </a>
                                <div className="blog-info">
                                    <ul className="rating-list mb-2">
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                        <li className="ms-1">4.06</li>
                                    </ul>
                                    <a href="tours.html" className="to-title">America – Lake Tahoe</a>
                                    <p className="mt-1"><i className="fas fa-map-marker-alt me-1"></i>Figueroa Mountain Road, USA
                                    </p>
                                    <div className="to-price mt-2">
                                        <label>From</label> <span>$59.00</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <p><i className="far fa-clock me-1"></i>12 Days</p>
                                        <a href="tours.html" className="btn btn-style btn-style-primary">Explore<i
                                                className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //tours slider section */}

        {/* places section */}
        <div className="w3l-placesblock2 py-5" id="destinations">
            <div className="container py-lg-5 py-md-4 py-2">
                <div 
                    className="title-main text-center mx-auto mb-md-5 mb-4" 
                    style={{ maxWidth: "600px" }} >
                        <p>Destinations</p>
                        <h3 className="title-style">Go Awesome Places</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="grids5-info">
                            <a href="#destination" className="place-image d-block zoom"><img src="assets/images/s1.jpg" alt=""
                                    className="img-fluid radius-image" />
                                <div className="image-overlay">
                                    <h4>Paris</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                                </div>
                                <div className="iconic-plus">
                                    <p>3 tours</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4">
                        <div className="grids5-info">
                            <a href="#destination" className="place-image d-block zoom"><img src="assets/images/s2.jpg" alt=""
                                    className="img-fluid radius-image" />
                                <div className="image-overlay">
                                    <h4>Singapore</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                                </div>
                                <div className="iconic-plus">
                                    <p>4 tours</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4">
                        <div className="grids5-info">
                            <a href="#destination" className="place-image d-block zoom"><img src="assets/images/s3.jpg" alt=""
                                    className="img-fluid radius-image" />
                                <div className="image-overlay">
                                    <h4>France</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                                </div>
                                <div className="iconic-plus">
                                    <p>5 tours</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-4">
                        <div className="grids5-info">
                            <a href="#destination" className="place-image d-block zoom"><img src="assets/images/blog3.jpg"
                                    alt="" className="img-fluid radius-image" />
                                <div className="image-overlay">
                                    <h4>Italy</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                                </div>
                                <div className="iconic-plus">
                                    <p>6 tours</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-4">
                        <div className="grids5-info">
                            <a href="#destination" className="place-image d-block zoom"><img src="assets/images/blog2.jpg"
                                    alt="" className="img-fluid radius-image" />
                                <div className="image-overlay">
                                    <h4>USA</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                                </div>
                                <div className="iconic-plus">
                                    <p>2 tours</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-4">
                        <div className="grids5-info">
                            <a href="#destination" className="place-image d-block zoom"><img src="assets/images/blog1.jpg"
                                    alt="" className="img-fluid radius-image" />
                                <div className="image-overlay">
                                    <h4>London</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.</p>
                                </div>
                                <div className="iconic-plus">
                                    <p>8 tours</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* //places section */}
    </div>
  )
}

export default Tours