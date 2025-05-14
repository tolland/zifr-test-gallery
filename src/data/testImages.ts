// src/data/testImages.ts
import type { TestImage } from '../types/metadata';

const basePath = '/zifr-test-gallery';

export const testImages: TestImage[] = [
    {
        id: 'landscape-1',
        properties: {
            URL: `${basePath}/images/006549.b5f0c8e2.2959255160.png`,
            naturalWidth: 512,
            naturalHeight: 576,
            byteLength: 347686,
            contentType: 'image/png',
            lastModified: '2025-05-14 17:14:15.594697952 +0100'
        },
        metadata: {
            camera: {
                label: 'Camera',
                value: 'Canon EOS R5'
            },
            exposure: {
                label: 'Exposure',
                value: '1/250s'
            },
            aperture: {
                label: 'Aperture',
                value: 'f/4.0'
            },
            iso: {
                label: 'ISO',
                value: '100'
            },
            prompt: {
                label: 'AI Prompt',
                value: 'A serene mountain landscape at sunset with dramatic clouds'
            }
        }
    },
    {
        id: 'invokeai-new-1',
        properties: {
            URL: `${basePath}/images/000001.1125528959.png`,
            naturalWidth: 1080,
            naturalHeight: 1920,
            byteLength: 1024 * 1024 * 1.8,
            contentType: 'image/jpeg',
            lastModified: '2024-03-14T15:30:00Z'
        },
        metadata: {
            camera: {
                label: 'Camera',
                value: 'Sony A7IV'
            },
            exposure: {
                label: 'Exposure',
                value: '1/125s'
            },
            aperture: {
                label: 'Aperture',
                value: 'f/2.8'
            },
            iso: {
                label: 'ISO',
                value: '400'
            },
            prompt: {
                label: 'AI Prompt',
                value: 'Professional headshot with soft lighting and neutral background'
            }
        }
    },
    {
        id: 'ai-generated-1',
        properties: {
            URL: `${basePath}/images/14c1f6b3-e8ea-426b-a8f0-21567c656260.png`,
            naturalWidth: 1024,
            naturalHeight: 1024,
            byteLength: 1024 * 1024 * 3.2,
            contentType: 'image/png',
            lastModified: '2024-03-13T09:15:00Z'
        },
        metadata: {
            model: {
                label: 'AI Model',
                value: 'Stable Diffusion XL'
            },
            prompt: {
                label: 'AI Prompt',
                value: 'A futuristic cityscape with flying cars and neon lights, cyberpunk style'
            },
            negativePrompt: {
                label: 'Negative Prompt',
                value: 'blurry, low quality, distorted'
            },
            seed: {
                label: 'Seed',
                value: '123456789'
            }
        }
    },
    {
        id: 'product-1',
        properties: {
            URL: `${basePath}/images/product-1.jpg`,
            naturalWidth: 800,
            naturalHeight: 800,
            byteLength: 1024 * 512,
            contentType: 'image/jpeg',
            lastModified: '2024-03-12T14:20:00Z'
        },
        metadata: {
            camera: {
                label: 'Camera',
                value: 'Fujifilm X-T4'
            },
            exposure: {
                label: 'Exposure',
                value: '1/200s'
            },
            aperture: {
                label: 'Aperture',
                value: 'f/8.0'
            },
            iso: {
                label: 'ISO',
                value: '200'
            },
            product: {
                label: 'Product',
                value: 'Vintage Watch'
            }
        }
    }
];