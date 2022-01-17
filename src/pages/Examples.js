import React from 'react'
import CodeBlock from '../components/CodeBlock'
import Related from '../components/Features/Related'

const Examples = () => {
    return (
        <div>
            <h1 className="fs-1 text-center text-md-start m-5 mb-5 fw-bolder">Examples</h1>

            <div className="paragraphs">
                <h2>Basic Examples</h2>

                <details className='feature not-done'>
                    <summary>BASIC EXAMPLE</summary>
                    <p>Works In Progress</p>
                </details>

                <h2>Advance Examples</h2>

                <details className='feature not-done'>
                    <summary>ADVANCE EXAMPLE</summary>
                    <p>Works In Progress</p>
                </details>

                <h2>Submited Examples</h2>

                <details className='feature'>
                    <summary>Particles Under Feet by <a href="https://www.planetminecraft.com/member/silabear">Silabear</a></summary>
                    <p>This code will create a datapack which will display red particles under a player when they run <code className="code">/function namespace:enable</code> and stop displaying particles when they run <code className="code">/function namespace:disable</code></p>
                    <p className="fw-bold">Example: </p>
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
        # Give the player the particle effects
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
                    <Related to='/features/syntax#function_defining' text='Function Defining' />
                    <Related to='/features/syntax#if_else' text='If/Else' />
                    <Related to='/features#comment' text='Comment' />
                    <Related to='/features#multiline_Command' text='Multiline Command' />
                </details>
            </div>

        </div>
    )
}

export default Examples
