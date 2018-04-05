<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Riacho
 */

get_header(); ?>

<div class="row">
    <div class="col-md-12">

	<div id="primary">
		<main id="main" class="site-main" role="main">

			<style type="text/css">
			div.Table_01 {
				position:relative;
				margin: 0 auto;
				width:625px;
				height:605px;
			}

			div.riacho-menu-menor-01_ {
				position:absolute;
				left:0px;
				top:0px;
				width:625px;
				height:18px;
			}

			div.riacho-menu-menor-02_ {
				position:absolute;
				left:0px;
				top:18px;
				width:196px;
				height:35px;
			}

			div.radio_ {
				position:absolute;
				left:196px;
				top:18px;
				width:97px;
				height:127px;
			}

			div.riacho-menu-menor-04_ {
				position:absolute;
				left:293px;
				top:18px;
				width:332px;
				height:35px;
			}

			div.riacho-menu-menor-05_ {
				position:absolute;
				left:0px;
				top:53px;
				width:63px;
				height:218px;
			}

			div.circulos_ {
				position:absolute;
				left:63px;
				top:53px;
				width:133px;
				height:218px;
			}

			div.circulos007_ {
				position:absolute;
				left:293px;
				top:53px;
				width:302px;
				height:39px;
			}

			div.riacho-menu-menor-08_ {
				position:absolute;
				left:595px;
				top:53px;
				width:30px;
				height:552px;
			}

			div.circulos009_ {
				position:absolute;
				left:293px;
				top:92px;
				width:193px;
				height:98px;
			}

			div.anima_ {
				position:absolute;
				left:486px;
				top:92px;
				width:101px;
				height:132px;
			}

			div.circulos011_ {
				position:absolute;
				left:587px;
				top:92px;
				width:8px;
				height:455px;
			}

			div.circulos012_ {
				position:absolute;
				left:196px;
				top:145px;
				width:97px;
				height:45px;
			}

			div.circulos013_ {
				position:absolute;
				left:196px;
				top:190px;
				width:17px;
				height:285px;
			}

			div.riachogif_ {
				position:absolute;
				left:213px;
				top:190px;
				width:243px;
				height:192px;
			}

			div.circulos015_ {
				position:absolute;
				left:456px;
				top:190px;
				width:30px;
				height:192px;
			}

			div.circulos016_ {
				position:absolute;
				left:486px;
				top:224px;
				width:101px;
				height:158px;
			}

			div.riacho-menu-menor-17_ {
				position:absolute;
				left:0px;
				top:271px;
				width:20px;
				height:334px;
			}

			div.impresso_ {
				position:absolute;
				left:20px;
				top:271px;
				width:111px;
				height:134px;
			}

			div.circulos019_ {
				position:absolute;
				left:131px;
				top:271px;
				width:65px;
				height:204px;
			}

			div.circulos020_ {
				position:absolute;
				left:213px;
				top:382px;
				width:228px;
				height:93px;
			}

			div.somos_ {
				position:absolute;
				left:441px;
				top:382px;
				width:101px;
				height:134px;
			}

			div.circulos022_ {
				position:absolute;
				left:542px;
				top:382px;
				width:45px;
				height:165px;
			}

			div.riacho-menu-menor-23_ {
				position:absolute;
				left:20px;
				top:405px;
				width:43px;
				height:200px;
			}

			div.circulos024_ {
				position:absolute;
				left:63px;
				top:405px;
				width:68px;
				height:142px;
			}

			div.circulos025_ {
				position:absolute;
				left:131px;
				top:475px;
				width:57px;
				height:72px;
			}

			div.novas_ {
				position:absolute;
				left:188px;
				top:475px;
				width:183px;
				height:102px;
			}

			div.circulos027_ {
				position:absolute;
				left:371px;
				top:475px;
				width:70px;
				height:72px;
			}

			div.circulos028_ {
				position:absolute;
				left:441px;
				top:516px;
				width:101px;
				height:31px;
			}

			div.riacho-menu-menor-29_ {
				position:absolute;
				left:63px;
				top:547px;
				width:125px;
				height:58px;
			}

			div.riacho-menu-menor-30_ {
				position:absolute;
				left:371px;
				top:547px;
				width:224px;
				height:58px;
			}

			div.riacho-menu-menor-31_ {
				position:absolute;
				left:188px;
				top:577px;
				width:183px;
				height:28px;
			}
			</style>

			<script>
			jQuery(document).ready(function($) {
				$.preloadImages = function() {
				  for (var i = 0; i < arguments.length; i++) {
					$("<img />").attr("src", "<?php echo bloginfo('stylesheet_directory') . '/images/home/' ?>" + arguments[i]);
				  }
				}

				$.preloadImages("radio.png","impresso.png","novas.png","anima.png","somos.png");

				
				$(".hover_imgs").hover(function(){
					var image = $(this);
					image.attr('src', "<?php echo bloginfo('stylesheet_directory') . '/images/home/' ?>" + image.attr('id') +  ".png");
				}, function(){
					var image = $(this);
					image.attr('src', "<?php echo bloginfo('stylesheet_directory') . '/images/home/' ?>" + image.attr('id') +  "2.png");
				});


				$(document).on('click', 'a', function(e) {
					NProgress.start();
				});
			});

		
			</script>


			<div style="text-align:center;padding-top:10px;" class="visible-xs">

				<img src="<?php echo get_template_directory_uri() . '/images/menu/logo.png'; ?>" style="margin-bottom: 15px;"/><br />
							<img src="<?php echo get_template_directory_uri() . '/images/menu/riacho_108.gif'; ?>" style="margin-bottom: 10px;" /><br />


							<a href="<?php echo esc_url( home_url( '/impressos' ) ); ?>" title="Impressos"><img src="<?php echo get_template_directory_uri() . '/images/menu/impressos.png'; ?>" /></a><br />
							<a href="<?php echo esc_url( home_url( '/noticias' ) ); ?>" title="Notícias"><img src="<?php echo get_template_directory_uri() . '/images/menu/noticias.png'; ?>" /></a></li><br />
							<a href="<?php echo esc_url( home_url( '/radio' ) ); ?>" title="Rádio"><img src="<?php echo get_template_directory_uri() . '/images/menu/radio.png'; ?>" /></a></li><br />
							<a href="<?php echo esc_url( home_url( '/animacao' ) ); ?>" title="Animação"><img src="<?php echo get_template_directory_uri() . '/images/menu/animacao.png'; ?>" /></a><br />
							<a href="<?php echo esc_url( home_url( '/somos' ) ); ?>" title="Somos"><img src="<?php echo get_template_directory_uri() . '/images/menu/somos.png'; ?>"/></a>

			</div>

			<div class="Table_01 hidden-xs">
				<div class="riacho-menu-menor-01_">
				</div>
				<div class="riacho-menu-menor-02_">
				</div>
				<div class="radio_">
					<a href="<?php echo esc_url( home_url( '/radio' ) ); ?>" title="Rádio - Riacho">
					<img id="radio" class="hover_imgs" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/radio2.png'; ?>" width="97" height="127" alt="" />
					</a>
				</div>
				<div class="riacho-menu-menor-04_">
				</div>
				<div class="riacho-menu-menor-05_">
				</div>
				<div class="circulos_">
					<img id="circulos" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos.png';?>" width="133" height="218" alt="" />
				</div>
				<div class="circulos007_">
					<img id="circulos007" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-07.png';?>" width="302" height="39" alt="" />
				</div>
				<div class="riacho-menu-menor-08_">
				</div>
				<div class="circulos009_">
					<img id="circulos009" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-09.png';?>" width="193" height="98" alt="" />
				</div>
				<div class="anima_">
					<a href="<?php echo esc_url( home_url( '/animacao' ) ); ?>" title="Animação - Riacho">
					<img id="anima" class="hover_imgs" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/anima2.png';?>" width="101" height="132" alt="" />
					</a>
				</div>
				<div class="circulos011_">
					<img id="circulos011" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-11.png';?>" width="8" height="455" alt="" />
				</div>
				<div class="circulos012_">
					<img id="circulos012" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-12.png';?>" width="97" height="45" alt="" />
				</div>
				<div class="circulos013_">
					<img id="circulos013" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-13.png';?>" width="17" height="285" alt="" />
				</div>
				<div class="riachogif_">
					<img src="<?php echo bloginfo('stylesheet_directory') . '/images/home/riacho_logo.png' ?>" width="243" height="67" alt="" />
					<img id="tela_inicial_riachogif" style="margin-top:5px; margin-left: 10px;" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/riacho.gif' ?>" width="216" height="128" alt="" />
				</div>
				<div class="circulos015_">
					<img id="circulos015" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-15.png';?>" width="30" height="192" alt="" />
				</div>
				<div class="circulos016_">
					<img id="circulos016" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-16.png';?>" width="101" height="158" alt="" />
				</div>
				<div class="riacho-menu-menor-17_">
				</div>
				<div class="impresso_">
					<a href="<?php echo esc_url( home_url( '/impressos' ) ); ?>" title="Impressos - Riacho">
					<img id="impresso" class="hover_imgs" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/impresso2.png';?>" width="111" height="134" alt="" />
					</a>
				</div>
				<div class="circulos019_">
					<img id="circulos019" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-19.png';?>" width="65" height="204" alt="" />
				</div>
				<div class="circulos020_">
					<img id="circulos020" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-20.png';?>" width="228" height="93" alt="" />
				</div>
				<div class="somos_">
					<a href="<?php echo esc_url( home_url( '/somos' ) ); ?>" title="Somos">
					<img id="somos" class="hover_imgs" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/somos2.png';?>" width="101" height="134" alt="" />
					</a>
				</div>
				<div class="circulos022_">
					<img id="circulos022" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-22.png"';?> width="45" height="165" alt="" />
				</div>
				<div class="riacho-menu-menor-23_">
				</div>
				<div class="circulos024_">
					<img id="circulos024" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-24.png';?>" width="68" height="142" alt="" />
				</div>
				<div class="circulos025_">
					<img id="circulos025" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-25.png';?>" width="57" height="72" alt="" />
				</div>
				<div class="novas_">
					<a href="<?php echo esc_url( home_url( '/noticias' ) ); ?>" title="Notícias">
					<img id="novas" class="hover_imgs" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/novas2.png';?>" width="183" height="102" alt="" />
					</a>
				</div>
				<div class="circulos027_">
					<img id="circulos027" src="<?php echo bloginfo('stylesheet_directory') . '/images/home/circulos-27.png';?>" width="70" height="72" alt="" />
				</div>
				<div class="circulos028_">
				</div>
				<div class="riacho-menu-menor-29_">
				</div>
				<div class="riacho-menu-menor-30_">
				</div>
				<div class="riacho-menu-menor-31_">
				</div>

		</main><!-- #main -->
	</div><!-- #primary -->


</div>
<?php
get_footer();
