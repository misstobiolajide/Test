$(document).ready(function(){
	$('.hero-banner').slick({
	  dots: true,
	  infinite: true,
	  speed: 3000,
	  autoplay: true,
// 	  arrows: false,
	  pauseOnHover: false,
	  fade: true
	});
	
	
	$('#menu-icon').on('click', function(e){
		e.preventDefault();
		$('.main-navigation__list').slideToggle();
	});
	
	$('#cart').on('click' , function(e) {
		e.preventDefault();
		$('.cart-content').fadeToggle();
	});
	
	$('.plus').on('click' , function(e) {
		e.preventDefault();
		
		var value = Number($(this).parent().find('.value').text());
		
		if( value < 10 ) {
			var newValue = Number(value + 1);
			$(this).parent().find('.value').empty().append(newValue);
		}
	});
	
	$('.minus').on('click' , function(e) {
		e.preventDefault();
		
		var value = Number($(this).parent().find('.value').text());
		
		if( value > 1 ) {
			var newValue = Number(value - 1);
			$(this).parent().find('.value').empty().append(newValue);
		}
	});
	
	$(window).resize(function(){
	    if($(window).width() >= 767) {
		    $('.main-navigation__list').show();
	    } else {
		    $('.main-navigation__list').hide();
	    }
	});
});