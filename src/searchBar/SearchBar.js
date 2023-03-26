import { React, useState } from 'react'
import { fetchCards } from '../redux/projectSlice';
import { useDispatch } from 'react-redux';
import "./searchBar.css"

export default function SearchBar() {
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch()

    function handleSearch() {
        if (userInput.length < 3) {
            alert("tooShort")
        } else {
            dispatch(fetchCards(userInput))
        }
    }

    return (
        <div className='search_bar'>
            <input type="text" placeholder="Начните вводить текст для поиска (не менее трех символов)" onChange={(e) => setUserInput(e.target.value)} />
            <button className="search-icon" onClick={handleSearch}></button>
        </div>
    )
}