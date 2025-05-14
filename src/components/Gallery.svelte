<!-- src/components/Gallery.svelte -->
<script lang="ts">
    import { testImages } from '../data/testImages';
    import ImageCard from './ImageCard.svelte';
</script>

<div class="gallery">
    {#each testImages as image (image.id)}
        <ImageCard {image} />
    {/each}
</div>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }
</style>