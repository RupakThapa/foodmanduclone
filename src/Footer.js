import React from "react";
import "./Footer.css";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footerr1 container">
        <div className="footercol1">
          <p className="ft700 sectiontitlesmall">WE'RE FOODMANDU</p>
          <li>About Us</li>
          <li>Available Areas</li>
          <li>Delivery Charges</li>
          <li>Blog</li>
        </div>
        <div className="footercol2 ">
          <p className="ft700 sectiontitlesmall">GET HELP</p>
          <li>How to Order?</li>
          <li>FAQs</li>
          <li>Delivery Charges</li>
          <li>Contact Us</li>
        </div>
        <div className="footercol3 ">
          <p className="ft700 sectiontitlesmall">CALL US</p>
          <li>4444177, 4440979, 9802034008</li>
        </div>
        <div className="footercol4">
          <p className="ft700 sectiontitlesmall">DOWNLOAD APP</p>
          <div className="footerapp">
            <div>
              <img
                className="logosmall"
                src="https://i.imgur.com/aUes1pc.png"
              />
            </div>
            <div>
              <img
                className="logosmall"
                src="https://i.imgur.com/OUPW1PK.png"
              />
            </div>
          </div>
          <p className="ft700 sectiontitlesmall">CONNECT WITH US</p>
          <div className="footerapp">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
      <div className="footerr2 container">
        SERVICE HOUR 11:00 AM to 8:30 PM (NST)
      </div>
      <div className="footerr3 container">
        <p>Terms of Usage | Privacy Policy</p>{" "}
        <p>© 2020 Foodmandu Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
