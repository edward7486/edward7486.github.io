$(document).ready(function(){

	// Unslider //
    $('.banner').unslider({
		speed: 1000,
		delay: 5000, 
		keys: true,               
		dots: true,              
		fluid: false 
    });

	// Inserting Close button for side menu

	if ( $(window).width() <= 1024 ) {

		$("ul.nav").prepend("<div id='close'>&#x2715;</div>");
		$("body").prepend("<div id='hamburger'>&#9776;</div>");

	} else {

		$("#close").remove();
		$("#hamburger").remove();

	}

	// Menu Toggling //

	$("#hamburger").on("click", function(){

		$('nav ul.nav').addClass( 'open' );
		$('body').bind( 'touchmove', function(e){ e.preventDefault() });

	});

	$("#close").on("click", function(){

		$('nav ul.nav').removeClass( 'open' );
		$('body').unbind( 'touchmove' );

	});

	$(".nav li a").on("click", function(){

		$('nav ul.nav').removeClass( 'open' );
		$('body').unbind( 'touchmove' );

	});

	// Function for Scroll Smoothly //

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});

});


