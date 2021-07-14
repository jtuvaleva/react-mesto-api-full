import React from 'react';
import PopupWithForm from './PopupWithForm'


function ConfirmationPopup ({card, isOpen, onClose, onCardDelete}) {

    function handleSubmit(e) {
        e.preventDefault();
        onCardDelete(card);
    }

    return (
        <PopupWithForm name='submit-delete' title='Вы уверены?'
                       isOpen={isOpen}
                       onClose={onClose}
                       onSubmit={handleSubmit}
                       buttonText='Да' />
    );
}

export default ConfirmationPopup