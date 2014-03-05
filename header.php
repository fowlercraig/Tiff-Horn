<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

<!-- Website
---- Designed
---- By
---- WeAreGiants.
---- wearegiants.com
-->

<meta charset="utf-8">
<title><?php wp_title(' | ', true, 'right'); ?></title>
<meta name="description" content="<?php bloginfo( 'description' ) ?>">
<meta name="author" content="Craig Fowler | WeAreGiants.com">

<meta property="og:title" content="<?php bloginfo( 'name' ) ?>">
<meta property="og:url" content="<?php bloginfo( 'wpurl' ) ?>">
<meta property="og:image" content="<?php bloginfo('template_directory'); ?>/images/facebook.jpg">
<meta property="og:description" content="<?php bloginfo( 'description' ) ?>">

<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<?php wp_head(); ?>

<header id="header" class="frame">
<nav class="bit-1 item center">
   <h1 class="bit-4"><a href="<?php bloginfo( 'wpurl' ) ?>"><?php bloginfo( 'name' ) ?></a></h1>
   <?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'container_class' => 'menu bit-75',)); ?>
   
</nav>
</header>

<div id="wrapper-outter">
<div id="wrapper">