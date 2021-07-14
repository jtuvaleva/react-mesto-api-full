import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize from '../utils/useWindowSize'
function Header({ userEmail, loggedIn, handleLogout, handleBurger, isBurgerOpened}) {
  const currentPage = useLocation();
  const pageLink = (currentPage.pathname==='/signin')? 'signup':'signin';
  const pageName = (currentPage.pathname==='/signin')? 'Регистрация':'Войти';
  let width = useWindowSize().width;

  return (
    <>
      <div className={`header__auth  header__auth_mobile ${isBurgerOpened ?'header__auth_mobile-opened': ''}`} >
      <p className="header__user-email">{userEmail} </p>
      <Link to="signin" 
        onClick={handleLogout}
        className="header__link header__link_logout"> Выйти</Link>
      </div>
    
    <header className="header">
      <div className="header__logo" />
      
      {(loggedIn===false)?(
          <div className="header__auth">
            <Link to={pageLink} className="header__link header__link_signup">{pageName}</Link>
          </div>
      ):(width>=767 & loggedIn===true)?(
          <div className="header__auth">
              <p className="header__user-email">{userEmail} </p>
              <Link to="signin" 
                onClick={handleLogout}
                className="header__link header__link_logout"> Выйти</Link>
          </div>
      ):(
          <div className="header__auth">
            <div className="header__burger" onClick={handleBurger}>
              <div className="header__burger-btn">
              </div>
            </div>
          </div>
          
      )}
    </header>
    </>
  );
}

export default Header;
