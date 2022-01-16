import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../App.scss'


const AppNavbar = ({ active, setActive }) => {
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
                    <Nav className='fs-5 ms-auto me-5' activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
                        <Nav.Link eventKey="home" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link eventKey="getting_started" as={Link} to="/getting-started">Getting Started</Nav.Link>
                        <Nav.Link eventKey="patch_notes" as={Link} to="/patch-notes">Patch Notes</Nav.Link>
                        <Nav.Link eventKey="examples" as={Link} to="/examples">Examples</Nav.Link>
                        <Nav.Link eventKey="warnings" as={Link} to="/warnings">Warnings</Nav.Link>
                        <NavDropdown title="Features">
                            <NavDropdown.Item eventKey="features" as={Link} to="/features">Features</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="features/syntax" as={Link} to="/features/syntax">Syntax</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

AppNavbar.propTypes = {
    active: PropTypes.string,
    setActive: PropTypes.func
}


export default AppNavbar



