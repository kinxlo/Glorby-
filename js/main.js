/*==================== SCROLL REVEAL ANIMATION ====================*/

// we implement the plugin for the scroll on reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
})

// each html that has the class atribute of cc-scroll will therefore implement the scroll reveal method...
sr.reveal(`.cc-scroll`, {
  interval: 100,
})


//========= we listen for the window scroll event, so we can implement the scroll-up button...=================

const scrollBtn = document.querySelector('.scrolltop') //target the scroll button

window.addEventListener('scroll', () => {
    // if the window scroll object value is greater than the constant value of 560, add the class to show the up button otherwise remove the show up button if visible.
  this.scrollY >= 560
    ? scrollBtn.classList.add('show-scroll')
    : scrollBtn.classList.remove('show-scroll')
})
