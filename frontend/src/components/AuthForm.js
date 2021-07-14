import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AuthForm({email, password, handleChange, handleSubmit}) {
    const currentPage = useLocation().pathname;
    const formTitle = (currentPage==='/signin')?'Войти':'Регистрация';
    const buttonName = (currentPage==='/signin')? 'Войти':'Зарегистрироваться';
    
    const redirectText = (currentPage==='/signin')? 'Еще не зарегистрированы? Зарегистрироваться'
                                                  : 'Уже зарегистрированы? Войти';
    const redirectLink = (currentPage==='/signin')?'signup':'signin';

    return (
        <div className="login-signup">
        <h3 className="login-signup__title">
            {formTitle}
        </h3>
        <form className="login-signup__form" name='login-signup-form' onSubmit={handleSubmit}>
            
            <input required type="email" placeholder="Email" id="email" name="email" 
                className="login-signup__form-input login-signup__form-input_field_email" 
                minLength="2" autoComplete="off"
                value={email} onChange={handleChange}/>
            <span className="login-signup__form-error email-error"></span>
            <input required type="password" placeholder="Пароль" id="password" name="password" 
                className="login-signup__form-input login-signup__form-input_field_password" 
                autoComplete="off"
                value={password} onChange={handleChange}/>
            <span className="login-signup__form-error password-error"></span>

            <button type="submit" aria-label="кнопка-Зарегистрироваться"
                className="login-signup__submit-btn">{buttonName}
            </button>
            <div className="login-signup__login-area">
                <Link to={redirectLink} className="login-signup__login-area login-signup__link">
                    {redirectText}
                </Link>
            </div>
        </form>
        </div>
    )
}

export default AuthForm;