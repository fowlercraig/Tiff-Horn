<?php

require_once locate_template('/includes/blankslate.php');                   // Blankslate Things
require_once locate_template('/includes/activation.php');                   // Theme activation
require_once locate_template('/includes/themewrangler.class.php');          // Theme Wrangler
include_once locate_template('/includes/advanced-custom-fields/acf.php' );  // ACF
include_once locate_template('/includes/acf-gallery/acf-gallery.php' );     // ACF Gallery 

define( 'ACF_LITE', true );

$settings = array(

'available_scripts' => array(
'jquery'		   => array('//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js','1.10.2'),
'smartajax'		 => array('/wp-content/themes/gridded/javascripts/load.smartajax.js'),
'nprogress'		 => array('//cdnjs.cloudflare.com/ajax/libs/nprogress/0.1.2/nprogress.min.js'),
'superfish'		 => array('//cdnjs.cloudflare.com/ajax/libs/superfish/1.7.4/superfish.min.js'),
'easing'		   => array('//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'),
'royalslider'	 => array('/wp-content/themes/gridded/javascripts/jquery.royalslider.min.js'),
'isotope'		   => array('/wp-content/themes/gridded/javascripts/isotope.pkgd.min.js'),
'slides'		   => array('/wp-content/themes/gridded/javascripts/slides.min.jquery.js'),
'fitvids'		   => array('//cdnjs.cloudflare.com/ajax/libs/fitvids/1.0.1/jquery.fitvids.min.js'),
'parallax'		 => array('//cdnjs.cloudflare.com/ajax/libs/jquery-parallax/1.1.3/jquery-parallax-min.js'),
'waypoints'		 => array('//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js'),
'debounced'		 => array('/wp-content/themes/gridded/javascripts/scroller/jquery.debouncedresize.js'),
'transit'		   => array('//cdnjs.cloudflare.com/ajax/libs/jquery.transit/0.9.9/jquery.transit.min.js'),
'fixedscroll'	 => array('/wp-content/themes/gridded/javascripts/scroller/cbpFixedScrollLayout.js'),
'ui'			     => array('//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js'),
'zencoder'		 => array('//vjs.zencdn.net/4.0/video.js'),
'bigvideo'		 => array('/wp-content/themes/gridded/javascripts/bigvideo.js'),
'onepage'		   => array('/wp-content/themes/gridded/javascripts/jquery.onepage-scroll.min.js'),
'zoom'  		   => array('/wp-content/themes/gridded/javascripts/jquery.zoomooz.min.js'),
'pep'      		 => array('//cdnjs.cloudflare.com/ajax/libs/jquery.pep/0.4.0/jquery.pep.min.js'),
'magnific'     => array('//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/0.9.9/jquery.magnific-popup.min.js'),
'scripts'		   => array('/wp-content/themes/gridded/javascripts/scripts.js'),
'scrollsec'	   => array('/wp-content/themes/gridded/javascripts/jquery.scrollSections.js'),
'imgloaded'	   => array('//cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.0.4/jquery.imagesloaded.min.js'),
'scrollsec-js' => array('/wp-content/themes/gridded/javascripts/scrollsection-depends.js'),
'smoothzoom'   => array('/wp-content/themes/gridded/javascripts/jquery.smoothZoom.min.js'),
'hammer'       => array('//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.min.js'),
),

'default_scripts' => array(
'jquery',
'smartajax',
'onepage',
'transit',
'fitvids',
'isotope',
'imgloaded',
'zoom',
'smoothzoom',
'magnific',
'scripts'),

'available_stylesheets' => array(
'default' 	   => array('/wp-content/themes/gridded/style.css',1),
'skeleton' 	   => array('/wp-content/themes/gridded/stylesheets/skeleton.css'),
'layout' 		   => array('/wp-content/themes/gridded/stylesheets/layout.css'),
'fonts'        => array('/wp-content/themes/gridded/fonts/maisonneue-demi-trial.css'),
'sacker'       => array('http://fast.fonts.net/cssapi/ac0ffab6-783b-441b-b12f-2b80c75fb77e.css'),
'royalslider'  => array('/wp-content/themes/gridded/stylesheets/royalslider.css'),
'rsmin' 		   => array('/wp-content/themes/gridded/stylesheets/rs-minimal-white.css'),
'nprogress' 	 => array('/wp-content/themes/gridded/stylesheets/nprogress.css'),
'cstomscroll'  => array('/wp-content/themes/gridded/stylesheets/jquery.mCustomScrollbar.css'),
'magnific'  	 => array('/wp-content/themes/gridded/stylesheets/magnific.css'),
'montserat' 	 => array('//fonts.googleapis.com/css?family=Montserrat:400,700'),
'onepage' 	   => array('/wp-content/themes/gridded/stylesheets/onepage-scroll.css'),
'scrollsec' 	 => array('/wp-content/themes/gridded/stylesheets/jquery.scrollSections.css'),
'gizmo' 	     => array('/wp-content/themes/gridded/fonts/ss-gizmo.css'),
),

'default_stylesheets' => array(
'default',
'fonts',
'magnific',
'sacker',
'onepage',
'gizmo',
'layout'
),

'remove_from_head' => array(
'rsd_link',
'wlwmanifest_link',
'wp_generator',
'rel_canonical',
'index_rel_link',
'parent_post_rel_link',
'start_post_rel_link',
'adjacent_posts_rel_link',
'adjacent_posts_rel_link_wp_head',
'wp_shortlink_wp_head',
'wp_shortlink_wp_header',
'feed_links',
'latest_comments',
'feed_links_extra',
'recent_comments_style'
),

'deregister_scripts' => array('jquery','l10n')

);

Themewrangler::set_defaults( $settings );

if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_projects',
		'title' => 'Projects',
		'fields' => array (
			array (
				'key' => 'field_53177669964c5',
				'label' => 'Project Gallery',
				'name' => 'project_gallery',
				'type' => 'gallery',
				'preview_size' => 'thumbnail',
				'library' => 'all',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'page-project.php',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}
