$(document).ready(function() {

  // $(function(){
  // 	$.pixlayout({
  // 		src: "../../USflags-DT-1200px-V3.jpg",
  // 		opacity: 0.4,
  // 		top: 0,
  //     left: -285,
  // 		show: true
  // 	}, "body");
  // });
 $(".owl-carousel").owlCarousel({
   items: 1,
    loop:true,
    margin:10,
    dots: true
 });

 $('.mobile-nav').on('click', function(){
   $(this).toggleClass('active');
   $('.main-nav__list').toggleClass('active');

 });

});
