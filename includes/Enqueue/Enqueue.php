<?php
namespace NoMadLab\Book\Enqueue;

class Enqueue{
  public static function init(){
    $self = new self();
    add_action( "wp_enqueue_scripts",[$self,'assetsloading']);
  }

  public function assetsloading(){
    $dependencies = include_once BOOKANYTHING_ASSETS_DIR_PATH . sprintf('js/frontend.%s.asset.php', BOOKANYTHING_VERSION );

    wp_register_style('gen-book-css',BOOKANYTHING_ASSETS_URI.sprintf('css/genbook.css'),array(),BOOKANYTHING_VERSION,'all');

    wp_register_script( 'gen-book-react',BOOKANYTHING_ASSETS_URI.sprintf('js/frontend.%s.js',BOOKANYTHING_VERSION),$dependencies['dependencies'],$dependencies['version'],true);
    
  }
}