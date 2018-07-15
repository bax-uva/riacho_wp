<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'riacho_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ']~Zy@F,Yy.Y9~Iuv+Jlk~xx#{_NVcu_#gBWB7nB]P{%u6ZbzM~`:&sY1}BS)MAPr');
define('SECURE_AUTH_KEY',  'Gy]^bXJiD3Dp{SLI/p;41JuJ#S3eNxmlEw:6Sm)GP@#/QH+s}Ku.29#%TnJ=>LP6');
define('LOGGED_IN_KEY',    'Kgo</@O?<s8.YU,^i4vc32nQZW<wueQ?dCW1Teertd%S,^}(S_4y<h/m59-1n&zP');
define('NONCE_KEY',        'b =Hk:Qv {e`%{_%Dx9|H7o_I.cfI@02E3e?[pTOVu*Fr0{2]{-?#g~$DwbRR iS');
define('AUTH_SALT',        'I4BhUv2a4F&Vuh4RQ<ZTJ<g%eL7}>mJO]lmMzq3*0{D;hwuWf1@e/aR<}3]@eW=1');
define('SECURE_AUTH_SALT', 'c]j7*$=?0$n{kpX ICk6wk]B9JOK[Nrd*:@,-ROt]|h;KfjuB-% owR>+,X>;hHu');
define('LOGGED_IN_SALT',   'R>pqk~68ZJ~ys;x:Z9hIB(uKu%wCQ$y7wujO{A0XN;}D{to4iy-584mmlqOQ$0,N');
define('NONCE_SALT',       'MzOIVuRZ<V3R#$TZ%1!#E0Qa1L_X_eUDV`wEUgN`e2$1._m/o4mK*H4L_}WQ>m*.');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
