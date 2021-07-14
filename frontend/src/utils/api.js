class Api {
    constructor({address, token}) {
        this._address = address;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
    
    getProfileInfo() {
        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
        .then(this._checkResponse)
    }

    getInitialCards(){
        return fetch(`${this._address}/cards`, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
        .then(this._checkResponse)
        .then((result) => {
            return result
        })
    }

    editProfileInfo(userData){
        return fetch(`${this._address}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
        .then(this._checkResponse)
    }

    addNewCard(cardData){
        return fetch(`${this._address}/cards`, {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
        .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this._address}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
          .then(this._checkResponse)
    }

    addLikeCard(cardId) {
        return fetch(`${this._address}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
          .then(this._checkResponse)
    }

    cancelLikeCard(cardId){
        return fetch(`${this._address}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
          .then(this._checkResponse)
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(`${this._address}/cards/${cardId}/likes`, {
                method: "PUT",
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                }
            })
              .then(this._checkResponse)
        } else {
            return fetch(`${this._address}/cards/${cardId}/likes`, {
                method: "DELETE",
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('jwt'),
                    'Content-Type': 'application/json'
                }
            })
              .then(this._checkResponse)
        }
    }


    editProfilePhoto(avatarLink){
        return fetch(`${this._address}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(avatarLink)
        })
          .then(this._checkResponse)
    }
}

export const api = new Api({
    address: 'https://mestojuly.nomoredomains.monster'
});