import React from 'react'
import Rate from '../Rate'
import './Header.css'

const Header = ({ setSearch, setSearchRate, searchRate }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Type movie name to search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Rate setSearchRate={setSearchRate} rating={searchRate} />
        </div>
    )
}

export default Header
