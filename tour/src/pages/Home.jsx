import React from 'react'

function Home() {
  return (
    <div>

        {/* banner section */}
        <div className="slideshow">
            <div className="holder">
                <div className="slide slide-1">
                    <span className="container">
                        <span className="banner-content">
                            <h3>Travel & Adventures </h3>
                            <p>Discover amzaing places at exclusive deals.</p>
                            <a className="btn btn-style mt-sm-5 mt-4" href="/about">Explore More</a>
                        </span>
                    </span>
                </div>
                <div className="slide slide-2">
                    <span className="container">
                        <span className="banner-content">
                            <h3 className="mb-2">Your Journey Begins</h3>
                            <p>Take advantage of this amazing exclusive offers.</p>
                            <a className="btn btn-style mt-sm-5 mt-4" href="/about">Explore More</a>
                        </span>
                    </span>
                </div>
                <div className="slide slide-3">
                    <span className="container">
                        <span className="banner-content">
                            <h3>Love and Travel</h3>
                            <p>Discover amzaing places at exclusive deals.</p>
                            <a className="btn btn-style mt-sm-5 mt-4" href="/about">Explore More</a>
                        </span>
                    </span>
                </div>
                <div className="slide slide-4">
                    <span className="container">
                        <span className="banner-content">
                            <h3>Live your Adventure</h3>
                            <p>Take advantage of this amazing exclusive offers.</p>
                            <a className="btn btn-style mt-sm-5 mt-4" href="/about">Explore More</a>
                        </span>
                    </span>
                </div>
            </div>
            <div className="steps"></div>
            <a href="#" className="prev"><i className="fas fa-arrow-left"></i></a>
            <a href="#" className="next"><i className="fas fa-arrow-right"></i></a>
        </div>
        {/* //banner section */}

        {/* booking form section */}
        <section className="w3l-form-main py-5" id="book">
            <div className="container py-lg-5 py-md-4 py-2">
                <form action="#" method="post" className="form-styles">
                    <div className="">
                        <label for="inputtextnumber" 
                            className="form-label">Date from:</label>
                        <input type="date" 
                            name="date" 
                            id="dateofbirth" 
                            required="" />
                    </div>
                    <div className="">
                        <label for="inputtextnumber" className="form-label">Destinations:</label>
                        <span className="input-group-btn">
                            <select className="btn btn-default" name="ext" required>
                                <option selected="">Select Location</option>
                                <option>Australia</option>
                                <option>London</option>
                                <option>India</option>
                                <option>Bangladesh</option>
                                <option>Saudi Arabia</option>
                                <option>America</option>
                                <option>Srilanka</option>
                            </select>
                        </span>
                    </div>
                    <div className="">
                        <label for="inputtextnumber" className="form-label">Activity:</label>
                        <span className="input-group-btn">
                            <select className="btn btn-default" name="ext" required>
                                <option selected="">Select Any</option>
                                <option>Adventure</option>
                                <option>Beache</option>
                                <option>City Tours</option>
                                <option>Cruises</option>
                                <option>Discovery</option>
                                <option>Historical</option>
                                <option>Relaxation Tours</option>
                            </select>
                        </span>
                    </div>
                    <div className="">
                        <label for="inputtextnumber" className="form-label">Guests:</label>
                        <span className="input-group-btn">
                            <select className="btn btn-default" name="ext" required>
                                <option selected="">0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </span>
                    </div>
                    <button className="btn btn-style" type="submit">Find Tour</button>
                </form>
            </div>
        </section>
        {/* //booking form section */}

        {/* about section */}
        <section className="w3l-aboutblock py-lg-5 py-4" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="assets/images/about.jpg" 
                            alt="" 
                            className="img-fluid radius-image" />
                    </div>
                    <div className="col-lg-6 ps-xl-5 ps-lg-4 mt-lg-0 mt-5">
                        <div className="title-main">
                            <p>About Us</p>
                            <h3 className="title-style">Plan Your Trip with Tours</h3>
                        </div>
                        <p className="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</p>
                        <ul className="mt-4 list-style-lis">
                            <li><i className="fas fa-check-circle"></i>2000+ Our Worldwide Guide</li>
                            <li className="mt-2"><i className="fas fa-check-circle"></i>100% Trusted Tour Agency</li>
                            <li className="mt-2"><i className="fas fa-check-circle"></i>24+ Years of Experience</li>
                            <li className="mt-2"><i className="fas fa-check-circle"></i>100% Travelers are Happy</li>
                        </ul>
                        <a href="contact.html" className="btn btn-style mt-5">Booking Now</a>
                    </div>
                </div>
            </div>
        </section>
        {/* //about section */}

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
                                        className="img-fluid scale-image" alt=""/ >    
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

        {/* stats section */}
        <section className="w3_stats py-5" id="stats">
            <div className="container py-lg-5 py-md-4 py-2">
                <div 
                    className="title-main text-center mx-auto mb-5" 
                    style={{ maxWidth: "600px" }} >
                        <p>Statistics</p>
                        <h3 className="title-style text-white">We have over 10 years Experience</h3>
                </div>
                <div className="w3-stats text-center py-lg-4">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="counter">
                                <i className="fas fa-route"></i>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="timer" data-to="200" data-speed="1500"></div>
                                    <span className="stats-plus">+</span>
                                </div>
                                <p className="count-text">Total Destinations</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter">
                                <i className="fas fa-smile"></i>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="timer" data-to="100" data-speed="1500"></div>
                                    <span className="stats-plus">+</span>
                                </div>
                                <p className="count-text">Happy People</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-md-0 mt-4">
                            <div className="counter">
                                <i className="fas fa-medal"></i>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="timer" data-to="30" data-speed="1500"></div>
                                    <span className="stats-plus">+</span>
                                </div>
                                <p className="count-text">Awards Won</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-md-0 mt-4">
                            <div className="counter">
                                <i className="fas fa-umbrella-beach"></i>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="timer" data-to="130" data-speed="1500"></div>
                                    <span className="stats-plus">+</span>
                                </div>
                                <p className="count-text">Stunning Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //stats section */}

        {/* services section */}
        <section className="w3l-grids-block py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <div 
                    className="title-main text-center mx-auto mb-md-5 mb-4" 
                    style={{ maxWidth: "600px" }} >
                        <p>Our Services</p>
                        <h3 className="title-style">Our Amazing Services for your Travel</h3>
                </div>
                <div className="row text-center justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="bottom-block">
                            <a href="tours.html" className="d-block">
                                <i className="fas fa-dragon"></i>
                                <h3 className="my-3">Wildlife Tours</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora
                                    rerum perspiciatis?</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
                        <div className="bottom-block">
                            <a href="tours.html" className="d-block">
                                <i className="fas fa-plane-departure"></i>
                                <h3 className="my-3">Adventure Tours</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora
                                    rerum perspiciatis?</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
                        <div className="bottom-block">
                            <a href="tours.html" className="d-block">
                                <i className="fab fa-discourse"></i>
                                <h3 className="my-3">Trip Planing</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora
                                    rerum perspiciatis?</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //services section */}

        {/* why section */}
        <section className="w3l-whyblock pb-5 pt-2">
            <div className="container pb-lg-5 pb-md-4 pb-2">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="assets/images/about2.jpg" 
                            alt="" 
                            className="img-fluid radius-image" />
                    </div>
                    <div className="col-lg-6 ps-xl-5 ps-lg-4 mt-lg-0 mt-5">
                        <div 
                            className="title-main mb-4" 
                            style={{ maxWidth: "600px" }} >
                                <p>Our Features</p>
                                <h3 className="title-style">Why Choose Tours!</h3>
                        </div>
                        <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</p>
                        <div className="two-grids mt-5">
                            <div className="grids_info">
                                <i className="fas fa-certificate"></i>
                                <div className="detail">
                                    <h4>Professional and Certified</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit.</p>
                                </div>
                            </div>
                            <div className="grids_info mt-xl-5 mt-4">
                                <i className="fas fa-money-bill-wave"></i>
                                <div className="detail">
                                    <h4>Get Instant Tour Bookings</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //why section */}

        {/* blog section */}
        <div className="w3l-blog-content py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <div 
                    className="title-main text-center mx-auto mb-md-5 mb-4" 
                    style={{ maxWidth: "600px" }} >
                        <p>Our Blog</p>
                        <h3 className="title-style">Learn more from our latest Blog Posts</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-grid-1">
                            <div className="card-header p-0 position-relative">
                                <a href="#blog" className="zoom d-block">
                                    <img className="card-img-bottom d-block" 
                                        src="assets/images/blog1.jpg" 
                                        alt="Card image cap" />
                                </a>
                                <div className="course-price-badge">Trips</div>
                            </div>
                            <div className="card-body course-details">
                                <div className="course-meta mb-3">
                                    <div className="meta-item course-students">
                                        <a href="#author"><span className="fas fa-user"></span>
                                            <span className="meta-value"></span>John</a>
                                    </div>
                                    <div className="meta-item course-lesson">
                                        <span className="fa fa-heart"></span>
                                        <span className="meta-value"> 23 </span>
                                    </div>
                                    <div className="meta-item course-students">
                                        <span className="fa fa-calendar"></span>
                                        <span className="meta-value">Dec 06, 2021</span>
                                    </div>
                                </div>
                                <a href="#blog" className="course-desc">Travel the Most Beautiful Places in the
                                    World</a>
                                <p className="mt-2">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                                    ipsam autem.</p>
                                <a href="#blog" className="btn btn-style mt-4">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <div className="blog-grid-1">
                            <div className="card-header p-0 position-relative">
                                <a href="#blog" className="zoom d-block">
                                    <img className="card-img-bottom d-block" 
                                        src="assets/images/blog2.jpg" 
                                        alt="Card image cap" />
                                </a>
                                <div className="course-price-badge">Travels</div>
                            </div>
                            <div className="card-body course-details">
                                <div className="course-meta mb-3">
                                    <div className="meta-item course-students">
                                        <a href="#author"><span className="fas fa-user"></span>
                                            <span className="meta-value"></span>Anton</a>
                                    </div>
                                    <div className="meta-item course-lesson">
                                        <span className="fa fa-heart"></span>
                                        <span className="meta-value"> 24 </span>
                                    </div>
                                    <div className="meta-item course-students">
                                        <span className="fa fa-calendar"></span>
                                        <span className="meta-value">Dec 07, 2021</span>
                                    </div>
                                </div>
                                <a href="#blog" className="course-desc">A Place where Start New Life with Peace</a>
                                <p className="mt-2">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                                    ipsam autem.</p>
                                <a href="#blog" className="btn btn-style mt-4">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                        <div className="blog-grid-1">
                            <div className="card-header p-0 position-relative">
                                <a href="#blog" className="zoom d-block">
                                    <img className="card-img-bottom d-block" 
                                        src="assets/images/blog3.jpg" 
                                        alt="Card image cap" />
                                </a>
                                <div className="course-price-badge">Journey</div>
                            </div>
                            <div className="card-body course-details">
                                <div className="course-meta mb-3">
                                    <div className="meta-item course-students">
                                        <a href="#author"><span className="fas fa-user"></span>
                                            <span className="meta-value"></span>Miche</a>
                                    </div>
                                    <div className="meta-item course-lesson">
                                        <span className="fa fa-heart"></span>
                                        <span className="meta-value"> 22 </span>
                                    </div>
                                    <div className="meta-item course-students">
                                        <span className="fa fa-calendar"></span>
                                        <span className="meta-value">Dec 08, 2021</span>
                                    </div>
                                </div>
                                <a href="#blog" className="course-desc">Top 10 Destinations & Adventure Trips</a>
                                <p className="mt-2">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                                    ipsam autem.</p>
                                <a href="#blog" className="btn btn-style mt-4">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* //blog section */}

    </div>
  )
}

export default Home