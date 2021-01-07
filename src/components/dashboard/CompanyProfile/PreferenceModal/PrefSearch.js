import React, { useState } from 'react'
import '../ExperienceModal/inputSearch.css';

// Remove after rendering from backend
import { top100Films } from '../ExperienceModal/InputSearch';

function PrefSearch({ placeholder, set, pref, selectedTags }) {
    const [input, setInput] = useState('');
    const [blur, setBlur] = useState(false);
    const [suggestion, setSuggestion] = useState([])

    const handleClick = (input) => {
        top100Films.title = input;
        if(!pref.includes(input)){
            pref.unshift(input)
        }
        set([input, ...selectedTags]);
        console.log('clicked');
    }

    
    function autofill(word, arr) {
        var list = arr.filter(val => {
            if(val.toLowerCase().includes(word.toLowerCase())){
                return true
            }
        })
        console.log(list)
        setSuggestion(list);
    }

    return (
        <div className='prefSearch'>
            <input 
                type='text' 
                onChange={(e) => {
                    setInput(e.target.value)
                    autofill(e.target.value, pref)
                }} 
                onFocus={() => setBlur(false)} 
                onBlur={() => setTimeout(() => setBlur(true), 200)}
                value={input} 
                placeholder={placeholder} 
            />
            {input && !blur && 
                <div>
                    <span onClick={() => handleClick(input)}>{input}</span>
                    {suggestion.map(val => <span onClick={() => handleClick(val)}>{val}</span>)}
                </div>
            }
        </div>
    )
}

export default PrefSearch
