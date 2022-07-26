
import React from "react";

import './index.css';

const Footer = () => {
    return (
        <div class="footer-container">
            <div class="footer-section">
                <div class="container">

                    <div>
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-about-me-img.png" className="footer-image" alt="text" />
                    </div>
                    <div>
                        <h1 class="footer-head"> Rakesh </h1>
                        <p class="footer-text"> Frontend Developer </p>


                    </div>
                    <div>
                        <h1 class="footer-head"> Phone No.</h1>
                        <div>

                            <p class="footer-text pl-3"> 8019497475</p>
                        </div>
                    </div>
                    <div >
                        <h1 class="footer-head"> E-mail </h1>
                        <div>

                            <p class="footer-text"> rakesh97@gamil.com </p>
                        </div>
                    </div>
                    <div>
                        <h1 class="footer-head"> Address</h1>
                        <div>

                            <p class="footer-text"> 90-1/1 vullipalem,pothepalli(post),machilipatnam</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p class="footer-text "> Copyright &copy; 2022 by Rakesh. created with bootstrap</p>
                </div>

            </div></div>
    );
};

export default Footer;
