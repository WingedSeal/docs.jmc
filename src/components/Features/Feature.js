import React, { useContext } from 'react'
import PropTypes from 'prop-types'

export const SearchContext = React.createContext()

const isDisplay = (summary, searchValue, keywords) => {
    summary = summary.toLowerCase()
    if (searchValue === "") {
        return "block"
    }
    if (summary.includes(searchValue.toLowerCase())) {
        return "block"
    }

    let terms = searchValue.match(/(?:[^\s"]+|"[^"]*")+/g); // Split searchValue into multiple terms
    if (terms === null) {
        terms = [searchValue];
    }

    for (let i = 0; i < terms.length; i++) {
        let value = terms[i].toLowerCase()

        if (value.length > 1 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
            value = value.substring(1, value.length - 1);
            if (summary.includes(value)) {
                return "block"
            }
        } else {
            if (summary.includes(value)) {
                return "block"
            }
            if (keywords.includes(value)) {
                return "block"
            }
        }

    }
    return "none"
}

const Feature = (props) => {
    const searchValue = useContext(SearchContext);
    return <div style={{ display: isDisplay(props.summary, searchValue, props.keywords) }}>
        <section id={props.id} />
        <details className={props.wip ? 'feature not-done' : 'feature'} id={props.id} >
            <summary>{props.summary}</summary>
            {props.children}
        </details>
    </div>
}

Feature.propTypes = {
    id: PropTypes.string,
    summary: PropTypes.string,
    wip: PropTypes.bool,
    keywords: PropTypes.string
}
Feature.defaultProps = {
    keywords: "",
    wip: false
}
export default Feature
