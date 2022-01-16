import React from 'react'
import PropTypes from 'prop-types'
import './../App.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/';

//https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD

const CodeBlock = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={a11yDark} className="rounded-3" showLineNumbers>
            {code}
        </SyntaxHighlighter>
    )
}

CodeBlock.propTypes = {
    code: PropTypes.string,
    language: PropTypes.string
}

export default CodeBlock
