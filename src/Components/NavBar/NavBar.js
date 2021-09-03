import React from 'react';
import './NavBar.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light"  expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="me-auto">Allahu Akbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                            <Nav.Link className="navLink" href="#link">Menu</Nav.Link>
                            <NavDropdown  title="Notice" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;