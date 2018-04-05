jQuery(document).ready(function($) {
	$('.navbar-collapse a').on('click', function(e) {
		$(".navbar-collapse").removeClass("in").addClass("collapse");
	});
	
	$.preloadImagesMenu = function() {
	  for (var i = 0; i < arguments.length; i++) {
		$("<img />").attr("src", "https://riacho.me/wp-content/themes/riacho/images/menu/" + arguments[i]);
	  }
	}

	$.preloadImagesMenu("impressos_hover.png","somos_hover.png","animacao_hover.png","noticias_hover.png","radio_hover.png");

	$(".m_hover_imgs").hover(function(){
		var image = $(this);
		image.attr('src', 'https://riacho.me/wp-content/themes/riacho/images/menu/' + image.attr('id') +  "_hover.png");
	}, function(){
		var image = $(this);
		image.attr('src', 'https://riacho.me/wp-content/themes/riacho/images/menu/' + image.attr('id') +  ".png");
	});
});
