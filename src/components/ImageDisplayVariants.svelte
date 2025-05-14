<script lang="ts">
    import type { TestImage } from '../types/metadata';
    import MetadataDisplay from './MetadataDisplay.svelte';

    export let image: TestImage;
    let showMetadata = false;

    function toggleMetadata() {
        showMetadata = !showMetadata;
    }
</script>

<div class="display-variants">
    <div class="variant">
        <h3>Standard Image</h3>
        <img
            src={image.properties.URL}
            alt="Standard image display"
            width={image.properties.naturalWidth}
            height={image.properties.naturalHeight}
        />
    </div>

    <div class="variant">
        <h3>Image Behind Div</h3>
        <div class="image-behind">
            <img
                src={image.properties.URL}
                alt="Image behind div"
                width={image.properties.naturalWidth}
                height={image.properties.naturalHeight}
            />
            <div class="overlay">Overlay Content</div>
        </div>
    </div>

    <div class="variant">
        <h3>Background Image</h3>
        <div 
            class="background-image"
            style="background-image: url({image.properties.URL})"
        >
            Background Image Content
        </div>
    </div>

    <div class="variant">
        <h3>Hidden Image</h3>
        <img
            src={image.properties.URL}
            alt="Hidden image"
            class="hidden"
            width={image.properties.naturalWidth}
            height={image.properties.naturalHeight}
        />
    </div>

    <div class="variant">
        <h3>No Pointer Events</h3>
        <img
            src={image.properties.URL}
            alt="No pointer events"
            class="no-pointer"
            width={image.properties.naturalWidth}
            height={image.properties.naturalHeight}
        />
    </div>

    <button on:click={toggleMetadata}>
        {showMetadata ? 'Hide Metadata' : 'Show Metadata'}
    </button>

    {#if showMetadata}
        <MetadataDisplay {image} />
    {/if}
</div>

<style>
    .display-variants {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 1rem;
    }

    .variant {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 1rem;
        background: white;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    .image-behind {
        position: relative;
        width: 100%;
        height: 200px;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .background-image {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
    }

    .hidden {
        display: none;
    }

    .no-pointer {
        pointer-events: none;
    }

    button {
        grid-column: 1 / -1;
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background: #45a049;
    }
</style> 