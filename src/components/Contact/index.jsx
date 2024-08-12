// Contact form component

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


function Contact() {
    // define state to manage form fields
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');

    // function to validate email address
    const isValidEmail = (email) => {
        // regex to validate email pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        if (value !== "") {
            // set form fields using state function
            setFormFields((prevFormFields) => ({
                ...prevFormFields,
                [name]: value,
            }));
            // validate for email
            if (name === "email") {
                if (!isValidEmail(value)) {
                    const errorMessage = 'Your email is invalid';
                    setError(errorMessage);
                    return;
                }
            }
            setError('');
        } else {
            // if empty reset value to null
            setFormFields((prevFormFields) => ({
                ...prevFormFields,
                [name]: '',
            }));
            const errorMessage = 'Field is required';
            setError(errorMessage);
        }
    }

    return (
        <div className="p-4" style={{ width: '75%' }}>
            <h4>Contact</h4>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    {/* OnBlur event to trigger an action when user moves out of a form field */}
                    <Form.Control type="text" name="name" value={formFields.name} onChange={handleInputChange} onBlur={handleInputChange} placeholder='Enter name' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={formFields.email} onChange={handleInputChange} onBlur={handleInputChange} placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' name="message" value={formFields.message} onChange={handleInputChange} onBlur={handleInputChange} rows={3} />
                    {error && <p className="text-danger">{error}</p>}
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
        </div>
    )
};

export default Contact;

