<nav id="slides-control">
  <div class="wrapper">
  <a class="next">&#8593;</a>
  <a class="down">&#8595;</a>
  </div>
</nav>

<?php $images = get_field('project_gallery'); if( $images ): ?>
<div class="gallery list project">

<?php if (has_post_thumbnail( $post->ID ) ): ?>
<?php $image_big = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'fullsize'); ?>
<?php $image_med = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large'); ?>

<section class="gallery-item">
<figure class="item">
<a href="<?php echo $image_big[0]; ?>" class="pop">
<img src="<?php echo $image_med[0]; ?>" alt="<?php bloginfo('name'); ?> | <?php the_title(); ?>" />
</a>
</figure>
</section>
<?php endif; ?>

<?php foreach( $images as $image_med ): ?>
<section class="gallery-item">
<figure class="item">
<a href="<?php echo $image_big[0]; ?>" class="pop">
<img src="<?php echo $image_med[0]; ?>" alt="<?php bloginfo('name'); ?> | <?php the_title(); ?>" />
</a>
</figure>
</section>

<?php endforeach; ?>

</div><!-- Gallery -->
<?php endif; ?>

