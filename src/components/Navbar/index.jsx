// Navbar component to embed the Navtabs, also added functionality to collapse Navbar for smaller resolution
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navtabs from '../Navtabs';

function Navigationbar() {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#" expand="lg" className="text-dark"><h4>Pranith Gunda</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Navtabs />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navigationbar;