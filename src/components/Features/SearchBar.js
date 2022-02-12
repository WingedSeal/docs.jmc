import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ setSearchValue }) => {
    const inputRef = useRef();

    return (
        <div className="search-box">
            <div className="btn" onClick={(e) => {
                setSearchValue(inputRef.current.value)
            }}>
                <FontAwesomeIcon icon={faSearch} className="icon" />
            </div>
            <input ref={inputRef} className='input' type="text" placeholder="Search..." onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setSearchValue(e.target.value);
                }
            }} />
            <div className="clear" onClick={(e) => {
                inputRef.current.value = "";
                inputRef.current.focus();
                setSearchValue("");
            }}>
                <FontAwesomeIcon icon={faTimes} className="icon" />
            </div>
        </div>
    )
}


export default SearchBar