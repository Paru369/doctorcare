

function onScroll(){

  (scrollY > 30) ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')


}

function openMenu() {

  document.body.classList.add('menu-expended')

}

function closeMenu() {

  document.body.classList.remove('menu-expended')

}