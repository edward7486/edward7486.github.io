$( document ).ready(function() {
  //
  switch (window.location.pathname) {
	case '/':
	    $('#work').addClass('active');
	    break;
	case '/process/':
	    $('#process').addClass('active');
	    break;
	case '/blog/':
	    $('#blog').addClass('active');
	    break;   
	case '/about/':
	    $('#about').addClass('active');
	    break;
	}
});