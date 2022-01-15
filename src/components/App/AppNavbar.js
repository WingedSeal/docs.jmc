import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../App.scss'
//import 'bootstrap/dist/css/bootstrap.css';


const AppNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <Link to="" className="text-decoration-none">
                        <div className="ms-5 text-primary fs-1">JMC</div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className='m-2' />
                <Navbar.Collapse className='ms-3'>
                    <Nav className='fs-5'>
                        <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to="/patch-notes">Patch Notes</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to="/examples">Examples</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to="/warnings">Warnings</Nav.Link>
                        <NavDropdown title="Features">
                            <NavDropdown.Item eventKey="5" as={Link} to="/features">Features</NavDropdown.Item>
                            <NavDropdown.Item eventKey="6" as={Link} to="/features/syntax">Syntax</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default AppNavbar
