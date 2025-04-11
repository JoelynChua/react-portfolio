import React, { Component } from "react";
import imageOverlay from "../img/earth.jpg";
import emailjs from "emailjs-com";

class Contact extends Component {
  sendEmail = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: `url(${imageOverlay})` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    {/* === Contact Form === */}
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <form onSubmit={this.sendEmail} className="contactForm">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                              aria-label="Your Name"
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
                              required
                              aria-label="Your Email"
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              placeholder="Subject"
                              required
                              aria-label="Subject"
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <textarea
                              name="message"
                              rows="5"
                              className="form-control"
                              placeholder="Message"
                              required
                              aria-label="Message"
                            ></textarea>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              aria-label="Send Message"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* === Contact Info & Social === */}
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi — I'd love to hear from
                          you.
                          <br />
                          Simply fill out the form and send me a message.
                        </p>
                      </div>

                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/JoelynChua"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Profile"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github" aria-hidden="true"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/joelynchuawl/"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn Profile"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin" aria-hidden="true"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  {/* You can add © info or a simple footer message here */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
