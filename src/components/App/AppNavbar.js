import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../App.scss'


const AppNavbar = ({ active, setActive }) => {
    const [navShow, setNavShow] = useState(true);
    const [y, setY] = useState(document.scrollingElement.scrollHeight);

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            setNavShow(true);
        } else if (y < window.scrollY) {
            setNavShow(false);
        }
        setY(window.scrollY)
    }, [y]);
    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [])

    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg" collapseOnSelect style={{ transition: '0.2s ease-in-out', transform: navShow ? '' : 'translateY(-100%)' }} ref={ref}>
                <Navbar.Brand>
                    <Link to="" className="text-decoration-none">
                        <div className="ms-5 text-primary fs-1" onClick={() => { setActive("home") }}>JMC</div>
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
            <div style={{ height: height }} className='bg-primary d-flex'></div>
        </div >
    )
}
//<h1 className="display-2 m-auto fw-bolder overflow-hidden">Javascript-like Minecraft functions</h1>

AppNavbar.propTypes = {
    active: PropTypes.string,
    setActive: PropTypes.func
}


export default AppNavbar



