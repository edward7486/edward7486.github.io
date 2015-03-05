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

	});

	$("#close").on("click", function(){

		$('header nav ul').removeClass( 'open' );

	});

});