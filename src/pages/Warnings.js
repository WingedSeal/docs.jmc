import React from 'react'
import CodeBlock from '../components/CodeBlock'

const Warnings = () => {
    return (
        <div>
            <h1 className="fs-1 text-center text-md-start m-5 mb-0 fw-bolder">Warnings</h1>
            <h2 className="fs-2 ms-5 mb-5 text-indent-2">List of stuffs you shouldn't mess with.</h2>
            <div className="paragraphs">
                <ul>
                    <li>JMC does <span className="text-danger">not</span> have any syntax checking, which mean any syntax error will result in broken datapacks. Make sure you don't miss any semicolon <code className="code">;</code>.</li>
                    <li><code className="code">__tick__</code> will be called every game tick.</li>
                    <li><code className="code">__load__</code> will be called once on load.</li>
                    <li>Techically, there's no real "local scope" variable, since minecraft scoreborad doesn't allow it. But you can threat the integer defined in <span className="fst-italic">for loop</span> as one.</li>
                    <li>In for loop, if you declare a local variable with the same name as global, the local one will take priority. For example:<CodeBlock code={`$i = 3;
tellraw @a $i.toString();
for (let $i = 0; $i < 5; $i++) {
    tellraw @a $i.toString();
}
tellraw @a $i.toString();`} language='javascript' /><div className='fst-italic'>In-game Chat output:</div><CodeBlock code={`3
0
1
2
3
4
3`} language='javascript' /></li>

                    <li>Followings are reserved for JMC Compiler, you may declare <code className="code">__tick__</code> function. But unless you understand how the compiler works and what you are doing, don't change any of these values.
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
                                </ol>
                            </li>
                            <li>Players in <code className="code">__variable__</code>
                                <ol>
                                    <li><code className="code">__tmp__</code></li>
                                    <li><code className="code">__logic__</code></li>
                                    <li>Anything starting with <code className="code">$__private__</code></li>
                                </ol></li>
                            <li>Directories
                                <ol>
                                    <li><code className="code">__private__/if_else</code></li>
                                    <li><code className="code">__private__/for_loop</code></li>
                                    <li><code className="code">__private__/while_loop</code></li>
                                    <li><code className="code">__private__/anonymous</code></li>
                                </ol>
                            </li>
                        </ul>
                    </li>
                    <li>Extra information <ul>
                        <li>You can use the <code className="code">__int__</code>, but do not change them.</li>
                        <li><code className="code">__tmp__</code> will be reset every time it'll be used by the compiler, just don't touch it. The data inside is uselss and if you change it, it won't last long either.</li>
                        <li><code className="code">{`$__private__.<var>`}</code> will be used for "for loop". If you understand what you are doing you might change or access it inside loop. (<code className="code">$i</code> will be stored in <code className="code">$__private__.i</code> in the following)<CodeBlock code={`for (let $i = 0; $i < 5; $i++) {
    tellraw @a $i.toString();
  }`} language='javascript' /></li>
                    </ul></li>
                </ul>
            </div>
        </div>
    )
}

export default Warnings
