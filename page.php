<?php Themewrangler::setup_page();get_header(); ?>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
   <header>
      <?php the_title();?>
   </header>
   <div class="content">
      <?php the_content();?>
   </div>
</article>
<?php endwhile; endif; ?>
</section>
<?php get_footer(); ?>