import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards, setLoadingCount } from '../redux/projectSlice';
import './pagination.css'

export default function Pagination() {
    const [isHovering, setIsHovering] = useState(false);
    const dispatch = useDispatch()
    const loadingCount = useSelector(state => state.search.loadingCount)
    const cards = useSelector(state => state.search.cards.items)
    const loading = useSelector(state => state.search.loading)

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleClick = (count) => {
        dispatch(setLoadingCount(count))
        dispatch(fetchCards())
        setIsHovering(false)
    }
    return (
        <div className='pagination'>
            {(cards && !loading) && (
                <>
                    <div className="left"
                        onMouseEnter={() => handleMouseEnter()}
                        onMouseLeave={handleMouseLeave}>
                        <div className='loading_count'>
                            <div>{loadingCount}</div>
                            <div className='down'></div>
                        </div>
                        {isHovering && (<div className="chose_count">
                            <div onClick={() => handleClick(10)}>10</div>
                            <div onClick={() => handleClick(25)}>25</div>
                            <div onClick={() => handleClick(50)}>50</div>
                        </div>
                        )}
                    </div>
                    <div className="center"></div>
                    <div className="right"></div>
                </>
            )}
        </div >
    )
} 