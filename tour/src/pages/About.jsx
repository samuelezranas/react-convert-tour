import React from 'react'
import BreadCrumps from '../components/BreadCrumps'

function About() {
  return (
    <div>
        <BreadCrumps  page="About us"  title="About Company"  />

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
                <div class="title-main text-center mx-auto mb-5" 
                    style={{ maxWidth: "600px" }} >
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
                <div class="title-main text-center mx-auto mb-md-5 mb-4" 
                    style={{ maxWidth: "600px" }}>
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
                        <div class="title-main mb-4" 
                            style={{ maxWidth: "600px" }}>
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
                <div class="title-main text-center mx-auto mb-5" 
                    style={{ maxWidth: "600px" }}>
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
    </div>
  )
}

export default About