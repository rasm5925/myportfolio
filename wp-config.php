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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

define('FS_METHOD','direct');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myportfolio' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>]e3zs%1ilCDh4ca>BcdJWH?55J c$y+k`;u^;BXY.YtDGfz+jyyIc-SL^[{5{;N');
define('SECURE_AUTH_KEY',  '.F<t%v$b`2D!m+bqIY`X(ZXo|8/&dsM|}RI(.Tl-7:__g )~QY*h,gZo~R-~>Mkc');
define('LOGGED_IN_KEY',    '-Q[TG=%YzOSj8/9+gLJ5_lUz*U(xr-}Q01ZBa|mBaIf79N*3AlWzg;M]^THKedE~');
define('NONCE_KEY',        'VyjH.UXXg:}>2OrK4+VS{m<:S8HHw~=>E0]]@`]|N`jp4:*|Pvs))b[^+<B}b.&l');
define('AUTH_SALT',        ')q50zLDBDtrERfoiug)K{_N8gk*]yLD/X|cf@3~8Nx3DT(Fs<7,BT{|2^p*^eYQ8');
define('SECURE_AUTH_SALT', 'E#YIBX:]FZ0b(d`T? eDk:W(Rg@*w6<09?76u3UmWz*<}V6)O.EZ-8(b7Dsiz:Ff');
define('LOGGED_IN_SALT',   'ScP^uuc=[DNm1M`)6Oh|nX1zzl<q^vd2=m10JbuMAPK|XVJ!GrQVW-X_b06m7?VS');
define('NONCE_SALT',       'o,rb@:T@*| 9Feuk}]0<h-kLepfhRF(.NH[RL !*yncFf@0-t[%a`5SuQ(@=BHW<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_myportfolio';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
