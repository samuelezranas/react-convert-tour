import React from 'react'

function About() {
  return (
    <div>
        {/* header */}
        <header id="site-header" class="fixed-top">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html">
                        Tours
                    </a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="tours.html">Tours</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                        <form action="#search" method="GET" class="d-flex search-header ms-lg-2">
                            <input class="form-control" 
                                type="search" 
                                placeholder="Enter Keyword..." 
                                aria-label="Search"
                                required />
                            <button class="btn btn-style" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    {/* toggle switch for light and dark theme */}
                    <div class="cont-ser-position">
                        <nav class="navigation">
                            <div class="theme-switch-wrapper">
                                <label class="theme-switch" for="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="checkbox" />
                                    <div class="mode-container">
                                        <i class="gg-sun"></i>
                                        <i class="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                    {/* //toggle switch for light and dark theme */}
                </nav>
            </div>
        </header>
        {/* //header */}

        {/* inner banner */}
        <section class="inner-banner py-sm-5 py-4">
            <div class="w3l-breadcrumb pt-5 pb-4">
                <div class="container py-xl-5 py-lg-4">
                    <h4 class="inner-text-title font-weight-bold pt-5">About Us</h4>
                    <ul class="breadcrumbs-custom-path">
                        <li><a href="index.html">Home</a></li>
                        <li class="active"><i class="fas fa-angle-right mx-2"></i>About</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* //inner banner */}

        {/* about section */}
        <div class="w3l-about-content py-5">
            <div class="container py-lg-5 py-md-4 py-2">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img src="assets/images/about3.jpg" 
                            class="img-fluid radius-image" 
                            alt="" />
                    </div>
                    <div class="col-lg-6 ps-lg-5 mt-lg-0 mt-4">
                        <div class="title-main">
                            <p>About Us</p>
                            <h3 class="title-style">World Best Travel Agency</h3>
                        </div>
                        <p class="mt-4">Aptent taciti sociosqu ad litora
                            conubia nostra, per inceptos himenaeos. Aenean volutpat elementum ante, id eleifend eros
                            luctus sit.</p>
                        <p class="mt-3"> Aenean volutpat elementum ante, id eleifend eros
                            luctus sit amet. Eel tincidunt erat neque non ipsum. Ut sollicitudin pharetra enim.</p>
                        <a href="#about" class="btn btn-style mt-5">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* //about section */}

        {/* stats section */}
        <section class="w3_stats py-5" id="stats">
            <div class="container py-lg-5 py-md-4 py-2">
                <div class="title-main text-center mx-auto mb-5" style="max-width:600px;">
                    <p>Statistics</p>
                    <h3 class="title-style text-white">We have over 10 years Experience</h3>
                </div>
                <div class="w3-stats text-center py-lg-4">
                    <div class="row">
                        <div class="col-md-3 col-6">
                            <div class="counter">
                                <i class="fas fa-route"></i>
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="timer" data-to="200" data-speed="1500"></div>
                                    <span class="stats-plus">+</span>
                                </div>
                                <p class="count-text">Total Destinations</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="counter">
                                <i class="fas fa-smile"></i>
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="timer" data-to="100" data-speed="1500"></div>
                                    <span class="stats-plus">+</span>
                                </div>
                                <p class="count-text">Happy People</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 mt-md-0 mt-4">
                            <div class="counter">
                                <i class="fas fa-medal"></i>
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="timer" data-to="30" data-speed="1500"></div>
                                    <span class="stats-plus">+</span>
                                </div>
                                <p class="count-text">Awards Won</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 mt-md-0 mt-4">
                            <div class="counter">
                                <i class="fas fa-umbrella-beach"></i>
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="timer" data-to="130" data-speed="1500"></div>
                                    <span class="stats-plus">+</span>
                                </div>
                                <p class="count-text">Stunning Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //stats section */}

        {/* team section */}
        <section class="w3l-team-main py-5" id="team">
            <div class="container py-lg-5 py-md-4 py-2">
                <div class="title-main text-center mx-auto mb-md-5 mb-4" style="max-width:600px;">
                    <p>Our Team</p>
                    <h3 class="title-style">Meet our Tours Agents</h3>
                </div>
                <div class="row text-center">
                    <div class="col-lg-3 col-6">
                        <div class="team-member">
                            <div class="team-img">
                                <img src="assets/images/team1.jpg" 
                                    alt="" 
                                    class="radius-image" />
                            </div>
                            <a href="#url" class="team-title">Lern Victor</a>
                            <div class="socials">
                                <a href="#facebook">
                                    <span class="fab fa-facebook-f"></span>
                                </a>
                                <a href="#twitter">
                                    <span class="fab fa-twitter"></span>
                                </a>
                                <a href="#linkedin-in">
                                    <span class="fab fa-linkedin-in"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="team-member">
                            <div class="team-img">
                                <img src="assets/images/team2.jpg" 
                                    alt="" 
                                    class="radius-image" />
                            </div>
                            <a href="#url" class="team-title">Meyer Lson</a>
                            <div class="socials">
                                <a href="#facebook">
                                    <span class="fab fa-facebook-f"></span>
                                </a>
                                <a href="#twitter">
                                    <span class="fab fa-twitter"></span>
                                </a>
                                <a href="#linkedin-in">
                                    <span class="fab fa-linkedin-in"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mt-lg-0 mt-4">
                        <div class="team-member">
                            <div class="team-img">
                                <img src="assets/images/team3.jpg" 
                                    alt="" 
                                    class="radius-image" />
                            </div>
                            <a href="#url" class="team-title">Ali Meyer</a>
                            <div class="socials">
                                <a href="#facebook">
                                    <span class="fab fa-facebook-f"></span>
                                </a>
                                <a href="#twitter">
                                    <span class="fab fa-twitter"></span>
                                </a>
                                <a href="#linkedin-in">
                                    <span class="fab fa-linkedin-in"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mt-lg-0 mt-4">
                        <div class="team-member">
                            <div class="team-img">
                                <img src="assets/images/team4.jpg" 
                                    alt="" 
                                    class="radius-image" />
                            </div>
                            <a href="#url" class="team-title">Sam Mills</a>
                            <div class="socials">
                                <a href="#facebook">
                                    <span class="fab fa-facebook-f"></span>
                                </a>
                                <a href="#twitter">
                                    <span class="fab fa-twitter"></span>
                                </a>
                                <a href="#linkedin-in">
                                    <span class="fab fa-linkedin-in"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //team section */}

        {/* why section */}
        <section class="w3l-whyblock pb-5 pt-2">
            <div class="container pb-lg-5 pb-md-4 pb-2">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img src="assets/images/about2.jpg" 
                            alt="" 
                            class="img-fluid radius-image" />
                    </div>
                    <div class="col-lg-6 ps-xl-5 ps-lg-4 mt-lg-0 mt-5">
                        <div class="title-main mb-4" style="max-width:600px;">
                            <p>Our Features</p>
                            <h3 class="title-style">Why Choose Tours!</h3>
                        </div>
                        <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.</p>
                        <div class="two-grids mt-5">
                            <div class="grids_info">
                                <i class="fas fa-certificate"></i>
                                <div class="detail">
                                    <h4>Professional and Certified</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit.</p>
                                </div>
                            </div>
                            <div class="grids_info mt-xl-5 mt-4">
                                <i class="fas fa-money-bill-wave"></i>
                                <div class="detail">
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

        {/* testimonials section */}
        <section class="w3l-clients py-5 mb-5 mt-4" id="testimonials">
            <div class="container py-md-5 py-4">
                <div class="title-main text-center mx-auto mb-5" style="max-width:600px;">
                    <p class="mt-2">Testimonials</p>
                    <h3 class="title-style">Happy With Customers & Clients</h3>
                </div>
                <div id="owl-demo2" class="owl-carousel owl-theme mt-4 py-md-2 mb-md-4">
                    <div class="item">
                        <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <i class="fas fa-quote-left"></i> Pellen tesque libero ut justo
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere,tesque libero ut justo Semper.</p>
                            </div>
                            <div class="bottom-info mt-4">
                                <a class="comment-img" href="#url">
                                    <img src="assets/images/testi1.jpg"
                                        class="img-responsive" 
                                        alt="placeholder image" />
                                </a>
                                <div class="people-info align-self">
                                    <h3>Johnson william</h3>
                                    <p class="identity">Subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere,tesque libero ut justo Semper.</p>
                            </div>
                            <div class="bottom-info mt-4">
                                <a class="comment-img" href="#url">
                                    <img src="assets/images/testi2.jpg"
                                        class="img-responsive" 
                                        alt="placeholder image" />
                                </a>
                                <div class="people-info align-self">
                                    <h3>Alexander sakura</h3>
                                    <p class="identity">Subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <i class="fas fa-quote-left"></i> Pellen tesque libero ut justo
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere,tesque libero ut justo Semper.</p>
                            </div>
                            <div class="bottom-info mt-4">
                                <a class="comment-img" href="#url">
                                    <img src="assets/images/testi3.jpg"
                                        class="img-responsive" 
                                        alt="placeholder image" />
                                </a>
                                <div class="people-info align-self">
                                    <h3>John wilson</h3>
                                    <p class="identity">Subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere,tesque libero ut justo Semper.</p>
                            </div>
                            <div class="bottom-info mt-4">
                                <a class="comment-img" href="#url">
                                    <img src="assets/images/testi1.jpg"
                                        class="img-responsive" 
                                        alt="placeholder image" />
                                </a>
                                <div class="people-info align-self">
                                    <h3>Julia sakura</h3>
                                    <p class="identity">Subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <i class="fas fa-quote-left"></i> Pellen tesque libero ut justo
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere,tesque libero ut justo Semper.</p>
                            </div>
                            <div class="bottom-info mt-4">
                                <a class="comment-img" href="#url">
                                    <img src="assets/images/testi2.jpg"
                                        class="img-responsive" 
                                        alt="placeholder image" />
                                </a>
                                <div class="people-info align-self">
                                    <h3>John wilson</h3>
                                    <p class="identity">Subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-content">
                            <div class="testimonial">
                                <blockquote>
                                    <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere,tesque libero ut justo Semper.</p>
                            </div>
                            <div class="bottom-info mt-4">
                                <a class="comment-img" href="#url">
                                    <img src="assets/images/testi3.jpg"
                                        class="img-responsive" 
                                        alt="placeholder image" />
                                </a>
                                <div class="people-info align-self">
                                    <h3>Julia sakura</h3>
                                    <p class="identity">Subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //testimonials section */}

        {/* promocode section */}
        <section class="w3l-promocode py-5">
            <div class="container ppy-lg-5 py-md-4 py-2">
                <div class="row aap-4-section align-items-center">
                    <div class="col-lg-6 col-8 m-auto app4-right-image pe-md-5 text-center">
                        <img src="assets/images/img.jpg" class="img-fluid" alt="App Device" />
                    </div>
                    <div class="col-lg-6 app4-left-text ps-lg-0 mb-lg-0 mb-5">
                        <h6>For 30% Discount</h6>
                        <h4>Get Our Promocode</h4>
                        <p class="mb-4"> Uspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus
                            sapien. Proin a
                            diam et dui fermentum molestie vel id neque. </p>
                        <div class="app-4-connection">
                            <div class="newsletter">
                                <label>Never Miss a Deal !</label>
                                <form action="#" methos="GET" class="d-flex wrap-align">
                                    <input type="email" placeholder="Enter your email id" required="required" />
                                    <button type="submit" class="button-style">Get Promocode</button>
                                </form>
                            </div>
                            <p class="mobile-text-app mt-4 pt-2">(Or) To Get Our Mobile Apps</p>
                            <div class="app-4-icon">
                                <ul>
                                    <li><a href="#url" title="Apple" class="app-icon apple-vv"><span
                                                class="fab fa-apple  icon-color" aria-hidden="true"></span></a></li>
                                    <li><a href="#url" title="Google play" class="app-icon play-vv"><span
                                                class="fab fa-google-play icon-color" aria-hidden="true"></span></a>
                                    </li>
                                    <li><a href="#url" title="Microsoft" class="app-icon windows-vv"><span
                                                class="fab fa-windows icon-color" aria-hidden="true"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //promocode section */}

        {/* footer */}
        <footer class="w3l-footer-29-main py-5">
            <div class="container pt-lg-5 pt-sm-4 pt-2 pb-2">
                <div class="row footer-top-29">
                    <div class="col-lg-4 col-md-6 footer-list-29">
                        <h6 class="footer-title-29">Contact Info </h6>
                        <p class="mb-2 pe-xl-5">Address : Tours, 10001, 5th Avenue, #06 lane street, NY - 62617.
                        </p>
                        <p class="mb-2">Phone Number : <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p>
                        <p class="mb-2">Email : <a href="mailto:info@example.com">info@example.com</a></p>
                        <div class="mt-4">
                            <ul class="social">
                                <li><a href="#facebook"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li><a href="#linkedin"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li><a href="#twitter"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li><a href="#google"><i class="fab fa-google-plus-g"></i></a>
                                </li>
                                <li><a href="#github"><i class="fab fa-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-6 footer-list-29 mt-md-0 mt-4">
                        <ul>
                            <h6 class="footer-title-29">Quick Links</h6>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#workwithus">Work with us</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#rewards">Rewards</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-3 col-6 ps-lg-5 ps-lg-4 footer-list-29 mt-md-0 mt-4">
                        <ul>
                            <h6 class="footer-title-29">Explore</h6>
                            <li><a href="#blog">Blog Posts</a></li>
                            <li><a href="#privacy">Privacy policy</a></li>
                            <li><a href="#partners">Our Partners</a></li>
                            <li><a href="#license">License & uses</a></li>
                            <li><a href="#events">Events</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-8 footer-list-29 mt-lg-0 mt-4 ps-lg-5">
                        <h6 class="footer-title-29">Subscribe</h6>
                        <form action="#" class="subscribe" method="post">
                            <input type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                required="" />
                            <button class="btn btn-style mt-2">Subscribe</button>
                        </form>
                        <p class="mt-3">Subscribe to our mailing list and get updates to your email inbox.</p>
                    </div>
                </div>
                {/* copyright */}
                <p class="copy-footer-29 text-center mt-5 pt-lg-3">© 2021 Tours. All rights reserved. Design
                    by <a href="https://w3layouts.com/" target="_blank">W3Layouts</a></p>
            </div>
        </footer>
        {/* //footer */}
    </div>
  )
}

export default About