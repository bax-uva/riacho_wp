<?php
/**
 * Template part for displaying radio content in archive.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Riacho
 */

$url = get_post_meta(get_the_ID(), 'url', true);
$duracao = get_post_meta(get_the_ID(), 'duracao', true);
$display_duracao = (empty($duracao) || $duracao == '0' || $duracao == 0 )? "" : $duracao;

$display = true;

$categorias = wp_get_post_terms( get_the_ID(), 'categoria_do_audio');
foreach( $categorias as $categoria )
    if ($categoria->slug == 'vinhetas')
	$display = false;

if($display):
?>

<div class="col-md-4 col-sm-6 col-xs-12 radio-item">
	<div class="radio-item-img-wrapper">
				<a href="#" class="add-to-playlist plManager" data-action="add" data-title="<?php the_title(); ?>" data-artist="Rádio Riacho" data-mp3="<?php echo get_post_meta(get_the_ID(), 'mp3_file', true)['guid']; ?>" data-cover="<?php echo the_post_thumbnail_url( array(200,200) ); ?>">
				<?php echo get_the_post_thumbnail( get_the_ID(), array(200,200) ); ?>
				<span class="glyphicon glyphicon-play-circle playb" aria-hidden="true"></span>
			</a>


	</div>
	<div class="radio-item-title"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a>
	<br /><div class="radio-duracao"><?php echo $display_duracao ?></div>
	</div>
</div>
<?php endif; ?>
