(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),s=t(20),i=t.n(s),o=t(9),r=(t(30),t(24)),l=t(2),u=t(3);var d=function(){var e="undefined"!==typeof window,n=c.a.useState({width:e?1200:window.innerWidth,height:e?800:window.innerHeight}),t=Object(l.a)(n,2),a=t[0],s=t[1];function i(){s({width:window.innerWidth,height:window.innerHeight})}return c.a.useEffect((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),a},p=t(0);var j=function(e){var n=e.userEmail,t=e.loggedIn,a=e.handleLogout,c=e.handleBurger,s=e.isBurgerOpened,i=Object(u.h)(),r="/signin"===i.pathname?"signup":"signin",l="/signin"===i.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438",j=d().width;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"header__auth  header__auth_mobile ".concat(s?"header__auth_mobile-opened":""),children:[Object(p.jsxs)("p",{className:"header__user-email",children:[n," "]}),Object(p.jsx)(o.b,{to:"signin",onClick:a,className:"header__link header__link_logout",children:" \u0412\u044b\u0439\u0442\u0438"})]}),Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo"}),!1===t?Object(p.jsx)("div",{className:"header__auth",children:Object(p.jsx)(o.b,{to:r,className:"header__link header__link_signup",children:l})}):j>=767&!0===t?Object(p.jsxs)("div",{className:"header__auth",children:[Object(p.jsxs)("p",{className:"header__user-email",children:[n," "]}),Object(p.jsx)(o.b,{to:"signin",onClick:a,className:"header__link header__link_logout",children:" \u0412\u044b\u0439\u0442\u0438"})]}):Object(p.jsx)("div",{className:"header__auth",children:Object(p.jsx)("div",{className:"header__burger",onClick:c,children:Object(p.jsx)("div",{className:"header__burger-btn"})})})]})]})},m=c.a.createContext();var h=function(e){var n=e.card,t=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,i=c.a.useContext(m),o=n.owner._id===i._id,r=n.likes.some((function(e){return e._id===i._id})),l="cards__delete-btn ".concat(o?"cards__delete-btn_visible":""),u="cards__like ".concat(r?"cards__like_active":"");return Object(p.jsxs)("li",{className:"cards__item",children:[Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0443\u0434\u0430\u043b\u0438\u0442\u044c",className:l,onClick:function(){s(n)}}),Object(p.jsx)("img",{src:n.link,alt:n.name,onClick:function(){t(n)},className:"cards__image"}),Object(p.jsxs)("div",{className:"cards__elements",children:[Object(p.jsx)("h2",{className:"cards__text",children:n.name}),Object(p.jsxs)("div",{className:"card__like-area",children:[Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u043b\u0430\u0439\u043a",className:u,onClick:function(){a(n)}}),Object(p.jsx)("p",{className:"cards__like-number",children:n.likes.length})]})]})]})};var b=function(e){var n=e.cards,t=e.onEditAvatar,a=e.onEditProfile,s=e.onAddPlace,i=e.onCardClick,o=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(m);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__photo-area",children:[Object(p.jsx)("img",{src:l.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__photo"}),Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__edtn-button profile__edtn-button_photo",onClick:t})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edtn-button profile__edtn-button_info",onClick:a}),Object(p.jsx)("p",{className:"profile__bio",children:l.about})]}),Object(p.jsx)("button",{type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__add-button",onClick:s})]}),Object(p.jsx)("section",{className:"photo-grid",children:Object(p.jsx)("ul",{className:"cards",children:n.map((function(e){return Object(p.jsx)(h,{card:e,onCardClick:i,onCardLike:o,onCardDelete:r},e._id)}))})})]})};var _=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("p",{className:"footer__author",children:["\xa9",(new Date).getFullYear(),". \u042e\u043b\u0438\u044f \u0422\u0443\u0432\u0430\u043b\u0435\u0432\u0430"]})})};var f=function(e){var n=e.name,t=e.title,a=e.isOpen,c=e.onClose,s=e.onSubmit,i=e.children,o=e.buttonText;return Object(p.jsxs)("div",{className:"popup popup_type_".concat(n," ").concat(a?"popup_opened":""),children:[Object(p.jsx)("div",{className:"popup__overlay",onClick:c}),Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_area_".concat(n),onClick:c,"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(p.jsx)("h3",{className:"popup__name",children:t}),Object(p.jsxs)("form",{className:"popup__form",name:"".concat(n,"-form"),noValidate:!0,onSubmit:s,children:[i,Object(p.jsx)("button",{type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-".concat(o),className:"popup__submit-btn",value:o,children:o})]})]})]})};var O=function(e){var n=e.isOpen,t=e.onClose,a=e.onUpdateUser,s=c.a.useContext(m),i=c.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1],d=c.a.useState(""),j=Object(l.a)(d,2),h=j[0],b=j[1];return c.a.useEffect((function(){u(s.name||""),b(s.about||"")}),[s,n]),Object(p.jsxs)(f,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),a({name:r,about:h})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",id:"name",className:"popup__form-input popup__form-input_field_name",required:!0,minLength:"2",maxLength:"40",value:r,onChange:function(e){u(e.target.value)}}),Object(p.jsx)("span",{className:"popup__form-error name-error"}),Object(p.jsx)("input",{type:"text",placeholder:"\u041e \u0421\u0435\u0431\u0435",name:"about",id:"about",className:"popup__form-input popup__form-input_field_bio",required:!0,minLength:"2",maxLength:"200",value:h,onChange:function(e){b(e.target.value)}}),Object(p.jsx)("span",{className:"popup__form-error about-error"})]})};var g=function(e){var n=e.isOpen,t=e.onClose,a=e.onUpdateAvatar,s=c.a.useRef();return Object(p.jsxs)(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value}),s.current.value=""},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{ref:s,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",id:"link",name:"link",className:"popup__form-input popup__form-input_field_avatar",required:!0}),Object(p.jsx)("span",{className:"popup__form-error link-error"})]})},v=t(10),x=t(8);var k=function(e){var n=e.isOpen,t=e.onClose,a=e.onAddPlace,s=c.a.useState({name:"",link:""}),i=Object(l.a)(s,2),o=i[0],r=i[1];function u(e){var n=e.target,t=n.name,a=n.value;r(Object(x.a)(Object(x.a)({},o),{},Object(v.a)({},t,a)))}return Object(p.jsxs)(f,{name:"cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),a({name:o.name,link:o.link}),o.name="",o.link=""},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"cardName",name:"name",className:"popup__form-input popup__form-input_field_image-name",required:!0,minLength:"2",maxLength:"30",value:o.name,onChange:u}),Object(p.jsx)("span",{className:"popup__form-error cardName-error"}),Object(p.jsx)("input",{required:!0,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"cardLink",name:"link",className:"popup__form-input popup__form-input_field_image-src",value:o.link,onChange:u}),Object(p.jsx)("span",{className:"popup__form-error cardLink-error"})]})};var N=function(e){var n=e.card,t=e.isOpen,a=e.onClose;return Object(p.jsxs)("div",{className:"popup popup_type_image ".concat(t?"popup_opened":""),children:[Object(p.jsx)("div",{className:"popup__overlay",onClick:a}),Object(p.jsxs)("div",{className:"popup__image-container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_area_image","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),Object(p.jsxs)("figure",{className:"popup__image",children:[Object(p.jsx)("img",{src:null===n||void 0===n?void 0:n.link,alt:null===n||void 0===n?void 0:n.name,className:"popup__image-content"}),Object(p.jsx)("figcaption",{className:"popup__image-caption",children:null===n||void 0===n?void 0:n.name})]})]})]})};var C=function(e){var n=e.card,t=e.isOpen,a=e.onClose,c=e.onCardDelete;return Object(p.jsx)(f,{name:"submit-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),c(n)},buttonText:"\u0414\u0430"})};var y=function(e){var n=e.email,t=e.password,a=e.handleChange,c=e.handleSubmit,s=Object(u.h)().pathname,i="/signin"===s?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",r="/signin"===s?"\u0412\u043e\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",l="/signin"===s?"\u0415\u0449\u0435 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438",d="/signin"===s?"signup":"signin";return Object(p.jsxs)("div",{className:"login-signup",children:[Object(p.jsx)("h3",{className:"login-signup__title",children:i}),Object(p.jsxs)("form",{className:"login-signup__form",name:"login-signup-form",onSubmit:c,children:[Object(p.jsx)("input",{required:!0,type:"email",placeholder:"Email",id:"email",name:"email",className:"login-signup__form-input login-signup__form-input_field_email",minLength:"2",autoComplete:"off",value:n,onChange:a}),Object(p.jsx)("span",{className:"login-signup__form-error email-error"}),Object(p.jsx)("input",{required:!0,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",className:"login-signup__form-input login-signup__form-input_field_password",autoComplete:"off",value:t,onChange:a}),Object(p.jsx)("span",{className:"login-signup__form-error password-error"}),Object(p.jsx)("button",{type:"submit","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",className:"login-signup__submit-btn",children:r}),Object(p.jsx)("div",{className:"login-signup__login-area",children:Object(p.jsx)(o.b,{to:d,className:"login-signup__login-area login-signup__link",children:l})})]})]})};var w=function(e){var n=e.handleRegister,t=Object(a.useState)({email:"",password:""}),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(p.jsx)(y,{email:s.email,password:s.password,handleChange:function(e){var n=e.target,t=n.name,a=n.value;i(Object(x.a)(Object(x.a)({},s),{},Object(v.a)({},t,a)))},handleSubmit:function(e){e.preventDefault();var t=s.email,a=s.password;n({password:a,email:t})}})};var S=function(e){var n=e.handleLogin,t=Object(a.useState)({email:"",password:""}),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(p.jsx)(y,{email:s.email,password:s.password,handleChange:function(e){var n=e.target,t=n.name,a=n.value;i(Object(x.a)(Object(x.a)({},s),{},Object(v.a)({},t,a)))},handleSubmit:function(e){if(e.preventDefault(),s.email&&s.password){var t=s.email,a=s.password;n({email:t,password:a})}}})},L=t(25),E=function(e){var n=e.component,t=Object(L.a)(e,["component"]);return Object(p.jsx)(u.b,{children:function(){return t.loggedIn?Object(p.jsx)(n,Object(x.a)({},t)):Object(p.jsx)(u.a,{to:"./signin"})}})};var P=function(e){var n=e.isSuccess,t=e.isOpen,a=e.onClose;return Object(p.jsxs)("div",{className:"popup popup_type_infotooltip ".concat(t?"popup_opened":""),children:[Object(p.jsx)("div",{className:"popup__overlay",onClick:a}),Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_area_infotooltip","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430-\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),Object(p.jsxs)("div",{className:"popup__signup",children:[Object(p.jsx)("div",{className:"popup__signup-image ".concat(n?"popup__signup-image_success":"popup__signup-image_error")}),n?Object(p.jsx)("p",{className:"popup__signup-text",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}):Object(p.jsx)("p",{className:"popup__signup-text",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})]})},T=t(22),D=t(23),I=new(function(){function e(n){var t=n.address,a=n.token;Object(T.a)(this,e),this._address=t,this._token=a}return Object(D.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{credentials:"include"}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{credentials:"include"}).then(this._checkResponse)}},{key:"editProfileInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{credentials:"include","Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{credentials:"include","Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{credentials:"include"}}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{credentials:"include"}}).then(this._checkResponse)}},{key:"cancelLikeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{credentials:"include"}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,n){return n?fetch("".concat(this._address,"/cards/").concat(e,"/likes/"),{method:"PUT",headers:{credentials:"include"}}).then(this._checkResponse):fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{credentials:"include"}}).then(this._checkResponse)}},{key:"editProfilePhoto",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{credentials:"include","Content-Type":"application/json"},body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({address:"https://mestojuly.nomoredomains.monster",token:localStorage.getItem("jwt")}),A="https://mestojuly.nomoredomains.monster",R=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))},U=t.p+"static/media/spinner.63894ea4.gif";var q=function(){return Object(p.jsxs)("div",{className:"load-spinner",children:[Object(p.jsx)("img",{className:"load-spinner__image",src:U,alt:"spinner"}),Object(p.jsx)("p",{className:"load-spinner__text",children:"Loading..."})]})};var B=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],s=n[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),d=o[0],h=o[1],f=Object(a.useState)(!1),v=Object(l.a)(f,2),x=v[0],y=v[1],L=Object(a.useState)(!1),T=Object(l.a)(L,2),D=T[0],U=T[1],B=Object(a.useState)(!1),J=Object(l.a)(B,2),F=J[0],H=J[1],z=Object(a.useState)(!1),W=Object(l.a)(z,2),G=W[0],M=W[1],V=Object(a.useState)(null),Y=Object(l.a)(V,2),K=Y[0],Q=Y[1],X=Object(a.useState)(null),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],ne=Object(a.useState)({}),te=Object(l.a)(ne,2),ae=te[0],ce=te[1],se=Object(a.useState)(null),ie=Object(l.a)(se,2),oe=ie[0],re=ie[1],le=Object(a.useState)(!1),ue=Object(l.a)(le,2),de=ue[0],pe=ue[1],je=Object(a.useState)(!1),me=Object(l.a)(je,2),he=me[0],be=me[1],_e=Object(u.g)(),fe=Object(a.useState)(null),Oe=Object(l.a)(fe,2),ge=Oe[0],ve=Oe[1],xe=c.a.useState(!1),ke=Object(l.a)(xe,2),Ne=ke[0],Ce=ke[1];function ye(){h(!1),y(!1),U(!1),H(!1),M(!1),pe(!1)}return Object(a.useEffect)((function(){I.getProfileInfo().then((function(e){ce(e)})).catch((function(e){console.log(e)})),I.getInitialCards().then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&ye()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");e?(n=e,fetch("".concat(A,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(R)).then((function(e){ve(e.data.email),re(!0),_e.push("/")})).catch((function(e){return console.log(e)})):re(!1);var n}()}),[]),null===oe?Object(p.jsx)(q,{}):Object(p.jsxs)(m.Provider,{value:ae,children:[Object(p.jsx)(j,{loggedIn:oe,userEmail:ge,handleLogout:function(e){ve(null),re(!1),Ce(!1),localStorage.removeItem("jwt")},handleBurger:function(e){var n=e.target.parentElement;Ne?(n.classList.remove("header__burger_open"),Ce(!1)):(n.classList.add("header__burger_open"),Ce(!0))},isBurgerOpened:Ne}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{path:"/signup",children:Object(p.jsx)(w,{handleRegister:function(e){(function(e,n){return console.log(e,n),fetch("".concat(A,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:n})}).then(R)})(e.password,e.email).then((function(e){e&&(be(!0),pe(!0),_e.push("/signin"))})).catch((function(e){be(!1),pe(!0),console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/signin",children:Object(p.jsx)(S,{handleLogin:function(e){var n=e.email,t=e.password;(function(e,n){return fetch("".concat(A,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:n})}).then(R)})(n,t).then((function(e){var t=e.token;localStorage.setItem("jwt",t),re(!0),ve(n),_e.push("/")})).catch((function(e){return console.log(e)}))}})}),Object(p.jsx)(E,{exact:!0,path:"/",cards:t,onEditAvatar:function(){U(!0)},onEditProfile:function(){h(!0)},onAddPlace:function(){y(!0)},onCardClick:function(e){Q(e),M(!0)},onCardLike:function(e){var n=e.likes.some((function(e){return e._id===ae._id}));I.changeLikeCardStatus(e._id,!n).then((function(n){s((function(t){return t.map((function(t){return t._id===e._id?n:t}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){H(!0),ee(e)},loggedIn:oe,component:b}),Object(p.jsx)(u.b,{children:oe?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/signin"})})]}),Object(p.jsx)(_,{}),Object(p.jsx)(O,{isOpen:d,onClose:ye,onUpdateUser:function(e){I.editProfileInfo(e).then((function(e){ce(e),h(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(g,{isOpen:D,onClose:ye,onUpdateAvatar:function(e){I.editProfilePhoto(e).then((function(e){ce(e),U(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(k,{isOpen:x,onClose:ye,onAddPlace:function(e){I.addNewCard(e).then((function(e){s([e].concat(Object(r.a)(t))),y(!1)})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(C,{card:$,isOpen:F,onCardDelete:function(e){I.deleteCard(e._id).then((function(){s((function(n){return n.filter((function(n){return n._id!==e._id}))})),H(!1)})).catch((function(e){console.log(e)}))},onClose:ye}),Object(p.jsx)(N,{card:K,isOpen:G,onClose:ye}),Object(p.jsx)(P,{isSuccess:he,isOpen:de,onClose:ye})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.4bc489cf.chunk.js.map