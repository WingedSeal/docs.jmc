import React from 'react'
import CodeBlock from '../components/CodeBlock'

const Features = () => {
    return (
        <div>
            <h1 className="fs-1 text-center text-md-start m-5 mb-5 fw-bolder">Features</h1>
            <div className="paragraphs">

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
                <details className='feature'>
                    <summary>Import</summary>
                    <p>As we all know, putting everything into a single file isn't always the brighest idea</p>
                </details>

            </div>
        </div>
    )
}

export default Features
