import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import Pagination from "../pagination/Pagination"
import "./content.css"

export default function Content() {
    const cards = useSelector(state => state.search.cards.items)
    const loading = useSelector(state => state.search.loading)
    const loadingCount = useSelector(state => state.search.loadingCount)
    const currentPage = useSelector(state => state.search.currentPage)

    var currentCards = []
    if (cards) {
        currentCards = cards.slice((currentPage - 1) * loadingCount, currentPage * loadingCount)
    }
    // console.log(currentCards)

    return (
        <>
            <div className="content">
                {loading && <div className='spinner'>Поиск проектов...</div>}
                {(currentCards.length > 0 && !loading) && currentCards.map((item, index) => <Card card={item} key={item.id} index={index} />)}
            </div>
            <Pagination />
        </>
    )
}