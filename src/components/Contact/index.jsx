// Contact form component

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';


function Contact() {

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
            if(name==="email"){
                if(!isValidEmail(value)){
                    const errorMessage = 'Enter valid email address';
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
            const errorMessage = 'Value cannot be blank';
            setError(errorMessage);
        }
    }

    return (
        <div className="p-4" style={{ width: '75%' }}>
            <h4>Contact</h4>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={formFields.name} onChange={handleInputChange} placeholder='Enter name' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={formFields.email} onChange={handleInputChange} placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' name="message" value={formFields.message} onChange={handleInputChange} rows={3} />
                    {error && <p className="text-danger">{error}</p>}
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
        </div>
    )
};

export default Contact;

