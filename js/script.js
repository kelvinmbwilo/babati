function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* greensock.JS
========================================================*/
include('js/TweenMax.min.js');




/* cookie.JS
========================================================*/
include('js/jquery.cookie.js');


/* DEVICE.JS
========================================================*/
include('js/device.min.js');

/* Stick up menu
========================================================*/
include('js/tmstickup.js');
$(window).load(function() {
  if ($('html').hasClass('desktop')) {
      $('#stuck_container').TMStickUp({
      })
  }
});

/* Easing library
========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
========================================================*/
include('js/jquery.ui.totop.js');
$(function () {
  $().UItoTop({ easingType: 'easeOutQuart' });
});



/* DEVICE.JS AND SMOOTH SCROLLIG
========================================================*/
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');
$(function () {
  if ($('html').hasClass('desktop')) {
      $.srSmoothscroll({
        step:150,
        speed:800
      });
  }
});



/* superscrollorama.js
========================================================*/
include('js/jquery.superscrollorama.js');
$(document).ready(function() {
  scrolloramaInit();
})

function scrolloramaInit(){
    if($('html').hasClass('desktop')){
    var controller = $.superscrollorama();

    controller

        // // page 1
         //.addTween('.head_1', TweenMax.from( $('.head_1'), 2.8, {delay: 0.1, css:{opacity: 0}, ease: Expo.easeOut}))
         .addTween('.s1', TweenMax.from( $('.s1'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -240)
         .addTween('.s2', TweenMax.from( $('.s2'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -250)
         .addTween('.s3', TweenMax.from( $('.s3'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -260)
        .addTween('.s4', TweenMax.from( $('.s4'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -270)
        .addTween('.s5', TweenMax.from( $('.s5'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -280)
        .addTween('.s6', TweenMax.from( $('.s6'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -290)
        .addTween('.s7', TweenMax.from( $('.s7'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -300)
        .addTween('.s8', TweenMax.from( $('.s8'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -310)
        .addTween('.s9', TweenMax.from( $('.s9'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -320)
        .addTween('.s10', TweenMax.from( $('.s10'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s11', TweenMax.from( $('.s11'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -340)
        .addTween('.s12', TweenMax.from( $('.s12'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -350)
        .addTween('.s13', TweenMax.from( $('.s13'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -360)
        .addTween('.s14', TweenMax.from( $('.s14'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -370)
        .addTween('.s15', TweenMax.from( $('.s15'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -380)
        .addTween('.s16', TweenMax.from( $('.s16'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -390)
        .addTween('.s17', TweenMax.from( $('.s17'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s18', TweenMax.from( $('.s18'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s19', TweenMax.from( $('.s19'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s20', TweenMax.from( $('.s20'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s21', TweenMax.from( $('.s21'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s22', TweenMax.from( $('.s22'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s23', TweenMax.from( $('.s23'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s24', TweenMax.from( $('.s24'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s25', TweenMax.from( $('.s25'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s26', TweenMax.from( $('.s26'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s27', TweenMax.from( $('.s27'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s28', TweenMax.from( $('.s28'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s29', TweenMax.from( $('.s29'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s30', TweenMax.from( $('.s30'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s31', TweenMax.from( $('.s31'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s32', TweenMax.from( $('.s32'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s33', TweenMax.from( $('.s33'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s34', TweenMax.from( $('.s34'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s35', TweenMax.from( $('.s35'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s36', TweenMax.from( $('.s36'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s37', TweenMax.from( $('.s37'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s38', TweenMax.from( $('.s38'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s39', TweenMax.from( $('.s39'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s40', TweenMax.from( $('.s40'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s41', TweenMax.from( $('.s41'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s42', TweenMax.from( $('.s42'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s43', TweenMax.from( $('.s43'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s44', TweenMax.from( $('.s44'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)
        .addTween('.s45', TweenMax.from( $('.s45'), 1.6, {delay: 0.0, css:{opacity: 0 , scale: 0.7}, ease: Cubic.easeOut}),0 , -400)

        .addTween('.s50', TweenMax.from( $('.s50'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s51', TweenMax.from( $('.s51'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s52', TweenMax.from( $('.s52'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s53', TweenMax.from( $('.s53'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s54', TweenMax.from( $('.s54'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s55', TweenMax.from( $('.s55'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s56', TweenMax.from( $('.s56'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s57', TweenMax.from( $('.s57'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s58', TweenMax.from( $('.s58'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s59', TweenMax.from( $('.s59'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)
        .addTween('.s60', TweenMax.from( $('.s60'), 1.0, {delay: 0.0, css:{opacity: 0 , "margin-left": "20"}, ease: Cubic.easeOut}),0 , -330)

         .addTween('.s101', TweenMax.from( $('.s101'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s102', TweenMax.from( $('.s102'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-270, transformOrigin:"right 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s103', TweenMax.from( $('.s103'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s104', TweenMax.from( $('.s104'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-270, transformOrigin:"right 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s105', TweenMax.from( $('.s105'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s106', TweenMax.from( $('.s106'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-270, transformOrigin:"right 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s107', TweenMax.from( $('.s107'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s108', TweenMax.from( $('.s108'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-270, transformOrigin:"right 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s109', TweenMax.from( $('.s109'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -22)
        .addTween('.s110', TweenMax.from( $('.s110'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-270, transformOrigin:"right 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s111', TweenMax.from( $('.s111'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s112', TweenMax.from( $('.s112'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-270, transformOrigin:"right 50% -200"}, ease: Cubic.easeOut}),0 , -220)

        .addTween('.s150', TweenMax.from( $('.s150'), 1.6, {delay: 0.2, css:{opacity: 0 , rotationY:-90, transformOrigin:"bottom -100% -50"}, ease: Cubic.easeOut}),0 , -220)


        .addTween('.s201', TweenMax.from( $('.s201'), 1.6, {delay: 0.5, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s202', TweenMax.from( $('.s202'), 1.6, {delay: 0.8, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
        .addTween('.s203', TweenMax.from( $('.s203'), 1.6, {delay: 1.0, css:{opacity: 0 , rotationY:270, transformOrigin:"left 50% -200"}, ease: Cubic.easeOut}),0 , -220)
}
}




/* Copyright Year
========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );

     /// if($(window).width() > 768){



   // }

});


$(window).load(function() {
    $('#mainNav>ul>li>a').each(function(){
      var $this = $(this),
      txt = $this.text();
      $this.html('<div class="first"><span>'+ txt +'</span></div><div class="second"><span>'+ txt +'</span></div>');
    })
})

/* Superfish menu
========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');



/* Orientation tablet fix
========================================================*/
$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };

  scaleFix();
  // Menu Android
  if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    }
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')