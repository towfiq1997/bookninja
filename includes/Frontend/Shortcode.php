<?php

namespace NoMadLab\Book\Frontend;

class Shortcode
{
    public static function init()
    {
        $self = new self();
        add_shortcode('gen_book', [$self, 'genbookrender']);

    }
    public function readmail()
    {
        print_r("sasas");
    }
    public function genbookrender()
    {
        wp_enqueue_script("gen-book-react");
        wp_enqueue_style("gen-book-css");
        return "<div id='reactroot' class='reactroot'></div>";
    }
}