import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import './../../App.scss'


const AppNavbar = () => {
    const [active, setActive] = useState('TEST')
    const [navShow, setNavShow] = useState(true);
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [height, setHeight] = useState(0)
    const location = useLocation();
    const ref = useRef(null)

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


    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [])


    useEffect(() => {
        setActive(location.pathname)
    }, [location.pathname])


    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg" collapseOnSelect style={{ transition: '0.3s ease-in-out', transform: navShow ? '' : 'translateY(-100%)' }} ref={ref}>
                <Navbar.Brand>
                    <Link to="" className="text-decoration-none">
                        <div className="ms-5 text-primary fs-1">JMC</div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle className='m-2' />
                <Navbar.Collapse className='ms-3'>
                    <Nav className='fs-5 ms-auto me-5' activekey={active}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/getting-started">Getting-Started</NavLink>
                        <NavLink to="/examples">Examples</NavLink>
                        <NavLink to="/warnings">Warnings</NavLink>
                        <NavDropdown title="Features" activekey={active} active={active.startsWith("/features")}>
                            <NavItem to="/features">Features</NavItem>
                            <NavDropdown.Divider />
                            <NavItem to="/features/syntax">Syntax</NavItem>
                            <NavItem to="/features/built-in">Built-in Function</NavItem>
                        </NavDropdown>
                        <Nav.Link href="https://discord.gg/PNWKpwdzD3" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faDiscord} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ height: height }} className='bg-primary d-flex'></div>
        </div >
    )
}
//<h1 className="display-2 m-auto fw-bolder overflow-hidden">Javascript-like Minecraft functions</h1>


export default AppNavbar


const NavLink = ({ to, children }) => {
    return (
        <Nav.Link eventKey={to} as={Link} to={to}>{children}</Nav.Link>
    )
}

const NavItem = ({ to, children }) => {
    return (
        <NavDropdown.Item eventKey={to} as={Link} to={to}>{children}</NavDropdown.Item>
    )
}