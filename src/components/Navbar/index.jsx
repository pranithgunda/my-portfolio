import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navtabs from '../Navtabs';

function Navigationbar() {
    return (
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#" expand="lg">Pranith</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Navtabs />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigationbar;