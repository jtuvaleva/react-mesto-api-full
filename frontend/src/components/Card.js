import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card ({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(i => i === currentUser._id);

    const cardDeleteButtonClassName = (
        `cards__delete-btn ${isOwn ? 'cards__delete-btn_visible' : ''}`
      );

    const cardLikeButtonClassName = (
        `cards__like ${isLiked ? 'cards__like_active' : ''}`
      );


    function handleClick() {
        onCardClick(card);
    }  

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }
    return (
        <li className="cards__item">
            <button type="button" aria-label="кнопка-удалить" 
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}></button>
            <img src={card.link} alt={card.name} 
                    onClick={handleClick}
                    className="cards__image"/>
            <div className="cards__elements">
                <h2 className="cards__text">{card.name}</h2>
                <div className="card__like-area">
                    <button type="button" aria-label="кнопка-лайк" 
                            className={cardLikeButtonClassName} 
                            onClick={handleLikeClick}>
                    </button>
                    <p className="cards__like-number">{card.likes.length}</p>
                </div>
            </div>
        </li>
      );
  } 

export default Card