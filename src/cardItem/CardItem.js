import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Card from '../card/Card'
import './cardItem.css'

export default function CardItem() {
    const currentItemID = useSelector(state => state.search.currentItemID)
    const card = useSelector(state => state.search.cards.items[currentItemID])

    return (
        <div className='content cardItem'>
            <Card card={card} />
        </div>
    )
}
