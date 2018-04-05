<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Riacho
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		/*if ( is_single() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;*/
			the_title( '<h2 class="entry-title">', '</h2>' );
		
		$post_type = get_post_type();
		if ( $post_type == 'impresso' || $post_type == 'audio' || $post_type == 'animacao' ) :
			the_tags('<div class="entry-tags"><span class="glyphicon glyphicon-tag footer-tag" aria-hidden="true"></span>', '','</div>');
		else:
			the_date('', '<h4 class="entry-date">', '</h4>');
		endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php if ($post_type == 'audio'): ?>
				<a href="#" class="add-to-playlist plManager" data-action="add" data-title="<?php the_title(); ?>" data-artist="Rádio Riacho" data-mp3="<?php echo get_post_meta(get_the_ID(), 'mp3_file', true)['guid']; ?>" data-cover="<?php echo the_post_thumbnail_url( array(200,200) ); ?>"><span class="glyphicon glyphicon-play-circle" aria-hidden="true" style="font-size:23px;"></span><span style="margin-left: 8px; vertical-align:super; font-size: 16px;">escutar</span></a><br />
		<?php endif; ?>
		<?php
			the_content( sprintf(
				/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'riacho' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'riacho' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php if ( $post_type == 'noticia' ) {
			the_tags('<div class="entry-tags"><span class="glyphicon glyphicon-tag footer-tag" aria-hidden="true"></span>', '','</div>');
			}
		?>
		<?php riacho_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
