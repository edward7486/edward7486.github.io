	$( document ).ready(function() {

		smoothScroll(300);
		workBelt();
		workLoad();

	});

	//

	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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

	function workBelt () {

		$('.thumb-unit').click(function(){

			$('.work-slider').css('left', '-100%');
			$('.work-container').show();

		});

		$('.work-return').click(function(){
			$('.work-slider').css('left', '0%');
			$('.work-container').hide();
		});
	}

	function workLoad () {

		$.ajaxSetup({cache:false});

		$('.thumb-unit').click(function() {

			var $this = $(this),
				newTitle = $this.find('strong').text(),
				newFile = $this.data('folder'), 
				newHTML = '/work/' + newFile + '.html';
			
			$('.project-load').load(newHTML);
			$('.project-title').text(newTitle);

		});

	}