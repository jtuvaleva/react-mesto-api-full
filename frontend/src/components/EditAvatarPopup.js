import React from 'react';
import PopupWithForm from './PopupWithForm'


function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef();


    function clearInputLink() {
        avatarRef.current.value = '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value
        });
        clearInputLink();
    }

    return (
        <PopupWithForm name='avatar' title='Обновить аватар' 
                        isOpen={isOpen}
                        onClose={onClose}
                        onSubmit={handleSubmit}
                        buttonText='Сохранить'>

            <input ref={avatarRef} type="url" placeholder="Ссылка на фотографию" id="link" name="link" 
                className="popup__form-input popup__form-input_field_avatar" required/>
            <span className="popup__form-error link-error"></span>
          </PopupWithForm>
    );
}

export default EditAvatarPopup

