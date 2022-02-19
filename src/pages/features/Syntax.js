import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import Related from '../../components/Features/Related'
import SearchBar from '../../components/Features/SearchBar'
import Feature, { SearchContext } from '../../components/Features/Feature'

const Syntax = () => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div>
            <Link to="/features" className='text-decoration-none text-reset'><h1 className="fs-1 text-center text-md-start m-5 mb-0 fw-bolder">Features</h1></Link>
            <h2 className="fs-2 ms-5 mb-5 text-indent-2">Custom Syntax</h2>
            <SearchBar setSearchValue={setSearchValue} />
            <div className="paragraphs">
                <h2>Variable</h2>
                <SearchContext.Provider value={searchValue}>

                    <Feature id="variable_declaration" summary="Variable Declaration" keywords="declare">
                        <p>Initialize a variable, it'll set the variable to 0 if the variable doesn't exist. (Equivalent to <code className='code'>+=0</code>) You don't need to initialize a variable to use it unlike most programming language.</p>
                        <CodeBlock code={`let $<variable>;`} language='javascript' />
                        <p className="fst-italic">Output: </p>
                        <CodeBlock code={`scoreboard players add $<variable> __variable__ 0`} language='elixir' />
                    </Feature>


                    <Feature id="variable_assignment" summary="Variable Assignment">
                        <p>Set a variable to an integer. Due to nature of how minecraft scoreboard works, you are allowed to assign a variable without declaring it.</p>
                        <CodeBlock code={`$<variable> = <integer>;`} language='javascript' />
                        <p className="fst-italic">Output: </p>
                        <CodeBlock code={`scoreboard players set $<variable> __variable__ <integer>`} language='elixir' />
                        <Related setSearchValue={setSearchValue} to="/features/syntax#variable_declaration" text="Variable Declaration" />
                    </Feature>

                    <Feature id="variable_operation" summary="Variable Operations" keywords='operators'>
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
                        <CodeBlock code={`scoreboard players add|remove <target> __variable__ <integer>`} language='elixir' />
                    </Feature>

                    <Feature id="incrementation" summary="Incrementation" keywords="decrementation ++ --">
                        <ul>
                            <li><code className="code">{`$<variable>++`}</code> is equivalent to <code className="code">{`$<variable> += 1`}</code></li>
                            <li><code className="code">{`$<variable>--`}</code> is equivalent to <code className="code">{`$<variable> -= 1`}</code></li>
                            <Related setSearchValue={setSearchValue} to="/features/syntax#variable_operation" text="Variable Operations" />
                        </ul>
                    </Feature>

                    <h2>Function</h2>

                    <Feature id="function_defining" summary="Function Defining" keywords="define">
                        <p>Say goodbye to creating a new file for every single function, introducing Function Defining. This feature allows you to define as many function as you want in a single file. But for now, <span className='text-danger'>arrow function does not work</span> and <span className='text-danger'>you can't create parameter</span>. Any capital letter (which is invalid for minecraft function name) will be automatically be turn into lowercase, which means it is not case-sensitive. For example, <code className="code">deathMessage</code> is the same as <code className="code">deathmessage</code>.</p>
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
                        <Related setSearchValue={setSearchValue} to="/features/syntax#function_calling" text="Function Calling" />
                    </Feature>

                    <Feature id="function_calling" summary="Function Calling">
                        <p>Instead of using <code className="code">/function</code> command, you can use parentheses to call function instead and jmc will add namespace for you automatically. But unlike normal programming language, <span className="text-danger"> you can't pass any argument</span>. Any capital letter (which is invalid for minecraft function name) will be automatically be turn into lowercase, which means it is not case-sensitive. For example, <code className="code">deathMessage()</code> is the same as <code className="code">deathmessage()</code></p>
                        <CodeBlock code={`[<directory>.]<file_name>();`} language='javascript' />
                        <p className="fst-italic">Output: </p>
                        <CodeBlock code={`function namespace:[<directory>/]<file_name>`} language='elixir' />
                        <p className="fw-bold">Example: </p>
                        <CodeBlock code={`execute as @a run utils.chat.spamChat();`} language='elixir' />
                        <p className="fst-italic">Output: </p>
                        <CodeBlock code={`execute as @a run function namespace:utils/chat/spamchat`} language='elixir' />
                    </Feature>

                    <Feature id="anonymous_function" summary="Anonymous Function" keywords="arrow">
                        <p>The archnemesis of every coder is, indeed, naming things. Why bother creating a whole new function just to run a few commands as an entity. You are allowed to run multiple command in an execute chain.</p>
                        <CodeBlock code={`execute ... run {
    <command>;
    <command>;
    ...
}`} language='javascript' />
                        <p className="fst-italic">Output: </p>
                        <code className="code">__load__.mcfunction</code>
                        <CodeBlock code={`execute ... run function namespace:__private__/anonymous/0`} language='elixir' />
                        <code className="code">__private__/anonymous/0.mcfunction</code>
                        <CodeBlock code={`<command>;
<command>;
...`} language='javascript' />
                        <p className="fst-bold">Example: </p>
                        <CodeBlock code={`execute as @a at @s run {
    tp @s ~ ~1 ~;
    playsound entity.wither.spawn master @s ~ ~ ~ 1 2;
}`} language='javascript' />
                        <p className="fst-italic">Output: </p>
                        <code className="code">__load__.mcfunction</code>
                        <CodeBlock code={`execute as @a at @s run function namespace:__private__/anonymous/5`} language='elixir' startline={7} />
                        <code className="code">__private__/anonymous/5.mcfunction</code>
                        <CodeBlock code={`tp @s ~ ~1 ~
playsound entity.wither.spawn master @s ~ ~ ~ 1 2`} language='elixir' />
                    </Feature>

                    <Feature id="function_grouping" summary="Function Grouping" keywords="class">
                        <p>It simply add extra layers of directory/namespace to any function/new (Doesn't affect variable) inside it. Even though syntax use the word "class", <span className="text-danger">it is not a class</span>.</p>
                        <CodeBlock code={`class [<directory>.]<folder_name> {
    function [<directory>.]<file_name>() {
        <command>;
        <command>;
        ...
    }
    function [<directory>.]<file_name>() {
        <command>;
        <command>;
        ...
    }

    new <file_type>([<directory>.]<file_name>) <JSON content>

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
                        <code className="code">{`namespace/<file_type>/[<directory>/]<folder_name>/[<directory>/]<file_name>.json`}</code>
                        <CodeBlock code={`<JSON content>`} language='elixir' />
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`class foo {
    function bar() {
        <command>;
        <command>;
        ...
    }
    new advancements(bar) <JSON content>
}`} language='javascript' />
                        <p>is equivalent to</p>
                        <CodeBlock code={`function foo.bar() {
    <command>;
    <command>;
    ...
}
new advancements(foo.bar) <JSON content>`} language='javascript' />

                        <Related setSearchValue={setSearchValue} to="/features/syntax#function_defining" text='Function Defining' />
                        <Related setSearchValue={setSearchValue} to="/features/syntax#new" text='New keyword' />
                    </Feature>

                    <h2>Flow controls</h2>

                    <Feature id="condition" summary="Condition">
                        <p>A condition which can be used in flow controls as <code className="code">{`<condition>`}</code>. And due to minecraft command syntax which uses <code className="code">=</code> instead of <code className="code">==</code>, JMC will treat both as the same thing.</p>
                        <CodeBlock code={`$<variable> (>=|<=|=|==|>|<) <integer>
$<variable> (>=|<=|=|==|>|<) <variable> 
$<variable> (==|=) [<integer>]..[<integer>]`} language='javascript' />
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`if ($deathCount>5) {
    say "More than 5 death!"
}`} language='javascript' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#if_else' text='If/Else' />
                    </Feature>

                    <Feature id="logic_gate" summary="Logic Gate" keywords="and or not">
                        <p>In <code className="code">{`<condition>`}</code>. You are allowed to use some of logic gates.</p>
                        <details className='drop_down mb-3 ms-2'>
                            <summary>All available logic gate in order</summary>
                            <ol>
                                <li><code className="code">()</code></li>
                                <li><code className="code">||</code> (or)</li>
                                <li><code className="code">&&</code> (and)</li>
                                <li><code className="code">!</code> (not)</li>
                            </ol>
                        </details>
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`if (entity @s[type=skeleton] || (entity @s[type=zombie] && $deathCount>5)) {
    say "I'm either a zombie with more than 5 deaths or a skeleton."
}`} language='javascript' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#if_else' text='If/Else' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#condition' text='Condition' />
                    </Feature>

                    <Feature id="if_else" summary="If/Else">
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
                        <Related setSearchValue={setSearchValue} to='/features/syntax#function_defining' text='Function Defining' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#condition' text='Condition' />
                    </Feature>

                    <Feature id="while_loop" summary="While Loop">
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
                        <Related setSearchValue={setSearchValue} to='/features/syntax#condition' text='Condition' />
                    </Feature>

                    <Feature id="do_while_loop" summary="Do While Loop">
                        <p>Similar to while loop, but run the function for the first time before checking for condition. (<span className='text-danger'>Semicolons <code className="code">;</code> is required.</span>)</p>
                        <CodeBlock code={`do {
    <command>;
    <command>;
    ...
} while (<condition>);`} language='javascript' />
                        <p className="fs-italic">Output:</p>
                        <code className="code">__load__.mcfunction</code>
                        <CodeBlock code={`function namespace:__private__/do_while_loop/0`} language='elixir' />
                        <code className="code">__private__/do_while_loop/0.mcfunction</code>
                        <CodeBlock code={`<command>;
<command>;
...
execute if <condition> run function namespace:__private__/while_loop/0`} language='elixir' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#while_loop' text='While Loop' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#condition' text='Condition' />
                    </Feature>

                    <Feature id="for_loop" summary="For Loop">
                        <p>Simulate Javascript's <code className="code">for</code> loop. It consist of 3 statements.</p>
                        <ul>
                            <li><code className="code">{`let $<variable> = <integer>|$<variable>`}</code>is executed (one time) before the execution of the code block. And <span className="text-danger">must be variable assignment with integer/variable and nothing else</span>.</li>
                            <li><code className="code">{`<condition>`}</code>defines the condition for executing the code block.</li>
                            <li><code className="code">{`<statement>`}</code>is executed (every time) after the code block has been executed.</li>
                        </ul>
                        <p>Note that <code className="code">{`$<variable>`}</code> is similar to local scope. You cannot access it from outside the loop, and if you already declared/assign variable with the same name on global scope, local will take priority in the code block. <span className="text-danger">But if you nested for loop and create a variable with the same name, it'll all count as a single variable.</span></p>
                        <CodeBlock code={`for (let $<variable> = <integer>|$<variable>; <condition>; <statement>) {
  <command>;
  <command>;
  ...
}`} language='javascript' />
                        <p className="fst-italic">Output:</p>
                        <code className="code">__load__.mcfunction</code> {`(<integer>)`}
                        <CodeBlock code={`scoreboard players set $__private__.<variable> __variable__ <integer>
execute if <condition> run function namespace:__private__/for_loop/0`} language='elixir' />
                        <code className="code">__load__.mcfunction</code> {`($<variable>)`}
                        <CodeBlock code={`scoreboard players operation $__private__.<variable> __variable__ = $<variable> __variable__
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
                        <Related setSearchValue={setSearchValue} to='/features/built-in#to_string' text='toString()' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#condition' text='Condition' />
                    </Feature>

                    <h2>Creating JSON file</h2>

                    <Feature id="new" summary="New" keywords="json advancements item modifiers loot tables predicates structures tags world gen">
                        <p>Generate a formatted json file at desired directory under the type.</p>
                        <details className='drop_down mb-3 ms-2'>
                            <summary>Available type examples</summary>
                            <ol>
                                <li>advancements</li>
                                <li>item_modifiers</li>
                                <li>loot_tables</li>
                                <li>predicates</li>
                                <li>recipes</li>
                                <li>structures</li>
                                <li>tags.blocks</li>
                                <li>tags.entity_types</li>
                                <li>tags.fluids</li>
                                <li>tags.functions</li>
                                <li>tags.game_events</li>
                                <li>tags.items</li>
                            </ol>
                        </details>
                        <CodeBlock code={`new <file_type>([<directory>.]<file_name>) <JSON content>`} language='javascript' />
                        <p className="fst-italic">Output:</p>
                        <code className="code">{`namespace/<file_type>/[<directory>/]<file_name>.json`}</code>
                        <CodeBlock code={`<JSON content>`} language='elixir' />
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`new advancements(myDatapack.firstJoin) {
    "criteria": {
        "requirement": {
          "trigger": "minecraft:tick"
        }
    },
    "rewards": {"function": "namespace:mydatapack/rejoin/first_join"}                        
}`} language='javascript' />
                        <p className="fst-italic">Output:</p>
                        <code className="code">namespace/advancements/mydatapack/firstjoin.json</code>
                        <CodeBlock code={`{
    "criteria": {
        "requirement": {
          "trigger": "minecraft:tick"
        }
    },
    "rewards": {
        "function": "namespace:mydatapack/rejoin/first_join"
    }                        
}`} language='elixir' />
                        <Related setSearchValue={setSearchValue} to="/features/syntax#function_grouping" text='Function Grouping (Class)' />
                        <Related setSearchValue={setSearchValue} to='/features/syntax#condition' text='Condition' />
                    </Feature>
                </SearchContext.Provider>
            </div>
        </div >
    )
}

export default Syntax
