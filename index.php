<?php Themewrangler::setup_page();get_header(); ?>

<div id="content">

<section class="gallery frame">

   <?php $paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1; // setup pagination
   
   $the_query = new WP_Query( array( 
   'post_type'			=> 'page',
   'paged'				=> $paged,
   'post_parent'     => 38,
   'posts_per_page'	=> 20) 
   ); ?>
   
   <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
   <?php include('snippets/index-figure.php') ?>
   <?php endwhile; wp_reset_postdata(); // Rest Data ?>
   
</section>

</div><!-- Content-->
<?php get_footer(); ?>