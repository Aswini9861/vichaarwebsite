import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/process_form.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    });
console.log(response)
    const result = await response.json();

    if (result.status === 'success') {
      setStatus('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        message: ''
      });
    } else {
      setStatus('There was an issue submitting the form.');
    }
  };

  return (
    <div>
      <section className="cont-page-sec">
        <div className="conatct-us-page">
          <div className="hero">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="cont"><span>Contact</span> Us</h2>
                  <div className="corporate-office">
                    <h5 className="btn btn-dark mt-4 mb-4 pl-4 pr-4 custom-btn">Corporate Office</h5>
                    <p className="para mb-4"> <span>VICHAAR </span>LAB</p>
                    <p className="parablack">
                      <i className="fas fa-map-marker-alt icon-bordered" /> VichaarLab, 17/02, Front Home 17, Panchasakha Nagar, Dumduma, Bhubaneswar-751019
                    </p>
                    <p className="parablack"><i className="fas fa-envelope icon-bordered mt-2" /> info@vichaarlab.com</p>
                    <p className="parablack"><i className="fas fa-phone icon-bordered mt-2" /> +91 9090972227</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
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
                          value={formData.lastName}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
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
                          value={formData.mobileNumber}
                          onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Now</button>
                  </form>
                  {status && <div className="mt-3" style={{ color: 'green' }}>{status}</div>}
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
