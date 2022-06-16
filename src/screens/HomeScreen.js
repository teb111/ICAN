import React from "react";
import { Button } from "react-bootstrap";
import banner from "../images/banner.png";
import man from "../images/image.png";
import arik from "../images/arik.png";
import adroit from "../images/adroit.png";
import lagosAirport from "../images/lagos-airport.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";

const HomeScreen = () => {
  return (
    <>
      <div className="hero">
        <div className="b1">
          <div className="hero-caption">
            <h3>
              We are IDSICAN,
              <span>The PaceSetter District</span>
            </h3>
            <p>
              LoremNulla deserunt non sit minim.Consequat consectetur mollit et
              sint non sunt nisi duis id enim. Veniam consectetur fugiat laborum
              cillum fugiat aute.
            </p>
            <Button className="hero-btn">Become a Member</Button>
          </div>
        </div>
        <div className="b1">
          <img src={banner} alt="hero img" />
        </div>
      </div>

      <section className="meet-the-chairman">
        <div className="row">
          <div className="col-12">
            <h2>Meet the chairman</h2>
          </div>
          <div className="col-lg-3">
            <div className="chairman-img">
              <img src={man} alt="chairman img" />
            </div>
          </div>
          <div className="col-lg-9">
            <p>
              Cillum aliqua cupidatat et occaecat commodo quis in labore. Ex do
              nostrud ad id aliqua do nostrud. Irure amet sit irure velit
              laborum. Et ullamco do deserunt et nisi nisi ut ipsum deserunt ex
              exercitation. Cillum aliqua cupidatat et occaecat commodo quis in
              labore. Ex do nostrud ad id aliqua do nostrud. Irure amet sit
              irure velit laborum. Et ullamco do deserunt et nisi nisi ut ipsum
              deserunt ex exercitation. Cillum aliqua cupidatat et occaecat
              commodo quis in labore. Ex do nostrud ad id aliqua do nostrud.
              Irure amet sit irure velit laborum. Et ullamco do deserunt et nisi
              nisi ut ipsum deserunt ex exercitation. Cillum aliqua cupidatat et
              occaecat commodo quis in labore. Ex do nostrud ad id aliqua do
              nostrud. Irure amet sit irure velit laborum. Et ullamco do
              deserunt et nisi nisi ut ipsum deserunt ex exercitation. Cillum
              aliqua cupidatat et occaecat commodo quis in labore. Ex do nostrud
              ad id aliqua do nostrud. Irure amet sit irure velit laborum. Et
              ullamco do deserunt et nisi nisi ut ipsum deserunt ex
              exercitation. Cillum aliqua cupidatat et occaecat commodo quis in
              labore. Ex do nostrud ad id aliqua do nostrud. Irure amet sit
              irure velit laborum. Et ullamco do deserunt et nisi nisi ut ipsum
              deserunt ex exercitation.
            </p>
          </div>
        </div>
      </section>

      <section className="partners">
        <h2>Our Partners</h2>
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={arik} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={adroit} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={lagosAirport} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image4} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image5} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image6} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image7} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image8} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image9} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image10} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image11} alt="partners" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="partners-img">
              <img src={image12} alt="partners" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
