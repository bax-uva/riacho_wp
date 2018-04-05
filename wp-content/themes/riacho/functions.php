<?php
/**
 * Riacho functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Riacho
 */

if ( ! function_exists( 'riacho_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function riacho_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Riacho, use a find and replace
	 * to change 'riacho' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'riacho', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	/*register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'riacho' ),
	) );*/

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'riacho_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'riacho_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function riacho_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'riacho_content_width', 640 );
}
add_action( 'after_setup_theme', 'riacho_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function riacho_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'riacho' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'riacho' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'riacho_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function riacho_scripts() {

	wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans+SC', false );

	//wp_enqueue_script( 'riacho-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'riacho-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}


	if ( !is_admin() ) {
		wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/js/bootstrap/css/bootstrap.min.css' );
		wp_enqueue_style( 'nprogress', get_template_directory_uri() . '/js/nprogress.css' );
		wp_enqueue_style( 'featherlight', get_template_directory_uri() . '/js/featherlight/featherlight.min.css' );
		wp_enqueue_style( 'linerplayer', get_template_directory_uri() . '/liner/css/style.css' );
		wp_enqueue_script( 'nprogress', get_template_directory_uri() . '/js/nprogress.js', array(), '20151215', true );
		wp_enqueue_script( 'bootstrap', get_template_directory_uri(). '/js/bootstrap/js/bootstrap.min.js', array(), '1.0' );
		if ( !is_home() ){
			wp_enqueue_script( 'historyjs', get_template_directory_uri(). '/js/jquery.history.js', array( 'jquery' ), '1.7.1' );
			wp_enqueue_script( 'ajax_init', get_template_directory_uri(). '/js/ajax_init.js', array( 'historyjs' ), '1.0' );
			wp_enqueue_script( 'preload_images', get_template_directory_uri(). '/js/preload_images.js', array( 'jquery' ), '1.0' );
		}
		wp_enqueue_script( 'featherlight', get_template_directory_uri(). '/js/featherlight/featherlight.min.js', array( 'jquery' ), '1.0' );
		wp_enqueue_script( 'jquery-ui', "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js", array( 'jquery' ), '1.0' );
		wp_enqueue_script( 'jquery-ui-touch-punch', get_template_directory_uri(). '/liner/js/jquery.ui.touch-punch.min.js', array( 'jquery-ui' ), '1.0' );
		wp_enqueue_script( 'jquery-jplayer', get_template_directory_uri(). '/liner/js/jquery.jplayer.min.js', array( 'jquery' ), '1.0' );
		wp_enqueue_script( 'jplayer-playlist', get_template_directory_uri(). '/liner/js/jplayer.playlist.min.js', array(), '1.0' );
		wp_enqueue_script( 'id3', get_template_directory_uri(). '/liner/js/id3.min.js', array(), '1.0' );
		wp_enqueue_script( 'iscroll', get_template_directory_uri(). '/liner/js/iscroll.min.js', array(), '1.0' );
		wp_enqueue_script( 'linerplayer', get_template_directory_uri(). '/liner/js/jquery.linerPlayer.js', array( 'jquery' ), '1.0' );
		wp_enqueue_script( 'riachoplayer', get_template_directory_uri(). '/js/riachoplayer.js', array(), '1.0' );
		wp_enqueue_script( 'webglearth', '//www.webglearth.com/v2/api.js', array(), '2', true );
	}

	wp_enqueue_style( 'riacho-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'riacho_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


// Define what post types to search
function riacho_add_custom_types_search( $query ) {
	if ( $query->is_search ) {
		$query->set( 'post_type', array( 'post', 'page', 'feed', 'animacao', 'impresso', 'audio'));
	}
	return $query;
}

// The hook needed to search ALL content
add_filter( 'the_search_query', 'riacho_add_custom_types_search' );


// Return an alternate title, without prefix, for custom post typesthe get_the_archive_title().
add_filter('get_the_archive_title', function ($title) {
	if ( is_post_type_archive() ) {
        	$title = post_type_archive_title( '', false );
		$title = preg_replace('/Notícias/', '', $title); // remove title from Noticias archive
		$title = preg_replace('/Impressos/', ' ', $title); // remove title from Impressos archive
		$title = preg_replace('/Animação/', ' ', $title); // remove title from Animação archive
		$title = preg_replace('/Rádio/', ' ', $title); // remove title from Animação archive
	} else if ( is_tag() ){
		$title = preg_replace('/Tag: /', '<span class="glyphicon glyphicon-tag tag-archive-icon" aria-hidden="true"></span>', $title);
	}
	return $title;
});

// Add a second featured image to Impressos, to be used on link hover
if (class_exists('MultiPostThumbnails')) {
    new MultiPostThumbnails(
        array(
            'label' => 'Secondary Image',
            'id' => 'secondary-image',
            'post_type' => 'impresso'
        )
    );
}


/* Globinho Widget */
class GlobinhoWidget extends WP_Widget {

	function __construct() {
		// Instantiate the parent object
		parent::__construct( false, 'Globinho' );
	}

	function widget( $args, $instance ) { ?>

		<div id="earth_div" style="height:300px; border-radius:35px;"></div>
		<script>
			window.onload = function() {
				var earth = new WE.map('earth_div');
				WE.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(earth);

				<?php 		
				$qargs = array(
					'post_type' 		=> 'pin',
					'post_status' 		=> 'publish',
					'posts_per_page' 	=> -1);

				$wp_query = new WP_Query($qargs);
				while($wp_query->have_posts()): $wp_query->the_post();
					$lat = get_post_meta(get_the_ID(), 'latitude', true);
					$long = get_post_meta(get_the_ID(), 'longitude', true);	
				?>
					var marker = WE.marker([<?php echo $lat . ', ' . $long; ?>], 'https://riacho.me/wp-content/themes/riacho/images/pins/pin8.png', 9, 21).addTo(earth); //WE.marker([51.5, -0.09]).addTo(earth);
					var content = <?php echo json_encode(get_the_content()); ?>;
					marker.bindPopup("<b style='color:#000;'><?php the_title();?></b><br /><span style='font-size:10px;color:#999'>" + content + "</span>", {maxWidth: 150, closeButton: true});				
				<?php endwhile;	?>
				earth.setView([-30.0346, -51.2177], 0);
			};
		</script>
		<style>
			.cesium-credit-textContainer{display:none;}
		</style>

	<?php 
	}

	function update( $new_instance, $old_instance ) {
		// Save widget options
	}

	function form( $instance ) {
		// Output admin widget options form
	}
}

function riacho_register_widgets() {
	register_widget( 'GlobinhoWidget' );
}

add_action( 'widgets_init', 'riacho_register_widgets' );

/* Remove link to comments feed */
add_filter( 'feed_links_show_comments_feed', '__return_false' );


