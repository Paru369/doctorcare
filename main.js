

function onScroll(){

  (scrollY > 30) ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')


}

function openMenu() {

  document.body.classList.add('menu-expended')

}

function closeMenu() {

  document.body.classList.remove('menu-expended')

}

ScrollReveal({
  origin:'top',
  distance: '130px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services .card,
#about,
#about header,
#about content`);