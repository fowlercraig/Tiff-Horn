<?php Themewrangler::setup_page();get_header(/***Template Name: Project  */); ?>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class('frame'); ?>>

<div class="content item">
<?php the_content(); ?>
</div>
<?php include('snippets/project-gallery.php')?>
</article>
<?php endwhile; endif; ?>
</section>
<?php get_footer(); ?>