<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Riacho
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Bitter|Roboto:300" rel="stylesheet">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
<?php if( is_home() ): ?>
<style type="text/css">
.mixcloud-footer-widget-container {
	display: none;
}
</style>
<?php endif; ?>
</head>

<body <?php body_class(); ?> id="body">
<div class="container" id="bodycontainer">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'riacho' ); ?></a>

	<?php if ( !is_home() ) : ?>
		<header id="masthead" class="site-header" role="banner">
			<nav class="navbar navbar-riacho">
				<div class="container">
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				    <span class="sr-only">Toggle navigation</span>
				    <span class="icon-bar"></span>
				    <span class="icon-bar"></span>
				    <span class="icon-bar"></span>
				  </button>
					<a href="https://riacho.me/?random" class="skipfix_hjs"><img src="https://riacho.me/wp-content/uploads/2018/02/riachito-6.gif" id="riachogif"  style="margin: 15px 10px 0 20px; width: 100px;border-radius: 150px;"/><img src="<?php echo get_template_directory_uri() . '/images/menu/logo_x_40.png'; ?>" id="menu-typ-riacho"/></a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
				  <ul class="nav navbar-nav">
                    <li class="menu-item"><a href="<?php echo esc_url( home_url( '/impressos' ) ); ?>" title="Impressos - riacho"><img src="<?php bloginfo('stylesheet_directory');?>/images/menu/impressos-w-sm.png" id="impressos" /></a></li>
                    <li class="menu-item"><a href="<?php echo esc_url( home_url( '/animacao' ) ); ?>" title="Animação - riacho"><img src="<?php bloginfo('stylesheet_directory');?>/images/menu/animacao-w.png"  id="animacao" /></a></li>
                    <li class="menu-item"><a href="<?php echo esc_url( home_url( '/noticias' ) ); ?>" title="Notícias - riacho"><img src="<?php bloginfo('stylesheet_directory');?>/images/menu/noticias-w-sm.png" id="noticias"/></a></li>
                    <li class="menu-item"><a href="<?php echo esc_url( home_url( '/somos' ) ); ?>" title="Somos - riacho"><img src="<?php bloginfo('stylesheet_directory');?>/images/menu/somos-w-sm.png" id="somos" /></a></li>
                    <li class="menu-item"><a href="<?php echo esc_url( home_url( '/radio' ) ); ?>" > <img src="<?php bloginfo('stylesheet_directory');?>/images/radio-favicon.png" style="width:1.5em; border-top:1em;" /></a>
					</li>
					
                    <li class="menu-item"><a href="http://www.facebook.com/riacho.me"><img src="https://www.riacho.me/wp-content/themes/riacho-child/images/fbfav.png" style="width:1.5em; border-top:1em;"/></a>
                    </li>
                    
                    <li class="menu-item"><a href="https://riacho.me/feed"><img src="https://www.riacho.me/wp-content/themes/riacho-child/images/RSS-iconpb.png" style="width:1.5em; border-top:1em;" /></a>
					</li>
                    
				  </ul>
				  <!--div class="nav navbar-nav navbar-right">
				    <div id="controls"><i style="display:none;" id="play-toggle" class="material-icons">play_arrow</i><iframe width="0" height="0" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fzir%2Fmarlui-miranda-especial-ihu-20-anos%2F&hide_cover=1&mini=1&hide_artwork=1" frameborder="0" id="mixcloud-placeholder"></iframe>
				  </div-->
				</div><!--/.nav-collapse -->
				</div>
			</nav>

		</header><!-- #masthead -->
	<?php endif; ?>

	<div id="content" class="site-content">
