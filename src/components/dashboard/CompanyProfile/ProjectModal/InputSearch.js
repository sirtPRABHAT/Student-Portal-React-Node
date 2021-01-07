import React, { useEffect, useState } from 'react';
import './inputSearch.css';

// Delete after rendering from backend
import temp from '../../../images/newProfile/az-temp-icon.png';

function InputSearch({ setCompanyName, setCompanyImg, initValue }) {
    const [input, setInput] = useState('');
    const [blur, setBlur] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setCompanyName(initValue)
        setInput(initValue)
        console.log(initValue)
    }, [initValue])

    const handleInput = (e) => {
        setInput(e.target.value);
        const value = e.target.value;
        const suggetionsArr = top100Films.filter(film => film.title.toLowerCase().startsWith(value.toLowerCase()));
        setSuggestions(suggetionsArr);
        if(value === '') {
            setSuggestions([]);
        }
        
        // Used to check if input has an image
        const tf = top100Films.filter(film => film.title.toLowerCase() === value.toLowerCase());
        if(tf.length > 0) {
            setCompanyName(tf[0].title);
            setCompanyImg(tf[0].img);
        } else {
            setCompanyName(value);
            setCompanyImg(null);
        }
    }

    const handleClick = (title, img) => {
        setInput(title);
        setCompanyName(title);
        setCompanyImg(img);
        setBlur(true);
    }

    return (
        <div className='inputSearch'>
            <input 
                type='text' 
                onChange={handleInput} 
                onFocus={() => setBlur(false)}                 
                value={input} 
                placeholder='Example: Google, Facebook...' 
            />
            { suggestions.length > 0 && !blur &&
                <ul>
                    {suggestions?.map(films => (
                        <li onClick={() => handleClick(films.title, films.img)}> 
                            <img src={films.img} alt='imggg' style={{width: '40px'}} />
                            {films.title} 
                        </li>
                        ))}
                </ul>
            }
        </div>
    )
}

export const top100Films = [
    { title: 'The Shawshank Redemption', img: temp },
    { title: 'The Godfather', img: temp },
    { title: 'The Godfather: Part II', img: temp },
    { title: 'The Dark Knight', img: temp },
    { title: '12 Angry Men', img: temp },
    { title: "Google", img: temp },
    { title: 'Pulp Fiction', img: temp },
    { title: 'The Lord of the Rings: The Return of the King', img: temp },
    { title: 'The Good, the Bad and the Ugly', img: temp },
    { title: 'Fight Club', img: temp }
]

export default InputSearch
