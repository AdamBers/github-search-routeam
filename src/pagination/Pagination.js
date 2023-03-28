import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingCount } from '../redux/projectSlice';
import { setCurrentPage } from '../redux/projectSlice';
import './pagination.css'

export default function Pagination() {
    const [isHovering, setIsHovering] = useState(false);
    const currentPage = useSelector(state => state.search.currentPage)
    const dispatch = useDispatch()
    const loadingCount = useSelector(state => state.search.loadingCount)
    const cards = useSelector(state => state.search.cards.items)
    const loading = useSelector(state => state.search.loading)


    let buttonsCount = []
    if (cards) {
        buttonsCount = new Array(Math.ceil(cards.length / loadingCount)).fill("")
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleClick = (count) => {
        dispatch(setLoadingCount(count))
        dispatch(setCurrentPage(1))
        setIsHovering(false)
    }

    const hanleRightClick = () => {
        if (currentPage < buttonsCount.length) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    const handleLeftClick = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1))
        }
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
                    <div className="center">
                        <div className='left-arrow' onClick={handleLeftClick}></div>
                        {buttonsCount.map(function (_, index) {
                            return ([
                                <div
                                    className={currentPage - 1 === index ? 'pagination-button active' : 'pagination-button'}
                                    key={index}
                                    onClick={() => dispatch(setCurrentPage(index + 1))}
                                >
                                    {index + 1}
                                </div>
                            ]);
                        })}
                        <div className='right-arrow' onClick={hanleRightClick}></div>
                    </div>
                    <div className="right"></div>
                </>
            )
            }
        </div >
    )
} 