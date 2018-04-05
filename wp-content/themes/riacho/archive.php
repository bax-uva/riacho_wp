<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Riacho
 */

get_header(); ?>
<div class="row">
    <div class="col-md-9 col-xs-12">
	<div id="primary">
		<main id="main" class="site-main" role="main">

		<?php
		if ( is_tag() ) : ?>

			<header class="page-header">
				<?php
					the_archive_title( '<h1 class="page-title">', '</h1>' );
				?>
			</header><!-- .page-header -->
		<?php
			global $query_string;
			$post_types = array('impresso', 'animacao', 'audio', 'noticia');

			foreach ($post_types as $pt) :
				$tg_args = array( 'posts_per_page' => -1, 'post_type' => $pt, 'tag' => explode("tag=", $query_string)[1] );
				$tg_query = new WP_Query($tg_args);

				if ( $tg_query->have_posts() ) : ?>

					<?php
					/* Start the Loop */
					while ( $tg_query->have_posts() ) : $tg_query->the_post();

						/*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						$post_type = get_post_type();
						if ( $post_type == 'impresso' || $post_type == 'audio' || $post_type == 'animacao' ) :
							get_template_part( 'template-parts/archive', $post_type );
						else :
							get_template_part( 'template-parts/content', get_post_format() );
						endif;

					endwhile;


					//the_posts_navigation();
				endif;
			endforeach;

		else:

			global $query_string;
			query_posts( $query_string . '&posts_per_page=-1');

			if ( have_posts() ) : ?>

				<!--header class="page-header archive-title-x">
					<?php
						//the_archive_title( '<h1 class="page-title"><br>', '</h1>' );
						//the_archive_description( '<div class="archive-description">', '</div>' );
					?>
				</header--><!-- .page-header -->

				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					$post_type = get_post_type();
					if ( $post_type == 'impresso' || $post_type == 'audio' || $post_type == 'animacao' ) :
						get_template_part( 'template-parts/archive', $post_type );
					else :
						get_template_part( 'template-parts/content', get_post_format() );
					endif;

				endwhile;


				//the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );
			endif;

		endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->
    </div><!--col-md-8 col-xs-12 -->

<?php
get_sidebar();
get_footer();
