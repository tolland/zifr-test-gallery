// src/svelte/types/metadata.ts
export interface ImageProperties {
    URL: string;
    naturalWidth?: number;
    naturalHeight?: number;
    byteLength: number;
    contentType?: string;
    lastModified?: string;
    crossOrigin?: string;
    referrerPolicy?: string;
    tabId?: number;
    tabUrl?: string;
    pageShownURL?: string;
    pageShownType?: string;
}

export interface DataItem {
    label: string;
    value: string | number | null;
}

export interface TestImage {
    id: string;
    properties: ImageProperties;
    metadata: Record<string, DataItem>;
    errors?: string[];
    warnings?: string[];
    infos?: string[];
}