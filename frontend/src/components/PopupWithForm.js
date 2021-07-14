function PopupWithForm({name, title, isOpen, onClose, onSubmit, children, buttonText}){
    
    return (
    <div className={`popup popup_type_${name} ${isOpen ?'popup_opened': ''}`}>
        <div className="popup__overlay" onClick={onClose}></div>
        <div className="popup__container">
            <button type="button" className={`popup__close-btn popup__close-btn_area_${name}`}
            onClick = {onClose}
            aria-label="кнопка-закрыть"/>
            <h3 className="popup__name">{title}</h3>
            <form className="popup__form" name={`${name}-form`} 
                  noValidate onSubmit={onSubmit}>
                {children}
                <button type="submit" aria-label={`кнопка-${buttonText}`}
                  className="popup__submit-btn"
                  value={buttonText}>{buttonText}
                </button>
            </form>
        </div>
    </div>
    );
  } 

export default PopupWithForm
