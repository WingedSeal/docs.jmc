import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CodeBlock from '../components/CodeBlock'
import { ListGroup, Badge, Button, Collapse, Card } from 'react-bootstrap'
import './../App.scss'


// d-flex justify-content-between align-items-start
const GettingStarted = ({ setNavActive }) => {
    const [openMainPy, setOpenMainPy] = useState(false);
    const [openConfig, setOpenConfig] = useState(false);
    return (
        <div>
            <div className="paragraphs">
                <h2>Installation</h2>
                <p>Before you starting coding, let's download the compiler first. You have 2 choices here, </p>
                <ListGroup as="ol" className='m-3'>
                    <ListGroup.Item as="li" className="fs-5 d-flex flex-column">
                        <div className="d-flex align-items-baseline flex-wrap-reverse justify-content-center justify-content-sm-between">
                            <div className="fw-bold mb-2 me-1 fs-4">Executable Version</div>
                            <Badge variant="primary" pill className='fs-5 ms-1'>Recommended</Badge>
                        </div>
                        <p>Simply download <a href="https://github.com/WingedSeal/jmc/releases/latest/download/JMC-Compiler.exe" rel="noopener noreferrer">JMC-compiler.exe</a> from
                            Github. (Or find a latest pre-release version <a href="https://github.com/WingedSeal/jmc/releases" target="_blank" rel="noopener noreferrer">here</a>.)</p>
                        <p>Then put <span className="fw-bold">JMC-Compiler.exe</span> in any directory, preferably, your datapack folder (The folder that will have <code className='code'>data</code> folder and <code className='code'>pack.mcmeta</code> inside. For example, <code className='code'>C:/Users/User/AppData/Roaming/.minecraft/profiles/1.17.1 Fabric/saves/JMC World\datapacks\My Datapack\JMC-Compiler.exe"</code>)</p>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="fs-5 d-flex flex-column">
                        <div className="d-flex align-items-baseline flex-wrap-reverse justify-content-center justify-content-sm-between">
                            <div className="fw-bold mb-2 me-1 fs-4">Python Version</div>
                        </div>
                        <p>1. Download Soure Code from <a href="https://github.com/WingedSeal/jmc/releases/latest" target="_blank" rel="noopener noreferrer">latest release</a>. (Or download ZIP/Clone <a href="https://github.com/WingedSeal/jmc" target="_blank" rel="noopener noreferrer">repository</a> from github)</p>
                        <p>2. (Optional, If you would like to have all libraries in global, you can skip this step) Create a virtual environment for python (<code className='code'>python -m venv venv</code>) and then activate. (For example, <code className='code'>venv\Scripts\activate</code>)</p>
                        <p>3. Install libraries from requirements.txt using <code className='code'>pip install -r requirements.txt</code></p>
                        <p>4. Run <code className='code'>main.py</code>, This will behave exactly like Executable Version (<code className='code'>JMC-Compiler.exe</code>)</p>
                        <Button
                            className="btn btn-secondary mt-2 align-items-start me-auto"
                            onClick={() => setOpenMainPy(!openMainPy)}
                            aria-controls="move_main_py"
                            aria-expanded={openMainPy}
                        >
                            If you prefer to have main.py elsewhere without moving the entire folder
                        </Button>
                        <Collapse in={openMainPy}>
                            <div id="move_main_py" className='m-2'>
                                <p>Create a <code className='code'>.py</code> file at the desired directory then insert the following code (The file name cannot be <code className='code'>main.py</code>)</p>
                                <CodeBlock code={`import sys
sys.path.append('PATH_TO_FOLDER_HERE')  # noqa
import main  # type: ignore
main.main()`} language='python' />
                                <p>And replace <code className='code'>PATH_TO_FOLDER_HERE</code> with pure window path to <code className='code'>main.py</code>'s parent directory you downloaded. For example, if my main.py's path is <code className="code">D:/Users/User/Documents/GitHub/JMC/main.py</code></p>
                                <code className="code">run.py</code>
                                <CodeBlock code={`import sys
sys.path.append('D:/Users/User/Documents/GitHub/JMC')  # noqa
import main  # type: ignore
main.main()`} language='python' />
                            </div>
                        </Collapse>


                    </ListGroup.Item>
                </ListGroup>
                <h2>Usage</h2>
                <p>After you have finished installing the complier, you need a little bit of a setup.</p>
                <p>1. Run <code className="code">JMC-Compiler.exe</code> and it'll automatically generate <code className="code">jmc.config</code> in the same directory it's in.</p>
                <p>2. Edit <Button
                    className="btn-secondary btn-mini p-1"
                    onClick={() => setOpenConfig(!openConfig)}
                    aria-controls="config"
                    aria-expanded={openConfig}
                >
                    configurations
                </Button> in <code className="code">jmc.config</code></p>
                <Collapse in={openConfig}>
                    <div id="config" className='m-2'>
                        <Card style={{ width: 'calc(100%)' }}>
                            <Card.Body>
                                <Card.Title className='fs-4'>Configurations</Card.Title>
                                <p><code className="code">"namespace"</code> : Namespace of your datapack.</p>
                                <p><code className="code">"description"</code> : Description of your datapack.</p>
                                <p><code className="code">"pack_format"</code> : Packformat of your datapack. This will be in <code className="code">pack.mcmeta</code>.</p>
                                <p><code className="code">"target_file"</code> : Path to your main <code className="code">.jmc</code> file.</p>
                                <p><code className="code">"output"</code> : Path to directory of your compiled datapack.</p>
                                <p><code className="code">"keep_compiling"</code> : Whether or not to end the program after compiling. If set to <code className="code">true</code>, it'll keep recompiling until you exit the program with pauses between them.</p>
                                <p><code className="code">"debug_mode"</code> : If set to <code className="code">true</code>, change logging level to DEBUG and create log file on run.</p>
                                <h5>Default</h5>
                                <CodeBlock code={`{
  "namespace": "namespace",
  "description": "Compiled by JMC by WingedSeal",
  "pack_format": 7,
  "target_file": "PROGRAM_PATH/main.jmc",
  "output": "PROGRAM_PATH",
  "keep_compiling": false,
  "debug_mode": false
}`} language='json' />
                            </Card.Body>
                        </Card>
                    </div>
                </Collapse>
                <p>3. Code your jmc file(s)</p>
                <p>4. Run <code className="code">JMC-Compiler.exe</code> again</p>
            </div >
        </div >
    )
}

GettingStarted.propTypes = {
    setNavActive: PropTypes.func
}

export default GettingStarted

