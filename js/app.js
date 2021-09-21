

let header = document.querySelector('.header');
let scrollTop = document.querySelector('.scroll-to-top');
let portfolio = document.querySelector('.portfolio');
let preloader = document.getElementById('preloader');

var waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    if(direction === 'down'){
      header.classList.add('shadow');
      header.classList.add('animate__fadeInDown');
      scrollTop.style.display='block';
      scrollTop.classList.add('animate__fadeInBottomRight');
    }
    else{
      header.classList.remove('shadow');
      header.classList.remove('animate__fadeInDown');
      scrollTop.style.display='non';
      scrollTop.classList.remove('animate__fadeInBottomRight');
    }
  },
  offset: '75%'
});

ScrollReveal({
  origin : 'top',
  distance : '30px',
  duration : 1000,
  interval : 600,
  reset : true

}).reveal('.content');


  
