import { React } from 'react'
import { fetchCards } from '../redux/projectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setUserInput } from '../redux/projectSlice';
import "./searchBar.css"

export default function SearchBar() {
    const userInput = useSelector(state => state.search.userInput)
    const loadingCount = useSelector(state => state.search.loadingCount)
    const dispatch = useDispatch()

    function handleSearch() {
        if (userInput.length < 3) {
            alert("tooShort")
        } else {
            dispatch(setCurrentPage(1))
            dispatch(fetchCards({ userInput: userInput, loadingCount: loadingCount }))
        }
    }

    return (
        <div className='search_bar'>
            <input type="text" placeholder="Начните вводить текст для поиска (не менее трех символов)" value={userInput} onChange={(e) => dispatch(setUserInput(e.target.value))} />
            <button className="search-icon" onClick={handleSearch}></button>
        </div>
    )
}