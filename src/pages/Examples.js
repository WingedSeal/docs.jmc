import React, { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import SearchBar from '../components/Features/SearchBar'
import Feature, { SearchContext } from '../components/Features/Feature'

const Examples = () => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div>
            <h1 className="fs-1 text-center text-md-start m-5 fw-bolder">Examples</h1>

            <SearchBar setSearchValue={setSearchValue} />

            <div className="paragraphs">
                <SearchContext.Provider value={searchValue}>

                    <h2>Basic Examples</h2>

                    <Feature id="randomize_health" summary={"Randomize Health"} keywords="hp">
                        <p>Set player's health permanently to a randomized number between 1 and 30.</p>
                        <CodeBlock code={`Player.firstJoin(()=>{
    $hp = Math.random(1,30);
    setHealth();
    tellraw @s [
        {"text":"Welcome! ", "color":"gold"},
        {"text":"You have ", "color":"white"},
        $hp.toString(color="red"),
        {"text":"hp.", "color":"red"}
    ];
    scoreboard players operation @s random_health = $hp __variable__;
});

Player.die(onRespawn=()=>{
    scoreboard players operation $hp __variable__ = @s random_health;
    setHealth();
});

function setHealth() {
    Hardcode.switch($hp, "index", ()=>{
        attribute @s minecraft:generic.max_health base set index;
    }, count=30);
    effect give @s minecraft:instant_health 1 255 true;
    effect give @s minecraft:regeneration 1 255 true;
}

scoreboard objectives add random_health dummy;`} language='javascript' />
                    </Feature>

                    <Feature id="player_id" summary={"Player ID"} keywords="uuid unique">
                        <p>Give all players a unique Player ID.</p>
                        <CodeBlock code={`let $max_id;
scoreboard objectives add player_id dummy;
Player.firstJoin(()=>{
    if (!score @s player_id matches 0..) {
        scoreboard players operation @s player_id = $max_id __variable__;
        $max_id++;
    }
});
`} language='elixir' />
                    </Feature>

                    <h2>Advance Examples</h2>

                    <Feature id="NONE" summary={"ADVANCE EXAMPLE"} keywords="" wip>
                        <p>Works In Progress</p>
                    </Feature>

                    <h2>Submited Examples</h2>

                    <Feature id="particles_under_feet" summary={"Particles Under Feet by Silabear"} keywords="if function">
                        <p>Credit: <a href="https://www.planetminecraft.com/member/silabear">Silabear</a></p>
                        <p>This code will create a datapack which will display red particles under a player when they run <code className="code">/function namespace:enable</code> and stop displaying particles when they run <code className="code">/function namespace:disable</code></p>
                        <CodeBlock code={`function __tick__() {
    // Display particles at anyone who wants them;
    execute
        as @a[tag=particles]
        at @s
            run particle minecraft:dust 1 0 0 2 ~ ~ ~;
}

function enable() {
    if(entity @s[tag=particles]) {
        // If we already have particles displaying, then send a message
        tellraw @s "Particles are already displaying!";
    } else {
        // Give the player the particle effects
        tag @s add particles;
        tellraw @s "Now displaying particles under your feet!";
    }
}

function disable() {
    if(entity @s[tag=particles]){
        // Remove the tag
        tellraw @s "Particles will no longer display when you walk!";
        tag @s remove particles;
    } else {
        // Show a message to the player if particles arent displaying
        tellraw @s "Particles aren't displaying under your feet already!"; 
    }
}`} language='javascript' />
                    </Feature>
                </SearchContext.Provider>
            </div>

        </div>
    )
}

export default Examples
