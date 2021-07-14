import React from 'react';

function ImagePopup ({card, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_image ${isOpen? 'popup_opened': ''}`}>
            <div className="popup__overlay" onClick={onClose}></div>
            <div className="popup__image-container">
                <button type="button" className='popup__close-btn popup__close-btn_area_image'
                aria-label="кнопка-закрыть" onClick={onClose}/>
                <figure className="popup__image">
                    <img src={card?.link} alt={card?.name} className="popup__image-content" />
                    <figcaption className="popup__image-caption">{card?.name}</figcaption>
                </figure>
            </div>
        </div>
      );
  } 

export default ImagePopup

