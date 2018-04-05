<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Riacho
 */

?>


	</div><!-- .row -->
	</div><!-- #content -->
	<div class="container">

	<?php if ( !is_home() ) : ?>
		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="site-info">
			</div><!-- .site-info -->
		</footer><!-- #colophon -->
	<?php endif; ?>
	</div><!-- #container -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
