
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){

  showNavOnScroll()
  showBackToTopButton()
  
function showNavOnScroll(){
  (scrollY > 30) ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')
}

function showBackToTopButton(){
  
  (scrollY > 400) ?  backToTopButton.classList.add('show') : backToTopButton.classList.remove('show')


}

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
