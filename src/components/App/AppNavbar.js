import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../App.scss'
//import 'bootstrap/dist/css/bootstrap.css';


const AppNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    <Link to="" className="text-decoration-none">
                        <div className="ms-5 text-primary fs-1">JMC</div>
                    </Link>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default AppNavbar
