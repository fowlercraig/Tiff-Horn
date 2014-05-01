<?php Themewrangler::setup_page();get_header(); ?>


<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="<?php  global $post; $post_slug=$post->post_name; echo $post_slug; ?>" <?php post_class(); ?>>
   <div class="content"><div>
      <?php the_content();?>
      <?php if ( is_page( 'info' ) ) { include('snippets/mailchimp.php'); } ?>
   </div></div>
</article>
<?php endwhile; endif; ?>

<section class="gallery frame index">
<?php $paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1; // setup pagination

$the_query = new WP_Query( array( 
'post_type'      => 'page',
'paged'          => $paged,
'post_parent'    => 5,
'posts_per_page' => 20) 
); ?>

<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
<figure <?php post_class('item bit-3'); ?>>
  <a href="<?php the_permalink();?>">
    <span class="thumb"><?php the_post_thumbnail('large'); ?></span>
    <h3><?php the_title();?></h3>
  </a>
</figure>
<?php endwhile; wp_reset_postdata(); // Rest Data ?>

</section>

</section>
<?php get_footer(); ?>
