<script lang="ts">
    import { testImages } from '../data/testImages';
    import ImageDisplayVariants from '../components/ImageDisplayVariants.svelte';
    import ImageCard from '../components/ImageCard.svelte';
</script>

<svelte:head>
    <title>Image Test Gallery</title>
</svelte:head>

<main>
    <header>
        <h1>Image Test Gallery</h1>
        <p>A comprehensive gallery for testing image detection and metadata extraction</p>
    </header>

    <section class="gallery-section">
        <h2>Standard Image Display</h2>
        <div class="gallery">
            {#each testImages as image (image.id)}
                <ImageCard {image} />
            {/each}
        </div>
    </section>

    <section class="variants-section">
        <h2>Image Display Variants</h2>
        {#each testImages as image (image.id)}
            <div class="variant-container">
                <h3>Test Case: {image.id}</h3>
                <ImageDisplayVariants {image} />
            </div>
        {/each}
    </section>
</main>

<style>
    main {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2rem;
    }

    header {
        text-align: center;
        margin-bottom: 3rem;
    }

    h1 {
        font-size: 2.5rem;
        color: #333;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2rem;
        color: #444;
        margin: 2rem 0 1rem;
    }

    h3 {
        font-size: 1.5rem;
        color: #555;
        margin: 1.5rem 0 1rem;
    }

    .gallery-section {
        margin-bottom: 4rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }

    .variants-section {
        margin-top: 4rem;
    }

    .variant-container {
        margin-bottom: 4rem;
        padding: 2rem;
        background: #f8f8f8;
        border-radius: 8px;
    }

    p {
        color: #666;
        font-size: 1.1rem;
        line-height: 1.6;
    }
</style>
