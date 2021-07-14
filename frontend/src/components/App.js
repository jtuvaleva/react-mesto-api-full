import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import ImagePopup from './ImagePopup'
import ConfirmationPopup from './ConfirmationPopup'
import Register from './Register'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip'
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {api} from '../utils/api.js';
import {escKey} from '../utils/constant.js';
import * as auth from '../utils/auth'
import {Route, Switch, useHistory, Redirect } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner'

function App () {
  const [cardsList, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardDelete, setSelectedCardDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(null);
  const [isInfotooltipOpen, setisInfotooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();
  const [userEmail, setUserEmail] = useState(null);
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData.data);
        setCards(cardsData);
      })
      .catch((error) => console.log(error));
    }
  }, [loggedIn]);

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === escKey){
        closeAllPopups()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  },[])

  useEffect(() => {
    checkToken();
  },[])


  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleDeleteButtonClick (card) {
    setIsDeleteConfirmPopupOpen(true);
    setSelectedCardDelete(card);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);   
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsDeleteConfirmPopupOpen(false)
    setIsImagePopupOpen(false);
    setisInfotooltipOpen(false);
  }
  
  function handleUpdateUser (formData) {
    api.editProfileInfo(formData)
      .then((userData) => {
        //console.log('handleUpdateUser', userData.user);
        setCurrentUser(userData.user);
        setIsEditProfilePopupOpen(false)
       })
      .catch( (error) => {
          console.log(error);
      });
  }

  function handleUpdateAvatar (formLink) {
    api.editProfilePhoto(formLink)
      .then((userData) => {
        setCurrentUser(userData.user);
        setIsEditAvatarPopupOpen(false)
       })
      .catch( (error) => {
          console.log(error);
      });
  }

  function handleAddPlaceSubmit (cardForm) {
    api.addNewCard(cardForm)
      .then((newCard) => {
        setCards([newCard.card, ...cardsList]);
        setIsAddPlacePopupOpen(false)
       })
      .catch( (error) => {
          console.log(error);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
       .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard.card : c));
        })
       .catch( (error) => {
          console.log(error);
       });
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
        .then(() => {
            setCards((cards) => cards.filter((c) => c._id !== card._id));
            setIsDeleteConfirmPopupOpen(false);
        })
        .catch((error) => {
          console.log(error);
       });
  }

  function handleLogin ({email, password}){
    auth.authorize(email, password)
      .then(data => {
        if (data.token) {
          const jwt  = data.token;
          localStorage.setItem('jwt', jwt);
          setLoggedIn(true);
          setUserEmail(email);
          history.push('/');
        }
      })
      .catch(error => console.log(error));  
  }

  function handleRegister({password, email}) {
    auth.register(password, email)
      .then(res => {
        if (res){
          setIsSuccess(true)
          setisInfotooltipOpen(true);
          history.push('/signin');
        }
        
      })
      .catch(error => {
        setIsSuccess(false)
        setisInfotooltipOpen(true);
        console.log(error);
      })
  }

  
  function checkToken () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((data) => {
          if (data) {
            setUserEmail(data.data.email);
            setLoggedIn(true);
            history.push('/');
          }
        })
        .catch(error => console.log(error));
    } else {
      setLoggedIn(false);
    }
  }

  function handleLogout(e) {
    setUserEmail(null);
    setLoggedIn(false);
    setIsBurgerOpened(false);
    localStorage.removeItem('jwt');
    history.push('/signin');
  }

  if (loggedIn===null){
    return <LoadingSpinner/>
  }

  function handleBurger(e){
    
    const burgerBtn = e.target.parentElement;
    
    if(!isBurgerOpened) {
      burgerBtn.classList.add('header__burger_open');
      setIsBurgerOpened(true)
    } else {
      burgerBtn.classList.remove('header__burger_open');
      setIsBurgerOpened(false);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn}
                userEmail={userEmail}
                handleLogout={handleLogout}
                handleBurger={handleBurger}
                isBurgerOpened={isBurgerOpened}/>

        <Switch>
          { currentUser && <ProtectedRoute exact path="/"
                cards={cardsList}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteButtonClick}
                loggedIn={loggedIn}
                component={Main}/>}

        <Route path="/signup">
          <Register handleRegister={handleRegister}/>
        </Route>

        <Route path="/signin">
          <Login handleLogin={handleLogin}/>
        </Route>

        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>

        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} 
                          onClose={closeAllPopups} 
                          onUpdateUser={handleUpdateUser}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
                          onClose={closeAllPopups} 
                          onUpdateAvatar={handleUpdateAvatar}/> 

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}/>

        <ConfirmationPopup card = {selectedCardDelete}
                            isOpen={isDeleteConfirmPopupOpen}
                            onCardDelete={handleCardDelete}
                            onClose={closeAllPopups}/>

        <ImagePopup card={selectedCard} 
                    isOpen={isImagePopupOpen} 
                    onClose={closeAllPopups}/>

        
        <InfoTooltip isSuccess={isSuccess} 
                     isOpen={isInfotooltipOpen}
                     onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
