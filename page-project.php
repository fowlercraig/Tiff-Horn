<?php Themewrangler::setup_page();get_header(/***Template Name: Project  */); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


<section id="content" class="project" role="main">
<article id="post-<?php the_ID(); ?>" <?php post_class('frame project'); ?>>
<header>
<h1 class="project-title"><?php the_title(); ?></h1>
</header>

<?php $cc = get_the_content(); if($cc != '') { ?>
<div class="content item">
<?php the_content(); ?>
</div>
<?php } else {} ?>
<?php include('snippets/project-gallery.php')?>
</article><!--Page-->
<?php endwhile; endif; ?>
</section><!--Content-->

<?php get_footer(); ?>