import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SuccessNotification } from "./notification";
const Contact = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_PUBLICKEY }
      )
      .then(
        (result) => {
          console.log(result)
          if (result.status === 200) {
            setNotificationMessage("Message sent successfully!");
            setNotificationType("success");
          } else {
            setNotificationMessage("Something went wrong. Please try again.");
            setNotificationType("error");
          }
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
          form.current.reset();
        },
        (error) => {
          setNotificationMessage(
            "Failed to send message, please try again later."
          );
          setNotificationType("error");
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
        }
      );
  };

  return (
    <div>
      {showNotification && (
        <SuccessNotification
          message={notificationMessage}
          show={showNotification}
          onClose={() => setShowNotification(false)}
          duration={3000}
          type={notificationType}
        />
      )}
      <section className="cont-page-sec">
        <div className="conatct-us-page">
          <div className="hero">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="cont">
                    <span>Contact</span> Us
                  </h2>
                  <div className="corporate-office">
                    <h5 className="btn btn-dark mt-4 mb-4 pl-4 pr-4 custom-btn">
                      Corporate Office
                    </h5>
                    <p className="para mb-4">
                      {" "}
                      <span>VICHAAR </span>LAB
                    </p>
                    <p className="parablack">
                      <i className="fas fa-map-marker-alt icon-bordered" />{" "}
                      VichaarLab, 17/02, Front Home 17, Panchasakha Nagar,
                      Dumduma, Bhubaneswar-751019
                    </p>
                    <p className="parablack">
                      <i className="fas fa-envelope icon-bordered mt-2" />{" "}
                      info@vichaarlab.com
                    </p>
                    <p className="parablack">
                      <i className="fas fa-phone icon-bordered mt-2" /> +91
                      9090972227
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Email Id *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="mobileNumber">Mobile Number *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobileNumber"
                          name="mobileNumber"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={4}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
