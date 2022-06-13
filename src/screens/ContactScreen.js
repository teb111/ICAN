import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

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
      <section className="executive-banner contact-us">
        <p>Contact Us</p>
        <p>How may we be of help to you or your firm today?</p>
      </section>
      <section className="flex-center">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=lagos,%20nigera&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="maps"
            ></iframe>
            <a href="https://123movies-to.org">.</a>
            <br />
            <a href="https://www.embedgooglemap.net">
              google maps embed responsive
            </a>
          </div>
        </div>
      </section>

      <section className="form-contact">
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                className="form-adjust"
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                className="form-adjust"
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
              <Form.Control
                className="form-adjust"
                type="text"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={3}
                className="form-adjust"
                type="text"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{ backgroundColor: "#273f95", borderRadius: "5px" }}
            >
              Send Message
            </Button>
          </Form>
        </FormContainer>

        <div className="contact-address">
          <div className="address">
            <h6>ADDRESS: </h6>
            <p className="text">
              4, Araromi Street, off Oduyemi Street, Anifowoshe Area - Ikeja,
              Lagos, Nigeria.
            </p>
          </div>
          <div className="address">
            <h6>EMAIL: </h6>
            <a
              href="mailto: info@ican-ikejadistrictsociety.org"
              className="text"
              style={{ marginTop: "0" }}
            >
              info@ican-ikejadistrictsociety.org
            </a>
          </div>
          <div className="addresss">
            <h6>TELEPHONE:</h6>
            <p className="text">+2347044013800, +2348080248337</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
