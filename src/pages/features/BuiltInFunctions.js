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
                    <p className="fst-italic">Output:</p>
                    <CodeBlock code={`{"score":{"name":"$<variable>","objective":"__variable__"},"key":value, "key":value, ...}`} language='json' />
                    <p className="fw-bold">Example:</p>
                    <CodeBlock code={`$deathCount.toString(color="red", bold=true)`} language='python' />
                    <p className="fst-italic">Output:</p>
                    <CodeBlock code={`{"score":{"name":"$deathCount","objective":"__variable__"},"color":"red","bold":true}`} language='json' />
                    <p className="fw-bold">Example:</p>
                    <CodeBlock code={`$deathCount.toString()`} language='python' />
                    <p className="fst-italic">Output:</p>
                    <CodeBlock code={`{"score":{"name":"$deathCount","objective":"__variable__"}}`} language='json' />
                </details>
                <section id="RightClick.setup()" />
                <details className='feature'>
                    <summary>RightClick.setup()</summary>
                    <p>Setup basic carrot_on_a_stick right click detection with selected item detection. You can map any id to a series of commands. When any player right click with the item, the command matching the id will be run. (ID can range from 0 to Java's long MAX_VALUE (9,223,372,036,854,775,807) <span className="text-danger">while ID 0 being default which will be run if player right click with *any* Carrot on a stick that doesn't have ID.</span>)</p>
                    <p>You are allowed to setup multiple times with different id_name but that isn't recommended due to optimization issue.</p>
                    <CodeBlock code={`RightClick.setup(<id_name>, {
    0: ()=>{
        <default_command>;
        <default_command>;
        ...
    }, // ID 0 is not required.                    
    <id1>: ()=>{
        <command>;
        <command>;
        ...
    },
    <id2>: ()=>{
        <command>;
        <command>;
        ...
    },
    ...
});`} language='javascript' />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`scoreboard objectives add __rc__ minecraft.used:minecraft.carrot_on_a_stick`} language='elixir' />
                    <code className="code">__tick__.mcfunction</code>
                    <CodeBlock code={`execute as @a[scores={__rc__=1..}] at @s run function default_namespace:__private__/rc_detection/main`} language='elixir' />
                    <code className="code">__private__/rc_detection/main.mcfunction</code>
                    <CodeBlock code={`scoreboard players reset @s __rc__
execute store result score __item_id__ __variable__ run data get entity @s SelectedItem.tag.<id_name>
execute if score __item_id__ __variable__ matches 0 run function namespace:__private__/rc_detection/0
execute if score __item_id__ __variable__ matches <id1> run function namespace:__private__/rc_detection/1
execute if score __item_id__ __variable__ matches <id1> run function namespace:__private__/rc_detection/2
...`} language='elixir' />
                    <code className="code">__private__/rc_detection/0.mcfunction</code>
                    <CodeBlock code={`<command>
<command>
...`} language='elixir' />
                    <code className="code">__private__/rc_detection/1.mcfunction</code>
                    <CodeBlock code={`<command>
<command>
...`} language='elixir' />
                    <code className="code">__private__/rc_detection/2.mcfunction</code>
                    <CodeBlock code={`<command>
<command>
...`} language='elixir' />
                    <p className="fw-bold">Example:</p>
                    <CodeBlock code={`let $count1;
let $count2;
RightClick.setup(
    custom_id,
    {
        1: ()=>{
            $count1++;
            tellraw @s [
                {
                    "text": "You have right clicked ",
                    "color": "gold"
                },
                $count1.toString(color="white"),
                {
                    "text": " times with ID 1.",
                    "color": "gold"
                }
            ];
        },
        2: ()=>{
            $count2++;
            tellraw @s [
                {
                    "text": "You have right clicked ",
                    "color": "gold"
                },
                $count2.toString(color="white"),
                {
                    "text": " times with ID 2.",
                    "color": "gold"
                }
            ];
        }
    }   
);
give @a carrot_on_a_stick{custom_id:1s};
give @a carrot_on_a_stick{custom_id:2s};`} language='javascript' />
                    <p className="fst-italic">Output:</p>
                    <code className="code">__load__.mcfunction</code>
                    <CodeBlock code={`scoreboard objectives add __rc__ minecraft.used:minecraft.carrot_on_a_stick

scoreboard players add $count1 __variable__ 0
scoreboard players add $count2 __variable__ 0

give @a carrot_on_a_stick{custom_id:1s}
give @a carrot_on_a_stick{custom_id:2s}`} language='elixir' />
                    <code className="code">__tick__.mcfunction</code>
                    <CodeBlock code={`execute as @a[scores={__rc__=1..}] at @s run function default_namespace:__private__/rc_detection/main`} language='elixir' />
                    <code className="code">__private__/rc_detection/main.mcfunction</code>
                    <CodeBlock code={`scoreboard players reset @s __rc__
execute store result score __item_id__ __variable__ run data get entity @s SelectedItem.tag.custom_id
execute if score __item_id__ __variable__ matches 1 run function default_namespace:__private__/rc_detection/0
execute if score __item_id__ __variable__ matches 2 run function default_namespace:__private__/rc_detection/1`} language='elixir' />
                    <code className="code">__private__/rc_detection/0.mcfunction</code>
                    <CodeBlock code={`scoreboard players operation $count1 __variable__ += 1 __int__
tellraw @s [ { "text": "You have right clicked ", "color": "gold" }, {"score":{"name":"$count1","objective":"__variable__"},"color":"white"}, { "text": " times with ID 1.", "color": "gold" } ]`} language='elixir' />
                    <code className="code">__private__/rc_detection/1.mcfunction</code>
                    <CodeBlock code={`scoreboard players operation $count2 __variable__ += 1 __int__
tellraw @s [ { "text": "You have right clicked ", "color": "gold" }, {"score":{"name":"$count2","objective":"__variable__"},"color":"white"}, { "text": " times with ID 2.", "color": "gold" } ]`} language='elixir' />
                    <Related to="/features/syntax#variable_declaration" text="Variable Declaration" />
                    <Related to="/features/built-in#to_string" text="toString()" />
                </details>
            </div>
        </div>

    )
}

export default BuiltInFunctions
