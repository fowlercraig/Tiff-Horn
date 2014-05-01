<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

<!-- Website designed by WeAreGiants | wearegiants.com -->

<meta charset="utf-8">
<title><?php wp_title(' | ', true, 'right'); ?></title>
<meta name="description" content="<?php bloginfo( 'description' ) ?>">
<meta name="author" content="Craig Fowler | WeAreGiants.com">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<meta property="og:title" content="<?php bloginfo( 'name' ) ?>">
<meta property="og:url" content="<?php bloginfo( 'wpurl' ) ?>">
<meta property="og:image" content="<?php bloginfo('template_directory'); ?>/images/facebook.jpg">
<meta property="og:description" content="<?php bloginfo( 'description' ) ?>">

<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<?php wp_head(); ?>

</head>

<body <?php body_class('mobile'); ?>>

<nav id="mobile-nav-bar"></nav>

<header id="header-mobile" class="frame">
   <h1 class="logo"><a rel="tab" data-url="/"><?php bloginfo( 'name' ) ?></a></h1>
   <nav>
     <a id="btnInfo" rel="tab" data-url="/info">Info</a>
     <a href="#" id="btnJournal">Journal</a>
   </nav>
</header>

<div id="wrapper-outter">
<div id="wrapper">
