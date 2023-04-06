<?php
/*
 * Plugin Name:		Book Anything
 * Version:			1.00
 * Author:			Towfiqul Islam
 */

if (!defined('ABSPATH')) {
	exit;
}
require_once __DIR__ . '/vendor/autoload.php';
final class Bookanything
{

	private function __construct()
	{
		$this->defineconst();
		add_action('init', [$this, 'inithandler'], -1);
	}

	public static function init()
	{
		static $instance = false;

		if (!$instance) {
			$instance = new self();
		}

		return $instance;
	}

	public function inithandler()
	{

		NoMadLab\Book\Frontend\Shortcode::init();
		NoMadLab\Book\Enqueue\Enqueue::init();

	}


	public function defineconst()
	{
		define("BOOKANYTHING_VERSION", '1.0');
		define("BOOKANYTHING_ROOT_DIR_PATH", plugin_dir_path(__FILE__));
		define("BOOKANYTHING_ASSETS_DIR_PATH", BOOKANYTHING_ROOT_DIR_PATH . "assets/");
		define("BOOKANYTHING_INCLUDES_DIR_PATH", BOOKANYTHING_ROOT_DIR_PATH . "includes/");

		define("BOOKANYTHING_ROOT_URI", plugins_url('/', __FILE__));
		define("BOOKANYTHING_ASSETS_URI", BOOKANYTHING_ROOT_URI . "assets/");
	}


}

function bookanything_start()
{
	return Bookanything::init();
}

// Plugin Start
bookanything_start();