import React from 'react'

const Examples = () => {
    return (
        <div>
            <h1 className="fs-1 text-center text-md-start m-5 mb-5 fw-bolder">Examples</h1>
        <details className='feature'>
                    <summary>Particles Under Feet</summary>
                    <p>This code will create a datapack which will display red particles under a player when they run <code className="code">/function namespace:enable</code> and stop displaying particles when they run <code className="code">/function namespace:disable</code></p>
                    <p className="fw-bold">Example: </p>
                    <CodeBlock code={`function __tick__() {
    # Display particles at anyone who wants them;
    execute
        as @a[tag=particles]
        at @s
            run particle minecraft:dust 1 0 0 2 ~ ~ ~;
}

function enable() {
    if(entity @s[tag=particles]) {
        # If we already have particles displaying, then send a message
        tellraw @s "Particles are already displaying!";
    } else {
        # Give the player the particle effects
        tag @s add particles;
        tellraw @s "Now displaying particles under your feet!";
    }
}

function disable() {
    if(entity @s[tag=particles]){
        # Remove the tag
        tellraw @s "Particles will no longer display when you walk!";
        tag @s remove particles;
    } else {
        # Show a message to the player if particles arent displaying
        tellraw @s "Particles aren't displaying under your feet already!"; 
    }
}`} language='javascript' />
                </details>
        </div>
    )
}

export default Examples
