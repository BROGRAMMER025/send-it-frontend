import React, { useState } from 'react';
import './ContactForm.css'; // Import custom CSS file for styling
import ContactSidebar from './ContactSidebar'; // Import the new ContactSidebar component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch('https://formspree.io/f/xrgnlzrn', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        alert('Your message has been sent successfully!');
      } else {
        alert('There was a problem sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem sending your message. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card card-sm">
            <div className="card-body">
              <div className="title-container text-white p-3 mb-3 bg-primary">
                <h2 className="contact-us-title text-center mb-0">CONTACT US</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Company or Organization:</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
