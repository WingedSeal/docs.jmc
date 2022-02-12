import React, { useContext } from 'react'
import PropTypes from 'prop-types'

export const SearchContext = React.createContext()

const isDisplay = (summary, searchValue) => {
    if (searchValue === "") {
        return "block"
    }
    if (summary.toLowerCase().includes(searchValue.toLowerCase())) {
        return "block"
    }

    let terms = searchValue.match(/(?:[^\s"]+|"[^"]*")+/g); // Split searchValue into multiple terms
    if (terms === null) {
        terms = [searchValue];
    }

    for (let i = 0; i < terms.length; i++) {
        let value = terms[i]

        if (value.length > 1 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
            value = value.substring(1, value.length - 1);
        }
        if (summary.toLowerCase().includes(value.toLowerCase())) {
            return "block"
        }
    }
    return "none"
}

const Feature = (props) => {
    const searchValue = useContext(SearchContext);
    return <div style={{ display: isDisplay(props.summary, searchValue) }}>
        <section id={props.id} />
        <details className={props.wip ? 'feature not-done' : 'feature'}>
            <summary>{props.summary}</summary>
            {props.children}
        </details>
    </div>
}

Function.propTypes = {
    id: PropTypes.string,
    summary: PropTypes.string,
    wip: PropTypes.bool
}
Function.defaultProps = {
    wip: false
}
export default Feature
