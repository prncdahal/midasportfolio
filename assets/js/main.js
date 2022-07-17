// 
const clientListingItem =  document.querySelectorAll('.client-listing-item')
const clientListing = document.querySelector('.client-listing')


clientListingItem.forEach((item)=>{
   //  item.style.top = clientListing.clientHeight*Math.random() +'px' 
   //  item.style.left = clientListing.clientWidth*Math.random() + 140 +'px' 
   // setInterval(()=>{
   //  item.style.top = clientListing.clientHeight*Math.random() +'px' 
   //  item.style.left = clientListing.clientWidth*Math.random() + 140 +'px' 
   //  console.log('hello')
   // },2000)
})



// Bounce



new Pageable("#main",{
   animation: 500,
	delay: 400,
	orientation: "vertical",
   infinite:false,
	onScroll: function({scrolled}) {
		 if(scrolled>100){
         $('.header').addClass('d-none')
       } else{
         $('.header').removeClass('d-none')
       }
	},
});


// Counter js
$(document).ready(function() {

   setTimeout(function(){
      $('.loader').addClass('hide-loader');
   },700)

   function counter(){
      var counters = $(".count");
   var countersQuantity = counters.length;
   var counter = [];
 
   for (i = 0; i < countersQuantity; i++) {
     counter[i] = parseInt(counters[i].innerHTML);
   }
 
   var count = function(start, value, id) {
     var localStart = start;
     setInterval(function() {
       if (localStart < value) {
         localStart++;
         counters[id].innerHTML = localStart;
       }
     }, 60);
   }
 
   for (j = 0; j < countersQuantity; j++) {
     count(0, counter[j], j);
   }
   counter = []
   }
   counter();

   //  slick slider
  
$('.lead-section-wrapper').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   arrows: false,
   autoplay:true,
   autoplaySpeed:7000
 });
$('.product-section-list').slick({
   infinite: true,
   slidesToShow: 5,
   slidesToScroll: 5,
   arrows: false,
   dots:true,
   autoplay: true,
  autoplaySpeed: 2000,
 });
 


 $('.lead-section-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
   counter()
 });

//  Feature section slick
// Get titles from the DOM
var titleMain  = $("#animatedHeading");
var titleSubs  = titleMain.find("slick-active");

titleMain.slick({
   autoplay: false,
   arrows: false,
   dots: false,
   slidesToShow: 8,
   centerPadding: "10px",
   draggable: false,
   infinite: true,
   pauseOnHover: false,
   swipe: false,
   touchMove: false,
   vertical: true,
   speed: 1000,
   autoplaySpeed: 2000,
   useTransform: true,
   cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
   
 });

 // On init
 $(".slick-dupe").each(function(index, el) {
   $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
 });

 // Manually refresh positioning of slick
 titleMain.slick('slickPlay');

//  Why us
$('.why-us-wrapper').slick({
   arrows: false,
   autoplay: true,
  autoplaySpeed: 2000,
//   fade:true

});



 });


 particlesJS('particles-js',
 {
   "particles": {
     "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 3,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 6,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "repulse"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 }

);