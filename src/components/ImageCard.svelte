<!-- src/components/ImageCard.svelte -->
<script lang="ts">
import type { TestImage } from '../types/metadata';
import MetadataDisplay from './MetadataDisplay.svelte';

export let image: TestImage;
let showMetadata = false;

function toggleMetadata() {
    showMetadata = !showMetadata;
}
</script>

<div class="image-card">
<img
    src={image.properties.URL}
alt="Test image"
width={image.properties.naturalWidth}
height={image.properties.naturalHeight}
/>
<button on:click={toggleMetadata}>
    {showMetadata ? 'Hide Metadata' : 'Show Metadata'}
    </button>
{#if showMetadata}
<MetadataDisplay {image} />
{/if}
</div>

<style>
.image-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

    img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}

    button {
    margin: 0.5rem 0;
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