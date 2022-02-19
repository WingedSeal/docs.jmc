import React from 'react'
import CodeBlock from '../components/CodeBlock'

const Warnings = () => {
    return (
        <div>
            <h1 className="fs-1 text-center text-md-start m-5 mb-0 fw-bolder">Warnings</h1>
            <div className="paragraphs">
                <ul>
                    <li>JMC does <span className="text-danger">not</span> have any syntax checking, which mean any syntax error will result in broken datapacks. <span className='fw-bold'>Make sure you don't miss any semicolon (<code className="code">;</code>).</span></li>
                    <li>Do <span className="text-danger">not</span> declare <code className="code">__load__</code> function. To run commands on load, put the command outside a function instead.</li>
                    <li>
                        <p>Techically, there's no real "local scope" variable, since minecraft scoreborad doesn't allow it. But you can threat the integer defined in <span className="fst-italic">for loop</span> as one.</p>
                        <p>In for loop, if you declare a local variable with the same name as global, the local one will take priority. For example:</p>
                        <CodeBlock code={`$i = 3;
tellraw @a $i.toString();
for (let $i = 0; $i < 5; $i++) {
    tellraw @a $i.toString();
}
tellraw @a $i.toString();`} language='javascript' />
                        <p className='fst-italic'>In-game Chat output:</p>
                        <p className="text-primary bg-dark ps-4 mb-0">3</p>
                        <p className="text-primary bg-dark ps-4 mb-0">0</p>
                        <p className="text-primary bg-dark ps-4 mb-0">1</p>
                        <p className="text-primary bg-dark ps-4 mb-0">2</p>
                        <p className="text-primary bg-dark ps-4 mb-0">3</p>
                        <p className="text-primary bg-dark ps-4 mb-0">4</p>
                        <p className="text-primary bg-dark ps-4">3</p>
                    </li>

                    <li>Followings are reserved for JMC Compiler, you may declare <code className="code">__tick__</code> function. But unless you understand how the compiler works and what you are doing, don't change any of these values. (<code className="code">*</code> asterisk can be replace by any word.)
                        <ul>
                            <li>Function
                                <ol>
                                    <li><code className="code">__load__</code></li>
                                </ol>
                            </li>
                            <li>Scoreboard Objectives
                                <ol>
                                    <li><code className="code">__int__</code></li>
                                    <li><code className="code">__variable__</code></li>
                                    <li><code className="code">__rc__</code></li>
                                    <li><code className="code">__rejoin__</code></li>
                                    <li><code className="code">__die__</code></li>
                                    <li><code className="code">__debug__.*</code></li>
                                </ol>
                            </li>
                            <li>Players in <code className="code">__variable__</code>.
                                <ol>
                                    <li><code className="code">__tmp__</code></li>
                                    <li><code className="code">__logic__</code></li>
                                    <li><code className="code">__item_id__ </code></li>
                                    <li><code className="code">__math__.*</code></li>
                                    <li><code className="code">$__private__.*</code></li>
                                </ol></li>
                            <li>Directories
                                <ol>
                                    <li><code className="code">__private__/*</code></li>
                                </ol>
                            </li>
                        </ul>
                        In general try to not touch anything in the form of <code className="code">__text_here__</code> beside <code className="code">__tick__</code> and <code className="code">__variable__</code> (As long as the fake player's name inside <code className="code">__variable__</code> starts with <code className="code">$</code> and not <code className="code">$__private__</code>)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Warnings
