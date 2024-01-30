import React from "react";
import "./Footer.css";
import Button from 'react-bootstrap/Button';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container-top">
        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#home">About Us</a>
            </li>
            <li>
              <a href="#about">Our works</a>
            </li>
            <li>
              <a href="#services">Hire with Us</a>
            </li>
            <li>
              <a href="#portfolio">Clients</a>
            </li>
            <li>
              <a href="#contact">Become a Partner</a>
            </li>
            <li>
              <a href="#contact">Support</a>
            </li>
            <li>
              <a href="#contact">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Career</h5>
          <ul>
            <li>
              <a href="#home">Jobs</a>
            </li>
            <li>
              <a href="#about">Internship</a>
            </li>
            <li>
              <a href="#services">Train & Hire</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Resourses</h5>
          <ul>
            <li>
              <a href="#home">Case Studies</a>
            </li>
            <li>
              <a href="#about">Blogs</a>
            </li>
            <li>
              <a href="#services">Customer Onboarding</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Google Partner</h5>
          <ul>
            <li>
              {" "}
              <img
                src="https://www.nextwebi.com/assets/img/google-partner.png"
                alt=""
                width="120px"
              />{" "}
            </li>
            <li>
              {" "}
              <img
                src="https://www.nextwebi.com/assets/img/new/gdpr.webp"
                alt=""
                width="100px"
              />{" "}
            </li>
            <Button variant="outline-primary">Pay Online</Button>
            {/* <li><a href="#services">Services</a></li> */}
          </ul>
        </div>
      </div>
      <div className="footer-container">
        <h5>Core Services</h5>
        <ul>
          <a href="#home">Web Application Development </a>|
          <a href="#services"> UI/UX Design</a>|
          <a href="#services"> Website Development</a>|
          <a href="#services"> Digital Transformation</a>|
          <a href="#services"> Resource Outsourcing</a>|
          <a href="#services"> Maintenance & Suppor</a>|
          <a href="#services"> SharePoint Customizatio</a>|
          <a href="#services"> Corporate Video Productio</a>|
          <a href="#services"> RFID Solution</a>|
          <a href="#services"> Branding & Strategy</a>|
          <a href="#services"> Security Solutions</a>|
          <a href="#services"> Mobile Application Development</a>|
          <a href="#services"> Testing</a>|
          <a href="#services"> Offshore Software Development</a>
        </ul>
      </div>
      <div className="footer-container">
        <h5>Products by Industries</h5>
        <ul>
          <a href="#services"> RFID Solution</a>|
          <a href="#services"> Travel Commerce</a>|
          <a href="#services"> Test Series</a>|
          <a href="#services"> Job Portal</a>|
          <a href="#services"> Online Food Ordering</a>|
          <a href="#services"> Room Booking</a>
        </ul>
      </div>
      <div className="footer-container">
        <h5>Platform</h5>
        <ul>
          <a href="#services"> SharePoint</a>|
          <a href="#services"> Office 365</a>|<a href="#services"> Azure</a>|
          <a href="#services"> AWS</a>|<a href="#services"> Shopify</a>|
          <a href="#services"> Google Cloud</a>|<a href="#services"> Amadeus</a>
        </ul>
        <h5>Technologies</h5>
        <ul>
          <a href="#services"> Microsoft .Net</a>|
          <a href="#services"> Front End & UI Technologies</a>|
          <a href="#services"> .Net Core</a>|<a href="#services"> React</a>|
          <a href="#services"> Angular</a>|<a href="#services"> Android</a>|
          <a href="#services"> Java</a>|
          <a href="#services"> Cloud Technologies</a>|
          <a href="#services"> PHP</a>|<a href="#services"> API's</a>|
          <a href="#services"> SQL</a>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; 2024 Nextwebi. All rights reserved</p>
        </div>
        <div className="policy">
          <a href="#services"> Privacy Policy</a>|
          <a href="#services"> Terms & Conditions</a>|
          <a href="#services"> Refund & Cancellation Policy</a>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com" className="icon">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com" className="icon">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com" className="icon">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com" className="icon">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com" className="icon">
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
