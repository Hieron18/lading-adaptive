$(document).ready(function() {
  if ($(window).width() > '479'){
	$('.slider').slick({
		adaptiveHeight: true,
		slidesToShow: 3,
		centerMode: true,
	});
  }else{
	$('.slider').slick({
		adaptiveHeight: true,
		slidesToShow: 1,
		centerMode: true,
	});
  }
});
$(document).ready(function() {
	$('.header__burger').click(function(){
	  if ($(window).width() < '769'){
		$('.header__burger,.header__menu, body').toggleClass('active')
	  }
	});
});
$(document).ready(function() {
	$(".purchase__button").click(function(){
		$(".purchase__button, .purchase__free, .purchase__pro, .purchase__button_silver, .purchase__button ").toggleClass('background')
	});
});