import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="col-lg-4 contact">
            <h5>Contact</h5>
            <p>
              4, Araromi Street, <br />
              off Oduyemi Street, <br />
              Anifowoshe Area, Ikeja, <br />
              Lagos, Nigeria.
            </p>
            <a href="mailto:info@ican-ikejadistrictsociety.org">
              info@ican-ikejadistrictsociety.org
            </a>
          </div>
          <div className="col-lg-4 links">
            <h5>Links</h5>
            <ul className="links-list">
              <li>Home</li>
              <li>About us</li>
              <li>Executives</li>
              <li>Past Chairmen</li>
              <li>Gallery</li>
              <li>Accouting Firms</li>
              <li>Members</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="copyrights">
          Copyrights &copy; 2022 Ikeja & District Society of ICAN (IDSICAN). All
          Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
