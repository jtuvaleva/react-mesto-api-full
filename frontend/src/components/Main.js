import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from './Card'

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
        <section className="profile">
            <div className = "profile__photo-area">
            <img src={currentUser.avatar} alt="Фото профиля" className="profile__photo" />
            <button type="button" aria-label="кнопка-добавить" 
                    className="profile__edtn-button profile__edtn-button_photo"
                    onClick={onEditAvatar}/>
            </div>
            
            <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" aria-label="кнопка-редактировать" 
                    className="profile__edtn-button profile__edtn-button_info"
                    onClick={onEditProfile}/>
            <p className = "profile__bio">{currentUser.about}</p>
            </div>

            <button type="button" aria-label="кнопка-добавить" 
                    className="profile__add-button"
                    onClick={onAddPlace}/>
        </section>

        <section className="photo-grid">
            <ul className="cards">
                {cards.map((card) => (
                    <Card key={card._id} card={card} 
                          onCardClick={onCardClick}
                          onCardLike={onCardLike}
                          onCardDelete={onCardDelete}/>)
                )}
            </ul>
        </section>
    </main>
  );
}
export default Main;