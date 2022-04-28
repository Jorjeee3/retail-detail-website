const headerBurgerWrapper = document.querySelector('.header-burger-wrapper')
const headerBurgerContent = document.querySelector('.header-burger-content')
const aboveHeaderAdvertisement = document.querySelector('.above-header-advertisement')
const headerBurger = document.querySelector('.header-burger')

const activeBurger = document.querySelector('.active-header')

const body = document.querySelector('body')



const burgerMenuButtonClosed = document.querySelector('.burger-menu-button-closed')
const burgerMenuButtonOpened = document.querySelector('.burger-menu-button-opened')


burgerMenuButtonClosed.addEventListener('click', e => {
  e.preventDefault
  // headerBurgerContent.classList.add('active-header')
  headerBurgerContent.style.left = "0%";
  // headerBurger.classList.add('active-header')
  // headerBurgerContent.style.display = "block";
  // headerBurgerContent.style.overflowY = "auto";
  // headerBurgerWrapper.style.display = 'none'

  // aboveHeaderAdvertisement.style.display = "none";
  // console.log('djbcejbcjec');

  // body.classList.add("body")
  // headerBurger.style.height = "100%";
  // headerBurger.style.overflowY = "scroll";
  // body.style.overflow = "hidden";
});

burgerMenuButtonOpened.addEventListener('click', e => {
  e.preventDefault
  headerBurgerContent.style.left = "-100%";
  // headerBurgerContent.style.display = "none";
  // headerBurgerWrapper.style.display = 'flex'
  // headerBurger.classList.remove('active-header')
  // body.style.overflow = 'auto';
  // aboveHeaderAdvertisement.style.display = "block";
  // console.log('djbcejbcjec');

  // body.style.height = "auto";
  // body.style.overflowY = "scroll";
  // headerBurger.style.height = "auto";
  // body.style.overflowY = "hidden";

  // body.style.height = "100vh";
  // body.style.overflow = "hidden";
  // headerBurger.style.height = "100%";

});

