import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Contact.css'; // Custom CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email address is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      // Proceed with form submission (e.g., send data to the server)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            isInvalid={!!errors.name} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            isInvalid={!!errors.email} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter phone number" 
            value={formData.phone} 
            onChange={handleChange} 
            isInvalid={!!errors.phone} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter your age" 
            value={formData.age} 
            onChange={handleChange} 
            isInvalid={!!errors.age} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter your message" 
            value={formData.message} 
            onChange={handleChange} 
            isInvalid={!!errors.message} 
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {submitted && <Alert variant="success" className="mt-3">Form submitted successfully!</Alert>}
    </section>
  );
};

export default Contact;
