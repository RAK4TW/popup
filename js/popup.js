
const popup = document.querySelector('#popup');
const popstart = document.querySelector('.popstart');
const displayWrap = document.querySelector('#displayWrap');
const decline = document.querySelector('.decline');
const signUp = document.querySelector('.signup');
const closeLink = document.querySelector('.close');
const emailForm = document.querySelector('#emailForm');
const main = document.querySelector('.main');
const thankYou = document.querySelector('.thank-you');
const left = document.querySelector('.left');
let email;


popstart.addEventListener('click', () => {
    popup.classList.add('fadeIn');
    displayWrap.classList.add('show');
    popstart.classList.add('hide');

});

initialize = () => {
    popstart.classList.remove('hide');
    displayWrap.classList.remove('show');
    thankYou.classList.remove('show');
    main.classList.remove('hide');
    email.value = '';
    left.classList.add('primary');
    left.classList.remove('secondary');
    popup.classList.remove('fadeOutIn');

}

decline.addEventListener('click', (event) => {
    initialize();
});


closeLink.addEventListener('click', () => {
   initialize();
});

emailForm.addEventListener('submit', ()=>{
    email = document.querySelector('.email');
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.value === '' || !regex.test(email.value)) return;

    else if (email.value !== '' && regex.test(email.value)) {
       popup.classList.remove('fadeIn');
       popup.classList.add('fadeOutIn');
       setTimeout(()=>{
        thankYou.classList.add('show');
        main.classList.add('hide');
        left.classList.remove('primary');
        left.classList.add('secondary');
       },1000);
      
    }
});