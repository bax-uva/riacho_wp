jQuery(document).ready(function($) {
	$('.navbar-collapse a').on('click', function(e) {
		$(".navbar-collapse").removeClass("in").addClass("collapse");
	});
	
	$.preloadImagesMenu = function() {
	  for (var i = 0; i < arguments.length; i++) {
		$("<img />").attr("src", "https://riacho.me/wp-content/themes/riacho-child/images/menu/" + arguments[i]);
	  }
	}

	$.preloadImagesMenu("impr_hover.png","som_hover.png","anim_hover.png","noti_hover.png");

	$(".m_hover_imgs").hover(function(){
		var image = $(this);
		image.attr('src', 'https://riacho.me/wp-content/themes/riacho-child/images/menu/' + image.attr('id') +  "_hover.png");
	}, function(){
		var image = $(this);
		image.attr('src', 'https://riacho.me/wp-content/themes/riacho-child/images/menu/' + image.attr('id') +  ".png");
	});
});
