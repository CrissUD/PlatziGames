const mobile = window.matchMedia('screen and (max-width: 990px)');
const burgerButton = document.querySelector('.button__menu');

function moverMenu() {
    const menu = document.querySelector('.nav--header');
    if(menu.classList.contains('active'))
        menu.classList.remove('active');
    else
        menu.classList.add('active');
}

function validation(event){
  if(event.matches)
      burgerButton.addEventListener('click', moverMenu);
  else
      burgerButton.removeEventListener('click', moverMenu);
}

mobile.addListener(validation);
validation(mobile);