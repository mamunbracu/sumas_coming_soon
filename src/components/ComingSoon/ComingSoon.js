import React, { Fragment } from "react";
import "./ComingSoon.css"
const ComingSoon = () => {
  return (
    <Fragment>
      {/* change the bootstrap container to your build in container */}
      <div className="coming-wrapper">
      <div className="container">
          <div className="row align-items-center">
           <div className="col-md-3 col-sm-12"></div>
           <div className="col-md-6 col-sm-12">
           <div className="align-items-center">
                  <img src="/assets/sumas_coming_soon_logo.png" alt="SUMASH TECK" className="coming-soon-logo" />
                  <div className="working mt-4">
                        <div className="working-with">
                          <h3>We are working </h3>
                          <h2>with our website</h2>
                          <span className="thanks my-5">Thanks for your patience </span>
                        </div>
                        <div className="connect-with-us">
                            <input type="text" placeholder="connect with us"/>
                            <button>
                              <img src="/assets/mail.svg" alt="" className="mr-2 email-logo mt-0"/>Mail to us</button>
                        </div>
                        <div className="social-links">
                            <span>Follow Us On :</span>
                            <a href="/" target="_blank"><img src="/assets/linkedIn.png" alt=""/></a>
                            <a href="/" target="_blank"><img src="/assets/twitter.png" alt=""/></a>
                            <a href="/" target="_blank"><img src="/assets/fb.png" alt=""/></a>
                            <a href="/" target="_blank"><img src="/assets/insta.png" alt=""/></a>
                            
                        </div>
                  </div>
              </div>
           </div>
           <div className="col-md-3 col-sm-12"></div>
          </div>
      </div>
      </div>
    </Fragment>
  );
};

export default ComingSoon;
