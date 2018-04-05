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
			<nav class="navbar navbar-riacho navbar-fixed-top">
				<div class="container">
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				    <span class="sr-only">Toggle navigation</span>
				    <span class="icon-bar"></span>
				    <span class="icon-bar"></span>
				    <span class="icon-bar"></span>
				  </button>
					<a href="<?php echo get_template_directory_uri() . '/images/riacho_big.gif'; ?>" data-featherlight="image" data-featherlight-loading="<img src='<?php echo get_template_directory_uri() . '/images/ajax-loader.gif'; ?>'/>" data-featherlight-iframewidth="1000" id="link_big_gif"><img src="https://riacho.me/wp-content/uploads/2017/08/logo-riacho-gif-vetorizado-mini2.gif" id="riachogif"  style="margin: 15px 10px 0 20px; width: 140px;"/><img src="<?php echo get_template_directory_uri() . '/images/menu/logo_x_40.png'; ?>" id="menu-typ-riacho"/></a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
				  <ul class="nav navbar-nav">
				    <li class="menu-item"><a href="<?php echo esc_url( home_url( '/impressos' ) ); ?>" title="Impressos - riacho"><img src="<?php echo get_template_directory_uri() . '/images/menu/impressos.png'; ?>" class="m_hover_imgs" id="impressos" /></a></li>
					<li class="menu-item"><a href="<?php echo esc_url( home_url( '/animacao' ) ); ?>" title="Animação - riacho"><img src="<?php echo get_template_directory_uri() . '/images/menu/animacao.png'; ?>" class="m_hover_imgs" id="animacao" /></a></li>
					<li class="menu-item"><a href="<?php echo esc_url( home_url( '/radio' ) ); ?>" title="Rádio Riacho"><img src="<?php echo get_template_directory_uri() . '/images/menu/radio.png'; ?>" class="m_hover_imgs"  id="radio" /></a></li>
					<li class="menu-item"><a href="<?php echo esc_url( home_url( '/noticias' ) ); ?>" title="Notícias - riacho"><img src="<?php echo get_template_directory_uri() . '/images/menu/noticias.png'; ?>" class="m_hover_imgs" id="noticias" /></a></li>
					<li class="menu-item"><a href="<?php echo esc_url( home_url( '/somos' ) ); ?>" title="Somos - riacho"><img src="<?php echo get_template_directory_uri() . '/images/menu/somos.png'; ?>" class="m_hover_imgs" id="somos" /></a></li>
					<li style="margin-top:15px;">
						<a href="https://www.facebook.com/riacho.me" class="skipfix_hjs" style="display: inline;"><img src="https://www.riacho.me/wp-content/themes/riacho/images/fb-icon2.png"  style="width:25px; display: inline;" /></a>
<a href="https://riacho.me/feed" style="display: inline; margin-left: 5px;" class="skipfix_hjs"><img src="https://www.riacho.me/wp-content/themes/riacho/images/rss-icon1.png" style="width:25px; display: inline" /></a>
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
