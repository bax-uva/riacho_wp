<?php
/**
 * Template part for displaying impresso content in archive.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Riacho
 */

$ano = get_post_meta(get_the_ID(), 'ano', true);
//$display_ano = (empty($ano) || $ano == '0' || $ano == 0 )? "" : $ano;
$display_ano = $ano;
?>
<?php if (get_post_meta(get_the_ID(), 'hide_in_archive', true)[0] != '1'): ?>

	<div class="col-md-4 col-sm-6 col-xs-12 livros-item">
		<a href="<?php echo esc_url( get_permalink() ); ?>">
			<?php echo get_the_post_thumbnail( get_the_ID(), array(200,200) ); ?>
		</a><br />
		<div class="livros-item-title"><a href="<?php echo esc_url( get_permalink() ); ?>"><?php the_title(); ?></a><br /><div class="livro-ano"><?php echo $display_ano ?></div></div>
	</div>
<?php endif; ?>
