import React from 'react';

function InfoTooltip({isSuccess, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_infotooltip ${isOpen? 'popup_opened': ''}`}>
    <div className="popup__overlay" onClick={onClose}></div>
    <div className="popup__container">
        <button type="button" className='popup__close-btn popup__close-btn_area_infotooltip'
        aria-label="кнопка-закрыть" onClick={onClose}/>
        <div className="popup__signup">
          <div className={`popup__signup-image ${isSuccess ?'popup__signup-image_success': 'popup__signup-image_error'}`}></div>
          {isSuccess ? (
            <p className="popup__signup-text">Вы успешно зарегистрировались!</p>
          ) : (
            <p className="popup__signup-text">Что-то пошло не так! Попробуйте ещё раз.</p>
          )
          }
        </div>
    </div>
</div>
  );
}

export default InfoTooltip;

