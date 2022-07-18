
// Bounce

new Pageable(".home-page-scroll",{
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

    $(".count1").countMe(20,45);
    $(".count2").countMe(20, 45);
    $(".count3").countMe(20, 45);
    $(".count4").countMe(20,45);
    $(".count5").countMe(20,45);
    $(".count6").countMe(20,45);

 

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
  autoplaySpeed: 10000,
 });
//  $('.client-listing').slick({
//   dots:true,
//  });
 



//  Feature section slick


$('#animatedHeading').slick({
  autoplay: true,
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 9,
  // centerMode:true,
  slidesToScroll:1,
  infinite:true,
  centerPadding:0,
  adaptiveHeight: true,
  autoplaySpeed:1000

});
//  // On init
//  $(".slick-dupe").each(function(index, el) {
//    $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
//  });

//  // Manually refresh positioning of slick
//  titleMain.slick('slickPlay');

//  Why us
$('.why-us-wrapper').slick({
   arrows: false,
   autoplay: true,
  autoplaySpeed: 7000,
  fade:true,
  dots:true
});



 });


 particlesJS('particles-js',
 {
   "particles": {
     "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 600
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
         "speed": 100,
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
         "distance": 300,
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
         "duration": 0.2
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

 particlesJS('particles-js-1',
 {
   "particles": {
     "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 600
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
         "speed": 100,
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
         "distance": 300,
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
         "duration": 0.2
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

