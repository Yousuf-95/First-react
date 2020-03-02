import React from 'react';

import './searchbox.css';

export const SearchBox = ({ placeHolder, handleChange}) => (
    <input className = "search" 
    type = "text" 
    placeholder = {placeHolder} 
    onChange = { handleChange }
    />
)