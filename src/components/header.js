import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <header className='mainHeader'>
            <Navbar bg="blue" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )

}

export default Header;

