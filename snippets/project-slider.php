<nav id="slides-control">
  <a class="next">Up</a>
  <a class="down">Down</a>
</nav>

<?php $images = get_field('project_gallery'); if( $images ): ?>
<div class="slider list project royalSlider rsMin">

<?php if (has_post_thumbnail( $post->ID ) ): ?>
<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'fullsize'); ?>

<section class="gallery-item">
<figure class="item"><img src="<?php echo $image[0]; ?>" alt="<?php bloginfo('name'); ?> | <?php the_title(); ?>" /></figure>
</section>
<?php endif; ?>

<?php foreach( $images as $image ): ?>
<section class="gallery-item">
<figure class="item"><img src="<?php echo $image['url']; ?>" alt="<?php bloginfo('name'); ?> | <?php the_title(); ?>" /></figure>
</section>

<?php endforeach; ?>

</div><!-- Gallery -->
<?php endif; ?>

