import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import Related from '../../components/Features/Related'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <div>
            <Link to="/features" className='text-decoration-none text-reset'><h1 className="fs-1 text-center text-md-start m-5 mb-5 fw-bolder">Features</h1></Link>
            <div className="paragraphs">

                <section id="multiline_command" />
                <details className='feature'>
                    <summary>Multiline Command</summary>
                    <p>You are allowed to split a single command into multiple line, with a cost of adding semicolons (<code className="code">;</code>) at the end of every command <span className="fst-italic">(required)</span> This mean that you can simply add semicolons to the end of every line in <code className="code">load.mcfunction</code>, change the name to <code className="code">main.jmc</code> and you have a working datapack!</p>
                    <p className="fw-bold">Example: </p>
                    <CodeBlock code={`execute
    as @a
    at @s
    run playsound
        entity.wither.spawn
        master
        @s
        ~ ~ ~
        1 2;`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`execute as @a at @s run playsound entity.wither.spawn master @s ~ ~ ~ 1 2;`} language='javascript' />
                </details>

                <section id="import" />
                <details className='feature'>
                    <summary>Import</summary>
                    <p>As we all know, putting everything into a single file isn't always the brighest idea.</p>
                    <p>The way to solve this using <code className="code">@import</code> which literally move context of another jmc file to the top of the main file.</p>
                    <p>For those who are familiar with programming, unlike normal programming language, importing <span className='fw-bold'>doesn't</span> add extra namespace to content</p>
                    <CodeBlock code={`@import '[<directory>/]<file_name>';`} language='javascript' />
                    <p>Will copy the context inside <code className="code">{'[<directory>/]<file_name>.jmc'}</code> to main <code className="code">.jmc</code>.</p>
                    <p className="fw-bold">Example: </p>
                    <CodeBlock code={`@import 'lib/math';`} language='javascript' />
                </details>

                <section id="comment" />
                <details className='feature'>
                    <summary>Comment</summary>
                    <p>Add comment to your code using <code className="code">{'#'}</code> or <code className="code">{'//'}</code>. This will make the compiler ignore every thing from that point to the end of that line. And unlike mcfunction, you are allowed to add inline comments.</p>
                    <p className="fw-bold">Example: </p>
                    <CodeBlock code={`#comment
function tellraw_message() {
    tellraw @a "Message"; //comment
}`} language='javascript' />
                    <Related to="/features#import" text="Function" />
                </details>

                <section id="load_tick" />
                <details className='feature'>
                    <summary>Load/Tick</summary>
                    <ul>
                        <li>Any commands outside a function will be automatically put into <code className="code">__load__.mcfunction</code></li>
                        <li className='text-danger'>If you put define a <code className="code">__load__</code> function, it'll be overriden.</li>
                        <li>Generate <code className="code">load.json</code> with a value of <code className="code">__load__.mcfunction</code></li>
                        <li>Generate <code className="code">tick.json</code> with a value of <code className="code">__tick__.mcfunction</code></li>
                    </ul>
                    <Related to="/features#import" text="Function" />
                </details>

                <Link to="/features/syntax"><Button variant="outline-dark" className='w-100 fs-3 fw-bold text-indent-2 p-3 mb-3' style={{ borderRadius: '1rem' }}>Custom Syntax</Button></Link>
                <Link to="/features/built-in"><Button variant="outline-dark" className='w-100 fs-3 fw-bold text-indent-2 p-3 mb-3' style={{ borderRadius: '1rem' }}>Built-in Functions</Button></Link>
            </div>
        </div>
    )
}

export default Features





