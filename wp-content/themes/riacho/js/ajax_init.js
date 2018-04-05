jQuery(document).ready(function($) {

	// Based in http://wptheming.com/2011/12/ajax-themes/
	// Establish Variables
	var
		History = window.History, // Note: Using a capital H instead of a lower h
		State = History.getState(),
		$log = $('#log');
	
	$(document).on('click', '.add-to-playlist', function(e) {
		// We've commented jquery.linerPlayer.js line 354 to start player hidden, so we need to manually show it now.
		$('.strm_player').addClass("show");
	});

	
	// If the link goes to somewhere else within the same domain, trigger the pushstate
	$(document).on('click', 'a', function(e) {

		var href = $(this).attr('href');

		if ( $(this).hasClass('skipfix_hjs') || ((href.match(/^https?\:/i)) && (!href.match(document.domain))))
		{
		    var extLink = href.replace(/^https?\:\/\//i, '');
		    return extLink; // external link
		}
		if($(this).attr('id') == 'link_big_gif') return;

		if($(this).parents('#wpadminbar').length) return;

		//if (e.originalEvent.defaultPrevented) return;
		e.preventDefault();

		var path = $(this).attr('href');
		var title = "carregando..."; //$(this).attr('title'); // $(this).title();
		History.pushState('ajax',title,path);
	});
		
	// Bind to state change
	// When the statechange happens, load the appropriate url via ajax
	History.Adapter.bind(window,'statechange',function() { // Note: Using statechange instead of popstate
		load_site_ajax();
	});
	
	// Load Ajax
	function load_site_ajax() {
		State = History.getState(); // Note: Using History.getState() instead of event.state
		// History.log('statechange:', State.data, State.title, State.url);
		//console.log(event);

		NProgress.start();

		/*
		$("#primary").prepend('<div id="ajax-loader"><h4>Loading...</h4></div>');
		$("#ajax-loader").fadeIn();
		$('#site-description').fadeTo(200,0);
		$('#content').fadeTo(200,.3);
		*/
		
		var replace_id = '#primary';

		
		if($('body').hasClass('home')){
			replace_id = '#bodycontainer';
			$('body').removeClass('home');
		}

		$(replace_id).load(State.url + ' ' + replace_id, function(data) {
			/* After the content loads you can make additional callbacks*/
			/*
			$('#site-description').text('Ajax loaded: ' + State.url);
			$('#site-description').fadeTo(200,1);
			$('#content').fadeTo(200,1);
			*/
		
			// Updates the menu
			//var request = $(data);
			//$('#access').replaceWith($('#access', request));

			// Update the title
			document.title = $(data).filter('title').text();

			NProgress.done();
			NProgress.remove();
		
		});
	}	
});
