<?php if ( wp_is_mobile() ) {

  Themewrangler::setup_page();get_header('mobile' /***Template Name: Project Index */);
	
} else {
  
  Themewrangler::setup_page();get_header( /***Template Name: Project Index */);

} ?>

<div id="content">

<section class="gallery frame index">
<?php $paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1; // setup pagination

$the_query = new WP_Query( array( 
'post_type'      => 'page',
'paged'          => $paged,
'orderby'        => 'menu_order',
'post_parent'    => $post->ID,
'posts_per_page' => 20) 
); ?>

<?php while ( $the_query->have_posts() ) : $the_query->the_post(); $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'fullsize'); ?>
<figure class="item bit-3">
  <a href="<?php the_permalink();?>">
    <span class="thumb"><img src="<?php echo $image[0]; ?>" alt="<?php the_title(); ?>" /></span>
    <h3><?php the_title();?></h3>
  </a>
</figure>
<?php endwhile; wp_reset_postdata(); // Rest Data ?>

</section>

</div><!-- Content-->
<?php get_footer(); ?>
