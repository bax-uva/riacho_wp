<?php
/**
 * Template part for displaying animacao content in archive.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Riacho
 */

$generos = wp_get_post_terms( get_the_ID(), 'genero');
$generos_names = array();
foreach( $generos as $genero )
    $generos_names[] = $genero->name;

if( is_tag() ): ?>
	<div class="col-md-4 col-xs-12 animacao-item tag-archive">
<?php else: ?>
	<div class="col-md-12 col-xs-12 animacao-item">
<?php endif; ?>
	<a href="<?php echo esc_url( get_permalink() ); ?>">
		<?php echo get_the_post_thumbnail( get_the_ID(), array(500,360) ); ?>
	</a><br />
	<div class="animacao-item-title"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
	<br /><div class="animacao-genero"><?php echo implode( ', ', $generos_names );?></div>
	</div>
</div>
