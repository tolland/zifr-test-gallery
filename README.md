# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Image Test Gallery

A comprehensive test gallery for testing image detection and metadata extraction. This project is designed to test various methods of displaying images and their associated metadata in a web environment.

## Features

- Multiple image display methods:
  - Standard `<img>` elements
  - Images behind div overlays
  - Background images
  - Hidden images
  - Images with pointer-events disabled
- Comprehensive metadata display
- Various image types and formats
- Different image sizes and aspect ratios
- EXIF metadata examples
- AI-generated image metadata examples

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Add test images to the `static/images` directory:
   - landscape-1.jpg
   - portrait-1.jpg
   - ai-generated-1.png
   - product-1.jpg

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

- `src/components/` - Svelte components
  - `Gallery.svelte` - Main gallery component
  - `ImageCard.svelte` - Individual image card component
  - `ImageDisplayVariants.svelte` - Component showing different image display methods
  - `MetadataDisplay.svelte` - Component for displaying image metadata
- `src/data/` - Test data and image information
- `src/types/` - TypeScript type definitions
- `static/images/` - Image assets

## Development

The project is built with:
- SvelteKit
- TypeScript
- Modern CSS Grid and Flexbox

## Building for Production

To build the project for production:

```bash
pnpm build
```

The built files will be in the `build` directory.

## License

MIT
