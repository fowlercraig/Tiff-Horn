<?php Themewrangler::setup_page();get_header(/***Template Name: Project Index */); ?>

<div id="content">

<section class="gallery frame">
<?php $paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1; // setup pagination

$the_query = new WP_Query( array( 
'post_type'      => 'page',
'paged'          => $paged,
'post_parent'    => $post->ID,
'posts_per_page' => 20) 
); ?>

<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
<figure <?php post_class('item bit-4'); ?>>
  <a href="<?php the_permalink();?>">
    <?php the_post_thumbnail('homepage-thumb'); ?>

    <h3><?php the_title();?></h3>
  </a>
</figure>
<?php endwhile; wp_reset_postdata(); // Rest Data ?>

</section>

</div><!-- Content-->
<?php get_footer(); ?>