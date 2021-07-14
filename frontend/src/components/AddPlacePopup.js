import React from 'react';
import PopupWithForm from './PopupWithForm'


function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
    const [cardData, setCardData] = React.useState({
      name: '',
      link: '',
    })
  
    function handleChange(e) {
      const {name, value} = e.target;
      setCardData({
        ...cardData,
        [name]:value
      })
    }

    function clearInputLink() {
      cardData.name = '';
      cardData.link = '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
          name: cardData.name, 
          link: cardData.link, 
        });
        clearInputLink();
    }

    return (
        <PopupWithForm name='cards' title='Новое место' 
                      isOpen = {isOpen}
                      onClose={onClose}
                      onSubmit={handleSubmit}
                      buttonText='Создать'>

          <input type="text" placeholder="Название" id="cardName" name="name" 
            className="popup__form-input popup__form-input_field_image-name" 
            required minLength="2" maxLength="30"
            value={cardData.name} onChange={handleChange}/>
          <span className="popup__form-error cardName-error"></span>
          <input required type="url" placeholder="Ссылка на картинку" id="cardLink" name="link" 
            className="popup__form-input popup__form-input_field_image-src"
            value={cardData.link} onChange={handleChange}/>
          <span className="popup__form-error cardLink-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup
