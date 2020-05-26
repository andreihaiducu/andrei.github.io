$(document).ready(function() {
	// Set URLs
	$('a').attr('href', trackerURL('https://www.reducaps.com.br/for-men'));
	
	// Exit Event
	if (window.history && window.history.pushState) {

	    window.history.pushState('forward', null);

	    $(window).on('popstate', function() {
	      location.href = trackerURL('https://www.reducaps.com.br/for-men');
	    });

	 }
});