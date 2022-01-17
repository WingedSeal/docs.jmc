import React from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import Related from '../../components/Features/Related'

const BuiltInFunctions = () => {
    return (
        <div>
            <Link to="/features" className='text-decoration-none text-reset'><h1 className="fs-1 text-center text-md-start m-5 mb-0 fw-bolder">Features</h1></Link>
            <h2 className="fs-2 ms-5 mb-5 text-indent-2">Built-in Functions</h2>

            <div className="paragraphs">
                <section id="to_string" />
                <details className='feature'>
                    <summary>toString()</summary>
                    <p>Turn variable into json for display (tellraw, title, etc.)</p>
                    <CodeBlock code={`$<variable>.toString(key=value, key=value, ...)`} language='python' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`{"score":{"name":"$<variable>","objective":"__variable__"},"key":value, "key":value, ...}`} language='json' />
                </details>
            </div>
        </div>

    )
}

export default BuiltInFunctions
