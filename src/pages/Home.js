import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Home = ({ setNavActive }) => {
    return (
        <>
            <h1 className="fs-1 text-center text-md-start m-5 mb-2 fw-bolder">Documentation</h1>
            <div className="paragraphs">
                <p>Welcome! This is the official documentation for JMC. JavaScript-like Minecraft functions.</p>
                <p>JMc or JavaScript-like Minecraft function is a custom language designed for minecraft datapack which is <span className="fst-italic">inspired</span> by JavaScript. It needs a compiler to compile it down to minecraft datapack.</p>
                <h2>Why use JMC?</h2>
                <p>JMC allows you to write minecraft functions in a better language (.jmc) which is more readable and easier to write. For example, you can declare multiple function in a single file and whitespaces no longer matter which means you can split a single command into multiple line.</p>
                <p>Normal function from .mcfunction file will not work in JMC, the syntax is almost entirely different.</p>
                <h2>How to use JMC?</h2>
                <p>Basically, you just have to create a <code>.jmc</code> file, write some code, run <a href="https://github.com/WingedSeal/jmc" target="_blank" rel="noopener noreferrer">JMC-Complier</a>, change some configuration and you are done!</p>
                <p>Without further ado, let's <Link to="/getting-started"><span onClick={() => { setNavActive("getting_started") }}>get started</span></Link>!</p>
            </div>
        </>
    )
}

Home.propTypes = {
    setNavActive: PropTypes.func
}

export default Home
