import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import Related from '../../components/Features/Related'
import SearchBar from '../../components/Features/SearchBar'
import Feature, { SearchContext } from '../../components/Features/Feature'


const BuiltInFunctions = () => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div>
            <Link to="/features" className='text-decoration-none text-reset'><h1 className="fs-1 text-center text-md-start m-5 mb-0 fw-bolder">Features</h1></Link>
            <h2 className="fs-2 ms-5 mb-5 text-indent-2">Built-in Functions</h2>

            <SearchBar setSearchValue={setSearchValue} />


            <div className="paragraphs">
                <SearchContext.Provider value={searchValue}>

                    <Feature id="to_string" summary="toString()" keywords="tellraw json">
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
                    </Feature>

                    <Feature id="rightclick_setup" summary="RightClick.setup()" keywords="detect carrot">
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
                    </Feature>

                    <Feature id="math_sqrt" summary="Math.sqrt()" keywords="square root">
                        <p>Use <a href="https://en.wikipedia.org/wiki/Newton%27s_method">Newton–Raphson method</a> to perfectly calculate square root of any integer. And, like normal minecraft operators, this function will <a href='https://en.wikipedia.org/wiki/Floor_and_ceiling_functions'>floor</a> the result.</p>
                        <p>Don't get overwhelmed by how this function works, all you need to know is that it will calculate a square root of input variable and put put the result in output variable.</p>
                        <p>To get decimal places, simply multiply input by 10,000 before calling Math.sqrt then the last 2 digits (<code className='code'>sqrt(10000)=100</code>) of the output will be decimal places</p>
                        <CodeBlock code={`$<output: variable> = Math.sqrt($<input: variable>);`} language='javascript' />
                        <p className="fst-italic">Output:</p>
                        <code className="code">__load__.mcfunction</code>
                        <CodeBlock code={`scoreboard players operation __math__.N __variable__ = $<input> __variable__
function namespace:__private__/math/sqrt
scoreboard players operation $<output> __variable__ = __math__.x_n __variable__`} language='elixir' />
                        <code className="code">__private__/math/sqrt.mcfunction</code>
                        <CodeBlock code={`scoreboard players set __math__.x_n __variable__ 1225
function namespace:__private__/math/sqrt_newton_raphson
scoreboard players operation __math__.x_n_sq __variable__ = __math__.x_n __variable__
scoreboard players operation __math__.x_n_sq __variable__ *= __math__.x_n __variable__
execute if score __math__.x_n_sq __variable__ > __math__.N __variable__ run scoreboard players remove __math__.x_n __variable__ 1`} language='elixir' />
                        <code className="code">__private__/math/newton_raphson.mcfunction</code>
                        <CodeBlock code={`scoreboard players operation __math__.x __variable__ = __math__.x_n __variable__
scoreboard players operation __math__.x_n __variable__ = __math__.N __variable__
scoreboard players operation __math__.x_n __variable__ /= __math__.x __variable__
scoreboard players operation __math__.x_n __variable__ += __math__.x __variable__
scoreboard players operation __math__.x_n __variable__ /= 2 __int__
scoreboard players operation __math__.different __variable__ = __math__.x __variable__
scoreboard players operation __math__.different __variable__ -= __math__.x_n __variable__
execute unless score __math__.different __variable__ matches 0..1 run function namespace:__private__/math/sqrt_newton_raphson`} language='elixir' />
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`$var = 5000;
$result = Math.sqrt($var);
tellraw @a $result.toString();`} language='javascript' />
                        <p className="fst-italic">In-game Output:</p>
                        <p className="text-white bg-dark">70</p>
                        <Related to="/features/syntax#variable_assignment" text="Variable Assignment" />
                        <Related to="/features/built-in#to_string" text="toString()" />
                    </Feature>

                    <Feature id="hardcode_repeat" summary="Hardcode.repeat()">
                        <p>Some features in minecraft datapack require hard coding, this function will be a tool to help you.</p>
                        <CodeBlock code={`Hardcode.repeat("<index_string>", ()=>{
    <commands>;
    <commands>;
    ...
}, start=<start>, stop=<stop>, step=<step>);`} language='python' />
                        <p>Will repeat the command multiple times with <span className="fst-italic">index</span>.</p>
                        <p><span className="fst-italic">Index</span> in each repeat is calculated by <code className="code">{`<start> + (<step>*n)`}</code> starting at <code className="code">n=0</code> until <span className="fst-italic">index</span> is more than or equal to <code className="code">{`<stop>`}</code>.</p>
                        <p>Every single text inside the function that matches the <code className="code">index_string</code> you provided we be replaced with <span className="fst-italic">index</span>.</p>
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`Hardcode.repeat("index", ()=>{
    tellraw @a "Hello World: index";
}, start=1, stop=6, step=1);`} language='python' />
                        <p className="fst-italic">Output:</p>
                        <CodeBlock code={`tellraw @a "Hello World: 1"
tellraw @a "Hello World: 2"
tellraw @a "Hello World: 3"
tellraw @a "Hello World: 4"
tellraw @a "Hello World: 5"`} language='json' />
                        <Related to="/features/built-in#hardcode_calc" text="Hardcode.calc()" />
                    </Feature>

                    <Feature id="hardcode_calc" summary="Hardcode.calc()">
                        <p>Calculate expression inside. <span className="text-danger">This will only work in <code className="code">Hardcode.repeat()</code></span></p>
                        <CodeBlock code={`Hardcode.calc(<expression>)`} language='python' />
                        <details className='drop_down mb-3 ms-2'>
                            <summary>All available operators</summary>
                            <ol>
                                <li><code className="code">+</code> (add)</li>
                                <li><code className="code">-</code> (subtract)</li>
                                <li><code className="code">*</code> (multiply)</li>
                                <li><code className="code">/</code> (divide by)</li>
                                <li><code className="code">**</code> (power)</li>
                            </ol>
                        </details>
                        <p className="fw-bold">Example:</p>
                        <CodeBlock code={`Hardcode.repeat("index", ()=>{
    tellraw @a "index^2=Hardcode.calc(index**2)";
}, start=1, stop=6, step=1);`} language='js' />
                        <p className="fst-italic">Output:</p>
                        <CodeBlock code={`tellraw @a "1^2=1"
tellraw @a "2^2=4"
tellraw @a "3^2=9"
tellraw @a "4^2=16"
tellraw @a "5^2=25"`} language='elixir' />
                        <Related to="/features/built-in#hardcode_repeat" text="Hardcode.repeat()" />
                    </Feature>

                    <Feature id="player_first_join" summary="Player.firstJoin()">
                        <p>Run commands inside when a player join the world for the first time. <span className="text-danger">Revoking all advancements will cause this to be called again. You can use tag system if you don't want this behavior.</span></p>
                        <CodeBlock code={`Player.firstJoin(()=>{
    <command>;
    <command>;
    ...
});`} language='js' />
                        <p className="fst-italic">Output:</p>
                        <code className="code">advancements/__private__/player_first_join/0.json</code>
                        <CodeBlock code={`{
    "criteria": {
        "requirement": {
        "trigger": "minecraft:tick"
        }
    },
    "rewards": {
        "function": "namespace:__private__/player_first_join/0"
    }
}`} language='json' />
                        <code className="code">__private__/player_first_join/0.mcfunction</code>
                        <CodeBlock code={`<command>;
<command>
...`} language='elixir' />
                        <Related to="/features/built-in#player_rejoin" text="Player.rejoin()" />
                    </Feature>

                    <Feature id="player_rejoin" summary="Player.rejoin()" keywords="leave">
                        <p>Run commands inside when a player leave a world then join back. <span className='text-danger'>Will not run when player join the world for the first time.</span></p>
                        <CodeBlock code={`Player.rejoin(()=>{
    <command>;
    <command>;
    ...
});`} language='js' />
                        <p className="fst-italic">Output:</p>
                        <code className="code">__load__.mcfunction</code>
                        <CodeBlock code={`scoreboard objectives add __rejoin__ minecraft.custom:minecraft.leave_game`} language='elixir' />
                        <code className="code">__tick__.mcfunction</code>
                        <CodeBlock code={`execute as @a[scores={__rejoin__=1..}] at @s run function namespace:__private__/player_rejoin/main`} language='elixir' />
                        <code className="code">__private__/player_rejoin/main.mcfunction</code>
                        <CodeBlock code={`scoreboard players reset @s __rejoin__
function namespace:__private__/player_rejoin/0`} language='elixir' />
                        <code className="code">__private__/player_rejoin/0.mcfunction</code>
                        <CodeBlock code={`<command>;
<command>
...`} language='elixir' />

                        <Related to="/features/built-in#player_first_join" text="Player.firstJoin()" />
                    </Feature>
                </SearchContext.Provider>
            </div>
        </div >

    )
}

export default BuiltInFunctions
