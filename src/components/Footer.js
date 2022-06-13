import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-1 flex-between">
          <div>
            <img
              src={logo}
              width={150}
              height={50}
              alt="Logo"
              className="logo-img"
            />
          </div>
          <div className="address-link flex-between">
            <section className="address">
              <div className="contact">
                <h5>Contact</h5>
                <p>
                  4, Araromi Street, off Oduyemi Street, Anifowoshe Area, Ikeja,
                  Lagos, Nigeria.
                </p>
                <a
                  href="mailto:info@ican-ikejadistrictsociety.org"
                  style={{ color: "white", fontWeight: "bold", width: "70%" }}
                >
                  info@ican-ikejadistrictsociety.org
                </a>
              </div>
            </section>
            <section className="links">
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
            </section>
          </div>
        </div>
        <hr style={{ color: "#ffffff", borderTop: "1px solid white" }} />
        <p style={{ fontSize: "12px", fontWeight: "bold" }}>
          Copyrights &copy; 2022 Ikeja & District Society of ICAN (IDSICAN). All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
