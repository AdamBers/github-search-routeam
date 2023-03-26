import React from 'react';
import "./card.css"

export default function Card({ card }) {

    return (
        <div className="card">
            <div className="card-title">{card.name}</div>
            <div className="card-author">
                <div className='author-avatar'>
                    <img src={card.owner.avatar_url} alt="avatar_img" />
                </div>
                <div className="author-name">
                    {card.owner.login}
                </div>
            </div>
            <div className="card-status">
                <div className="star">
                    <div className="star-img"></div>
                    <span>{card.stargazers_count}</span>
                </div>
                <div className="eye">
                    <div className="eye-img"></div>
                    <span>{card.watchers_count}</span>
                </div>
            </div>
            <div className="card-edit">
                <input type="text" placeholder='Комментарий к проекту' />
                <button className="edit"></button>
            </div>
        </div>
    )
}