import React from 'react';
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onUpdateUser}){
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser, isOpen]);


    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateUser({
          name,
          about: description,
        });
    }

    return (
        <PopupWithForm name='profile' title='Редактировать профиль' 
                        isOpen={isOpen} 
                        onClose={onClose}
                        onSubmit={handleSubmit}
                        buttonText='Сохранить'>
            <input type="text" placeholder="Имя" name="name" id="name" 
              className="popup__form-input popup__form-input_field_name" 
              required minLength="2" maxLength="40"
              value={name} onChange={handleChangeName}/>
            <span className="popup__form-error name-error"></span>
            <input type="text" placeholder="О Себе" name="about" id="about" 
              className="popup__form-input popup__form-input_field_bio"
              required minLength="2" maxLength="200" 
              value={description}
              onChange={handleChangeDescription}/>
            <span className="popup__form-error about-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup