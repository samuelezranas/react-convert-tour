import React from 'react'

function PromoBanner() {
  return (
    <div>
        {/* promocode section */}
        <section className="w3l-promocode py-5">
            <div className="container ppy-lg-5 py-md-4 py-2">
                <div className="row aap-4-section align-items-center">
                    <div className="col-lg-6 col-8 m-auto app4-right-image pe-md-5 text-center">
                        <img src="assets/images/img.jpg" className="img-fluid" alt="App Device" />
                    </div>
                    <div className="col-lg-6 app4-left-text ps-lg-0 mb-lg-0 mb-5">
                        <h6>For 30% Discount</h6>
                        <h4>Get Our Promocode</h4>
                        <p className="mb-4"> Uspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus
                            sapien. Proin a
                            diam et dui fermentum molestie vel id neque. </p>
                        <div className="app-4-connection">
                            <div className="newsletter">
                                <label>Never Miss a Deal !</label>
                                <form action="#" methos="GET" className="d-flex wrap-align">
                                    <input type="email" placeholder="Enter your email id" required="required" />
                                    <button type="submit" className="button-style">Get Promocode</button>
                                </form>
                            </div>
                            <p className="mobile-text-app mt-4 pt-2">(Or) To Get Our Mobile Apps</p>
                            <div className="app-4-icon">
                                <ul>
                                    <li><a href="#url" title="Apple" className="app-icon apple-vv"><span
                                                className="fab fa-apple  icon-color" aria-hidden="true"></span></a></li>
                                    <li><a href="#url" title="Google play" className="app-icon play-vv"><span
                                                className="fab fa-google-play icon-color" aria-hidden="true"></span></a>
                                    </li>
                                    <li><a href="#url" title="Microsoft" className="app-icon windows-vv"><span
                                                className="fab fa-windows icon-color" aria-hidden="true"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* //promocode section */}
    </div>
  )
}

export default PromoBanner