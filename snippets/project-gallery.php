
<?php $images = get_field('project_gallery'); if( $images ): ?>
<section class="gallery list">
<?php foreach( $images as $image ): ?>
<figure class="item"><img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" /></figure>
<?php endforeach; ?>
</section>
<?php endif; ?>

