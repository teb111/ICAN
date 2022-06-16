import React, { useState } from "react";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    alert("Submitted");
  };
  return (
    <div className="contact-container">
      <section className="hero2">
        <h3>Contact Us</h3>
        <p>How may we be of help to you or your firm today?</p>
      </section>
      <section className="map-container">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=lagos,%20nigera&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="maps"
          ></iframe>
          <a href="https://123movies-to.org">.</a>
          <br />
          <a href="https://www.embedgooglemap.net">
            google maps embed responsive
          </a>
        </div>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="col-lg-6">
            <form class="contact-form" onSubmit={submitHandler} method="post">
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter email address"
                value={name}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Subject"
                value={name}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <dl className="contact-address">
              <dt>Address:</dt>
              <dd>
                4, Araromi Street,
                <br />
                off Oduyemi Street, <br />
                Anifowoshe Area - Ikeja, <br />
                Lagos, Nigeria.
              </dd>

              <dt>Email:</dt>
              <dd>
                <a
                  href="mailto:info@ican-ikejadistrictsociety.org"
                  className="text"
                  style={{ marginTop: "0" }}
                >
                  info@ican-ikejadistrictsociety.org
                </a>
              </dd>

              <dt>Telephone:</dt>
              <dd>
                <a
                  href="tel:+2347044013800"
                  className="text"
                  style={{ marginTop: "0" }}
                >
                  +2347044013800
                </a>
                <br />
                <a
                  href="tel:+2348080248337"
                  className="text"
                  style={{ marginTop: "0" }}
                >
                  +2348080248337
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
