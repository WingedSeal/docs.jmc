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
                    <p>Initialize a variable, it'll set the variable to 0 if the variable doesn't exist. (Equivalent to <code className='code'>+=0</code></p>
                    <CodeBlock code={`let $<variable>;`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`scoreboard players add $<variable> __variable__ 0`} language='elixir' />
                </details>

                <section id="variable_assignment" />
                <details className='feature'>
                    <summary>Variable Assignment</summary>
                    <p>Set a variable to an integer. Due to nature of how minecraft scoreboard works, you are allowed to assign a variable without declaring it.</p>
                    <CodeBlock code={`$<variable> = <integer>;`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`scoreboard players set $<variable> __variable__ <integer>`} language='elixir' />
                    <Related to="/features/syntax#variable_declarartion" text="Variable Declaration" />
                </details>

                <section id="variable_operation" />
                <details className='feature'>
                    <summary>Variable Operations</summary>
                    <p>Does scoreboard operations, with 6 available operations.</p>
                    <ul>
                        <li><code className="code">=</code> Assign: Set target's score to source's score (for variable)</li>
                        <li><code className="code">+=</code> Addition: Add source's score to target's score</li>
                        <li><code className="code">-=</code> Subtraction: Subtract source's score from target's score</li>
                        <li><code className="code">*=</code> Multiplication: Set target's score to the product of the target's and source's scores</li>
                        <li><code className="code">/=</code> (Integer) Division: Divide target's score by source' scores, and the result will be rounded down to an integer.</li>
                        <li><code className="code">%=</code> Modulus: Divide target's score by source's score, and use the positive remainder to set the target score</li>
                    </ul>
                    <CodeBlock code={`$<target: variable> <operations> ($<source: variable>|<integer>);`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`scoreboard players operations <target> __variable__ <operations> <source> __variable__`} language='elixir' />
                    <CodeBlock code={`scoreboard players operations <target> __variable__ <operations> <integer> __int__`} language='elixir' />
                </details>

                <section id="incrementation" />
                <details className='feature'>
                    <summary>Incrementation</summary>
                    <ul>
                        <li><code className="code">{`$<variable>++`}</code> is <code className="code">{`$<variable> += 1`}</code></li>
                        <li><code className="code">{`$<variable>--`}</code> is <code className="code">{`$<variable> -= 1`}</code></li>
                        <Related to="/features/syntax#variable_operation" text="Variable Operations" />
                    </ul>
                </details>

                <h2>Function</h2>

                <section id="function_defining" />
                <details className='feature'>
                    <summary>Function Defining</summary>
                    <p>Say goodbye to creating a new file for every single function, introducing Function Defining. This feature allows you to define as many function as you want in a single file. But for now, <span class='text-danger'>arrow function does not work</span> and <span class='text-danger'>you can't create parameter</span>. Any capital letter (which is invalid for minecraft function name) will be automatically be turn into lowercase, which means it is not case-sensitive. For example, <code className="code">deathMessage</code> is the same as <code className="code">deathmessage</code>.</p>
                    <CodeBlock code={`function [<directory>.]<file_name>() {
    <command>;
    <command>;
    ...
}`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <code className="code">{`[<directory>/]<file_name>.mcfunction`}</code>
                    <CodeBlock code={`<command>;
<command>;
...`} language='javascript' />

                    <p className="fw-bold">Example: </p>
                    <CodeBlock code={`function utils.chat.spamChat() {
    tellraw @a "SPAM 1";
    tellraw @a "SPAM 2";
    tellraw @a "SPAM 2";
}`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <code className="code">{`utils/chat/spamchat.mcfunction`}</code>
                    <CodeBlock code={`tellraw @a "SPAM 1"
tellraw @a "SPAM 2"
tellraw @a "SPAM 2"`} language='elixir' />
                    <Related to="/features/syntax#function_calling" text="Function Calling" />
                </details>

                <section id="function_calling" />
                <details className='feature'>
                    <summary>Function Calling</summary>
                    <p>Instead of using <code className="code">/function</code> command, you can use parentheses to call function instead and jmc will add namespace for you automatically. But unlike normal programming language, <span className="text-danger"> you can't pass any argument</span>. Any capital letter (which is invalid for minecraft function name) will be automatically be turn into lowercase, which means it is not case-sensitive. For example, <code className="code">deathMessage()</code> is the same as <code className="code">deathmessage()</code></p>
                    <CodeBlock code={`[<directory>.]<file_name>();`} language='javascript' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`function namespace:[<directory>/]<file_name>`} language='elixir' />
                    <p className="fw-bold">Example: </p>
                    <CodeBlock code={`execute as @a run utils.chat.spamChat();`} language='elixir' />
                    <p className="fst-italic">Output: </p>
                    <CodeBlock code={`execute as @a run function namespace:utils/chat/spamchat`} language='elixir' />
                </details>

                <section id="anonymous_function" />
                <details className='not-done feature'>
                    <summary>Anonymous Function</summary>
                    <p>Work In Progress</p>
                </details>

                <section id="function_grouping" />
                <details className='feature'>
                    <summary>Function Grouping</summary>
                    <p>It simply add extra layers of directory/namespace to any function and function only inside it. Even though syntax use the word "class", <span className="text-danger">it is not a class</span>.</p>
                    <CodeBlock code={`class [<directory>.]<folder_name> {
    function [<directory>/]<file_name>() {
        <command>;
        <command>;
        ...
    }
    function [<directory>/]<file_name>() {
        <command>;
        <command>;
        ...
    }
    ...

    <command>;
    <command>;
    ....
}`} language='javascript' />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`<command>
<command>
...`} language='elixir' />
                    <code className="code">{`[<directory>/]<folder_name>/[<directory>/]<file_name>.mcfunction`}</code>
                    <CodeBlock code={`<command>
<command>
...`} language='elixir' />
                    <Related to="/features/syntax#function_defining" text='Function Defining' />
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
