import React from 'react'
import { Link } from 'react-router-dom';
import './../App.scss'


const Home = () => {
    return (
        <>
            <h1 className="fs-1 text-center text-md-start m-4 fw-bolder">Documentation</h1>
            <p className="m-3 text-indent-3 fs-5">Welcome! This is the official documentation for JMC. JavaScript-like Minecraft functions.</p>
            <p className="m-3 mt-4 text-indent-3 fs-5">JMc or JavaScript-like Minecraft function is a custom lauage design for minecraft datapack which is <span className="fst-italic">inspired</span> by JavaScript. It needs a compiler to compile it down to minecraft datapack.</p>
            <h2 className="fs-2 m-3 fw-bold">Why use JMC?</h2>
        </>
    )
}

export default Home
