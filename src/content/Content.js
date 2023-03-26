import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import "./content.css"

export default function Content() {
    const cards = useSelector(state => state.search.cards.items)
    const loading = useSelector(state => state.search.loading)
    return (
        <div className="content">
            {loading && <div className='spinner'>Поиск проектов...</div>}
            {(cards && !loading) && cards.map((item) => <Card card={item} key={item.id} />)}
        </div>
    )
}