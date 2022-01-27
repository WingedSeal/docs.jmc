import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import { ListGroup, Badge, Button, Collapse, Card } from 'react-bootstrap'


// d-flex justify-content-between align-items-start
const GettingStarted = () => {
    const [openMainPy, setOpenMainPy] = useState(false);
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
                        <p>Then put <span className="fw-bold">JMC-Compiler.exe</span> in any directory, preferably, your datapack folder (The folder that will have <code className='code'>data</code> folder and <code className='code'>pack.mcmeta</code> inside. For example, <code className='code'>C:/Users/User/AppData/Roaming/.minecraft/profiles/1.17.1 Fabric/saves/JMC World/datapacks/My Datapack/JMC-Compiler.exe"</code>)</p>
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
sys.path.append(r'PATH_TO_FOLDER_HERE')  # noqa
import main  # type: ignore
main.main()`} language='python' />
                                <p>And replace <code className='code'>PATH_TO_FOLDER_HERE</code> with pure window path to <code className='code'>main.py</code>'s parent directory you downloaded. For example, if my main.py's path is <code className="code">D:/Users/User/Documents/GitHub/JMC/main.py</code></p>
                                <code className="code">run.py</code>
                                <CodeBlock code={`import sys
sys.path.append(r'D:/Users/User/Documents/GitHub/JMC')  # noqa
import main  # type: ignore
main.main()`} language='python' />
                            </div>
                        </Collapse>


                    </ListGroup.Item>
                </ListGroup>
                <h2>Usage</h2>
                <p>After you have finished installing the complier, you need a little bit of a setup.</p>
                <p>1. Run <code className="code">JMC-Compiler.exe</code> and it'll open a GUI. (If you are using executeable version, due to how PyInstaller works, it'll take a while (10-20 seconds) to boot up the GUI. Because the code isn't actually compiled, it just hide itself and when you open it, <code className="code">JMC-Compiler.exe</code> will create a temporary hidden folder to run the python code.)</p>
                <p>2. Configure settings through GUI</p>
                <p>3. Code your jmc file(s)</p>
                <p>4. Click <code className="code">Compile</code></p>
                <p>5. When you exit the program, it'll generate/update <code className="code">jmc_config.json</code> in the same directory</p>
                <h2>Programming</h2>
                <p>Now that you have learned how to setup the compiler, it's time to start programming. First, create <code className="code">main.jmc</code>. Then head to the <Link to='/features'>Features section</Link>~</p>
            </div >
        </div >
    )
}

export default GettingStarted

