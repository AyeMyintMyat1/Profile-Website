new WOW().init();
$('#pricing-slide').slick({
 dots: true,
 infinite: false,
 arrows: false,
 speed: 300,
 slidesToShow: 3,
 slidesToScroll: 3,
 responsive: [
  {
   breakpoint: 1024,
   settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
   }
  },
  {
   breakpoint: 600,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 2
   }
  },
  {
   breakpoint: 480,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
 ]
});

$(document).ready(function () {
 let screenHeight = $(window).height();
    console.log(screenHeight);

    $(document).scroll(function () {
  // console.log(screenHeight);
  let currentHeight = $(window).scrollTop();
  // console.log(currentHeight);
  if (currentHeight >= screenHeight-100) {
   $('.site-nav').addClass('site-nav-scroll');
  }else{
   $('.site-nav').removeClass('site-nav-scroll');
  //  var waypoints = $('#home').waypoint(function(direction) {
  //   console.log("home");
  //   $('.nav-link').removeClass('active');
  //    $('.nav-item [href="#home"]').addClass('active');
   
  //  }, {
  //   offset: '10%'
  //  });
  setActive('home');
  }
 });

 // $('.navbar-toggler').click(function(){
 //  let result=$('#navbarSupportedContent');
 //  console.log(result);
 //  // if(result){
 //  //  console.log("aaaa")
 //  // }
 //  // if($(".navbar-toggler[aria-expanded='flase']")){
 //  //  console.log('false');
 //  // }
 //  // else{
 //  //  console.log('rtue');
 //  // }
 // });
 $('.custombar').click(function(){
  // alert('hi')
  $('.customnav').toggleClass('display');
  let bb=$('.customnav').hasClass('display');
  if(bb){
   $('.bars').removeClass('fa-bars');
   $('.bars').addClass('fa-times');
  }
  else{
   $('.bars').removeClass('fa-times');
   $('.bars').addClass('fa-bars');
  }
 });

});
// let navbarToggler=document.getElementById('aa');
// let nav=document.querySelector('.navbar-collapse');
// navbarToggler.addEventListener('click',function(event){
// let result=event.target.nextElementSibling.classList.contains('.show');
// console.log(result)
// });
//waypoints
// var waypoints = $('#home').waypoint(function(direction) {
//  console.log("home");
//  $('.nav-link').removeClass('active');
//   $('.nav-item [href="#home"]').addClass('active');

// }, {
//  offset: '10%'
// });
// var waypoints = $('#about').waypoint(function(direction) {
//  console.log("about");
//  $('.nav-link').removeClass('active');
//   $('.nav-item [href="#about"]').addClass('active');
// }, {
//  offset: '10%'
// });
// var waypoints = $('#services').waypoint(function(direction) {
//  console.log("services");
//  $('.nav-link').removeClass('active');
//   $('.nav-item [href="#services"]').addClass('active');
// }, {
//  offset: '10%'
// });
// var waypoints = $('#pricing').waypoint(function(direction) {
//  console.log("pricng");
//  $('.nav-link').removeClass('active');
//   $('.nav-item [href="#pricing"]').addClass('active');
// }, {
//  offset: '10%'
// });
// var waypoints = $('#contact').waypoint(function(direction) {
//  console.log("contact");
//  $('.nav-link').removeClass('active');
//   $('.nav-item [href="#contact"]').addClass('active');
// }, {
//  offset: '10%'
// });
function setActive(current){
$(`.nav-link`).removeClass('active');
$(`.nav-link[href='#${current}']`).addClass('active');
}

function navScroll(){
  let currentsection=$('section[id]');
  console.log(currentsection);
  currentsection.waypoint(function(direction) {
    if(direction=='down'){
      let currentsectionId=$(this.element).attr('id');
      console.log(currentsectionId);
      setActive(currentsectionId);   
    }
  }, {
     offset: '150px'
    });

    currentsection.waypoint(function(direction) {
      if(direction=='up'){
        let currentsectionId=$(this.element).attr('id');
        console.log(currentsectionId);
        setActive(currentsectionId);   
      }
    }, {
       offset: '-150px'
      });
}
navScroll()
$(window).on('load',function(){
  $('.loader-container').fadeOut(500,function(){
    $(this).remove();
  })
})