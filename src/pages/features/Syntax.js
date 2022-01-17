import React from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import Related from '../../components/Features/Related'

const Syntax = () => {
    return (
        <div>
            <Link to="/features" className='text-decoration-none text-reset'><h1 className="fs-1 text-center text-md-start m-5 mb-0 fw-bolder">Features</h1></Link>
            <h2 className="fs-2 ms-5 mb-5 text-indent-2">Custom Syntax</h2>
            <div className="paragraphs">
                <h2>Variable</h2>
                <section id="variable_declarartion" />
                <details className='feature'>
                    <summary>Variable Declaration</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="variable_assignment" />
                <details className='feature'>
                    <summary>Variable Assignment</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="variable_operation" />
                <details className='feature'>
                    <summary>Variable Operations</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="increment_decrement" />
                <details className='feature'>
                    <summary>Incrementation/Decrementation</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <h2>Function</h2>
                <section id="function_defining" />
                <details className='feature'>
                    <summary>Function Defining</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="function_calling" />
                <details className='feature'>
                    <summary>Function Calling</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="function_grouping" />
                <details className='feature'>
                    <summary>Function Grouping</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <h2>Flow controls</h2>
                <section id="condition" />
                <details className='feature'>
                    <summary>Condition</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="if_else" />
                <details className='feature'>
                    <summary>If/Else</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="while_loop" />
                <details className='feature'>
                    <summary>While Loop</summary>
                    <p>PLACEHOLDER</p>
                </details>
                <section id="for_loop" />
                <details className='feature'>
                    <summary>For Loop</summary>
                    <p>PLACEHOLDER</p>
                </details>

            </div>
        </div>
    )
}

export default Syntax
