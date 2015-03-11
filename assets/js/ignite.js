$(document).ready(function(){

	// Moving Register Button in Header based on Window Width //
	if ( $(window).width() <= 1024 ) {
		
		$("button.register").remove().prependTo(".container");

	} else if ( $(window).width() >= 1024 ) {

		$("button.register").remove().appendTo("header");
	
	}

	//

	// Inserting Close button for side menu

	if ( $(window).width() <= 1024 ) {

		$("ul.nav").prepend("<div id='close'>&#x2715;</div>");

		$("header nav").append("<div id='hamburger'>&#9776;</div>");

	} else {

		$("#close").remove();
		$("#hamburger").remove();

	}

	//

	// Menu Toggling //

	$("#hamburger").on("click", function(){

		$('header nav ul').addClass( 'open' );
		$('body').bind( 'touchmove', function(e){ e.preventDefault() });

	});

	$("#close").on("click", function(){

		$('header nav ul').removeClass( 'open' );
		$('body').unbind( 'touchmove' );

	});

	$(".nav li a").on("click", function(){

		$('header nav ul').removeClass( 'open' );
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


