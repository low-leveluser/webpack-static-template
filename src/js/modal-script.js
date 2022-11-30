const modalFeedbackOpenButton = document.querySelector('.burger-footer__item--chat');
const modalFeedbackCloseButton = document.querySelector('.modal-feedback__close-button');
const modalFeedback = document.querySelector('.modal-feedback');

const modalCallOpenButton = document.querySelector('.burger-footer__item--call');
const modalCallCloseButton = document.querySelector('.modal-call__close-button');
const modalCall = document.querySelector('.modal-call');

const modalBurgerOpenButton = document.querySelector('.header__item--burger');
const modalBurgerCloseButton = document.querySelector('.burger-header__item--burger');
const modalBurger = document.querySelector('.modal-burger__wrapper');

const desktopCallOpenButton = document.querySelector('.desktop-burger--call');
const desktopFeedbackOpenButton = document.querySelector('.desktop-burger--chat');

const headerCallOpenButton = document.querySelector('.header__item--call');
const headerFeedbackOpenButton = document.querySelector('.header__item--chat');


headerCallOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--hidden');
    modalCall.classList.add('call--showed');
   
});

headerFeedbackOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--hidden');
    modalFeedback.classList.add('feedback--showed');
   
});

desktopCallOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--hidden');
    modalCall.classList.add('call--showed');
   
});

desktopFeedbackOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--hidden');
    modalFeedback.classList.add('feedback--showed');
   
});

modalBurgerOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalBurger.classList.remove('burger--hidden');
    modalBurger.classList.add('burger--showed');
   
});

modalBurgerCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalBurger.classList.remove('burger--showed');
    modalBurger.classList.add('burger--hidden');
   
});


modalFeedbackOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--hidden');
    modalFeedback.classList.add('feedback--showed');
   
});

modalFeedbackCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalFeedback.classList.remove('feedback--showed');
    modalFeedback.classList.add('feedback--hidden');
    
});

modalCallOpenButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--hidden');
    modalCall.classList.add('call--showed');
   
});

modalCallCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();
    modalCall.classList.remove('call--showed');
    modalCall.classList.add('call--hidden');
    
});

document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {

        modalCall.classList.remove('call--showed');
        modalCall.classList.add('call--hidden');
        modalFeedback.classList.remove('feedback--showed');
        modalFeedback.classList.add('feedback--hidden');
    }
});
modalCall.addEventListener('click', function(evt){
    evt.preventDefault();
    if(evt.target.dataset.toggle != 'modal-call'){
        modalCall.classList.remove('call--showed');
        modalCall.classList.add('call--hidden');
    }
});
modalFeedback.addEventListener('click', function(evt){
    evt.preventDefault();
    if(evt.target.dataset.toggle != 'modal-call'){
        modalFeedback.classList.remove('feedback--showed');
        modalFeedback.classList.add('feedback--hidden');
    }
});