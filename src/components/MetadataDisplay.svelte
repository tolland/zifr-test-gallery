<!-- src/components/MetadataDisplay.svelte -->
<script lang="ts">
    import type { TestImage } from '../types/metadata';

    export let image: TestImage;

    $: properties = image.properties;
    $: metadata = image.metadata;
</script>

<div class="metadata">
    <h3>Image Properties</h3>
    <dl>
        <dt>Dimensions</dt>
        <dd>{properties.naturalWidth} x {properties.naturalHeight}</dd>

        <dt>Size</dt>
        <dd>{(properties.byteLength / 1024).toFixed(2)} KB</dd>

        <dt>Type</dt>
        <dd>{properties.contentType}</dd>

        {#if properties.lastModified}
            <dt>Last Modified</dt>
            <dd>{new Date(properties.lastModified).toLocaleString()}</dd>
        {/if}
    </dl>

    <h3>Metadata</h3>
    <dl>
        {#each Object.entries(metadata) as [key, item]}
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
        {/each}
    </dl>

    {#if image.errors?.length}
        <div class="errors">
            <h3>Errors</h3>
            <ul>
                {#each image.errors as error}
                    <li>{error}</li>
                {/each}
            </ul>
        </div>
    {/if}

    {#if image.warnings?.length}
        <div class="warnings">
            <h3>Warnings</h3>
            <ul>
                {#each image.warnings as warning}
                    <li>{warning}</li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    .metadata {
        margin-top: 1rem;
        padding: 1rem;
        background: #f5f5f5;
        border-radius: 4px;
    }

    dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem 1rem;
    }

    dt {
        font-weight: bold;
    }

    .errors {
        color: #d32f2f;
        margin-top: 1rem;
    }

    .warnings {
        color: #f57c00;
        margin-top: 1rem;
    }
</style>