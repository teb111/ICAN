import React from "react";
import { Button } from "react-bootstrap";
import banner from "../images/banner.png";
import man from "../images/man.png";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
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
      <div className="intro-container">
        <div className="intro-1">
          <h3 className="white">
            <span>We are</span> IDSICAN,
          </h3>
          <h3 className="yellow">The PaceSetter District</h3>
          <p>
            LoremNulla deserunt non sit minim.Consequat consectetur mollit et
            sint non sunt nisi duis id enim. Veniam consectetur fugiat laborum
            cillum fugiat aute.
          </p>
          <Button variant="outline-secondary">Become a Member</Button>{" "}
        </div>
        <div className="intro-2">
          <img src={banner} alt="intro img" />
        </div>
      </div>
      <section className="chairman-section">
        <div className="chairman-img">
          <img src={man} alt="chairman img" width={350} height={200} />
        </div>
        <div className="chairman-content">
          <h2>Meet the Chairman</h2>
          <p>
            Cillum aliqua cupidatat et occaecat commodo quis in labore. Ex do
            nostrud ad id aliqua do nostrud. Irure amet sit irure velit laborum.
            Et ullamco do deserunt et nisi nisi ut ipsum deserunt ex
            exercitation. Cillum aliqua cupidatat et occaecat commodo quis in
            labore. Ex do nostrud ad id aliqua do nostrud. Irure amet sit irure
            velit laborum. Et ullamco do deserunt et nisi nisi ut ipsum deserunt
            ex exercitation. Cillum aliqua cupidatat et occaecat commodo quis in
            labore. Ex do nostrud ad id aliqua do nostrud. Irure amet sit irure
            velit laborum. Et ullamco do deserunt et nisi nisi ut ipsum deserunt
            ex exercitation.
          </p>
        </div>
      </section>
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partners-img">
          <div className="img-container">
            <center>
              <img src={image1} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image2} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image2} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image3} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image4} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image5} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image6} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image7} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image8} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image9} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image10} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image11} alt="partners" />
            </center>
          </div>
          <div className="img-container">
            <center>
              <img src={image12} alt="partners" />
            </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
