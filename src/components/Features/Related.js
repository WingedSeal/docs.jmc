import React from 'react'
import PropTypes from 'prop-types'
import { HashLink } from 'react-router-hash-link';

const Related = ({ text, to, setSearchValue }) => {
    return (
        <p><span className='fw-bold'>Related: </span><span className='fst-italic' onClick={(e) => { setSearchValue("") }}><HashLink smooth to={to} scroll={(el) => {
            el.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
        }}>{text}</HashLink></span></p>
    )
}

Related.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    setSearchValue: PropTypes.func
}

export default Related
