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
                    <p>Initialize a variable, it'll set the variable to 0 if the variable doesn't exist. (Equivalent to <code className='code'>+=0</code>)</p>
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
                    <p>A condition which can be used in <code className="code">/execute if</code> or other flow controls as <code className="code">{`<condition>`}</code>. And due to minecraft command syntax which uses <code className="code">=</code> instead of <code className="code">==</code>, JMC will treat both as the same thing.</p>
                    <CodeBlock code={`$<variable> (>=|<=|=|==|>|<) <integer>
$<variable> (>=|<=|=|==|>|<) <variable> 
$<variable> (==|=) [<integer>]..[<integer>]`} language='javascript' />
                    <p className="fw-bold">Example:</p>
                    <CodeBlock code={`if ($deathCount>5) {
    say "More than 5 death!"
}`} language='javascript' />
                    <Related to='/features/syntax#if_else' text='If/Else' />
                </details>

                <section id="if_else" />
                <details className='feature'>
                    <summary>If/Else</summary>
                    <p>Simulate programming languages' <code className="code">If</code>, <code className="code">Else</code> using temporary variable and "anonymouse function". So you can write if/else in JavaScript and the compiler will handle the logic for you. But since this is minecraft function, a long chain of if else will slow your code down even if the condition is already met in the first <code className="code">if</code>.</p>
                    <CodeBlock code={`if (<condition>) { 
    <command>;
    <command>;
    ...
} else if (<condition>) {
    <command>;
    <command>;
    ...
} else if (<condition>) {
    <command>;
    <command>;
    ...
} else {
    <command>;
    <command>;
    ...
}`} language='javascript' />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`scoreboard players set __tmp__ __variable__ 0
execute if <condition> run function namespace:__private__/if_else/0
execute if score __tmp__ __variable__ matches 0 if <condition> run function namespace:__private__/if_else/1
execute if score __tmp__ __variable__ matches 0 if <condition> run function namespace:__private__/if_else/2
execute if score __tmp__ __variable__ matches 0 run function namespace:__private__/if_else/3`} language='elixir' />
                    <code className="code">__private__/if_else/0.mcfunction</code>
                    <CodeBlock code={`<command>;
<command>;
...
scoreboard players set __tmp__ __variable__ 1`} language='elixir' />
                    <code className="code">__private__/if_else/1.mcfunction</code>
                    <CodeBlock code={`<command>;
<command>;
...
scoreboard players set __tmp__ __variable__`} language='elixir' />
                    <code className="code">__private__/if_else/2.mcfunction</code>
                    <CodeBlock code={`<command>;
<command>;
...
scoreboard players set __tmp__ __variable__`} language='elixir' />
                    <code className="code">__private__/if_else/3.mcfunction</code>
                    <CodeBlock code={`<command>;
<command>;
...
scoreboard players set __tmp__ __variable__`} language='elixir' />
                    <p className="fw-bold">Example:</p>
                    <CodeBlock code={`function do_i_have_tag() {
    if (entity @s[tag=my_tag]) { 
        say "I have tag!";
    } else {
        say "I don't have tag!";
    }
}
execute as @a[team=my_team] run do_i_have_tag();`} language='javascript' startline={113} />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`execute as @a[team=my_team] run function namespace:do_i_have_tag`} language='elixir' />
                    <code className="code">do_i_have_tag.mcfunction</code>
                    <CodeBlock code={`scoreboard players set __tmp__ __variable__ 0
execute if entity @s[tag=my_tag] run function namespace:__private__/if_else/11
execute if score __tmp__ __variable__ matches 0 run function namespace:__private__/if_else/12`} language='elixir' />
                    <code className="code">__private__/if_else/11.mcfunction</code>
                    <CodeBlock code={`say "I have tag!"
scoreboard players set __tmp__ __variable__ 1`} language='elixir' />
                    <code className="code">__private__/if_else/12.mcfunction</code>
                    <CodeBlock code={`say "I don't have tag!"`} language='elixir' />
                    <Related to='/features/syntax#function_defining' text='Function Defining' />
                </details>

                <section id="while_loop" />
                <details className='feature'>
                    <summary>While Loop</summary>
                    <p>Simulate programming languages' <code className="code">While</code> loop which continue running commands inside code block until the condition is no longer met with recursion and . By definition, it's possible that <span className="text-danger">you accidentally cause infinite recursion</span> in while loop. Be extremely aware of that.</p>
                    <CodeBlock code={`while (<condition>) {
    <command>;
    <command>;
    ...
}`} language='javascript' />
                    <p className="fs-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`execute if <condition> run function namespace:__private__/while_loop/0`} language='elixir' />
                    <code className="code">__private__/while_loop/0.mcfunction</code>
                    <CodeBlock code={`<command>;
<command>;
...
execute if <condition> run function namespace:__private__/while_loop/0`} language='elixir' />
                </details>

                <section id="for_loop" />
                <details className='feature'>
                    <summary>For Loop</summary>
                    <p>Simulate Javascript's <code className="code">for</code> loop. It consist of 3 statements.</p>
                    <ul>
                        <li><code className="code">{`let $<variable> = <integer>`}</code>is executed (one time) before the execution of the code block. And <span className="text-danger">must be variable assignment with integer and nothing else</span>.</li>
                        <li><code className="code">{`<condition>`}</code>defines the condition for executing the code block.</li>
                        <li><code className="code">{`<statement>`}</code>is executed (every time) after the code block has been executed.</li>
                    </ul>
                    <p>Note that <code className="code">{`$<variable>`}</code> is similar to local scope. You cannot access it from outside the loop, and if you already declared/assign variable with the same name on global scope, local will take priority in the code block. <span className="text-danger">But if you nested for loop and create a variable with the same name, it'll all count as a single variable.</span></p>
                    <CodeBlock code={`for (let $<variable> = <integer>; <condition>; <statement>) {
  <command>;
  <command>;
  ...
}`} language='javascript' />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`scoreboard players set $__private__.<variable> __variable__ <integer>
execute if <condition> run function namespace:__private__/for_loop/0`} language='elixir' />
                    <code className="code">__private__/for_loop/0.mcfunction</code>
                    <CodeBlock code={`<command>;
<command>;
...
<statement>
execute if <condition> run function namespace:__private__/for_loop/0`} language='elixir' />
                    <p className="fw-bold">Example:</p>
                    <CodeBlock code={`for (let $i=1; $i<=10; $i++) {
    tellraw @a $i.toString(color="gold");
}`} language='javascript' startline={71} />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`scoreboard players set $__private__.i __variable__ 1
execute if score $__private__.i __variable__ matches ..10 run function namespace:__private__/for_loop/17`} language='elixir' />
                    <code className="code">__private__/for_loop/17.mcfunction</code>
                    <CodeBlock code={`tellraw @a {"score":{"name":"$__private__.i","objective":"__variable__"},"color":"gold"}
scoreboard players operation $__private__.i __variable__ += 1 __int__
execute if score $__private__.i __variable__ matches ..10 run function namespace:__private__/for_loop/17`} language='elixir' />
                    <Related to='/features/built-in#to_string' text='toString()' />
                </details>

            </div>
        </div>
    )
}

export default Syntax
