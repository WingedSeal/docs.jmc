//https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD
import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/';


const CodeBlock = (props) => {
    return (
        <>
            <SyntaxHighlighter language={props.language} style={a11yDark} className="rounded-3 mb-1" showLineNumbers startingLineNumber={props.startline}>
                {props.code}
            </SyntaxHighlighter>
            <CopyToClipboard text={props.code}>
                <Button className="btn btn-secondary">Copy</Button>
            </CopyToClipboard>
        </>

    )
}

CodeBlock.defaultProps = {
    startline: 1
}

CodeBlock.propTypes = {
    code: PropTypes.string,
    language: PropTypes.string
}

export default CodeBlock
