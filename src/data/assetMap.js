// Clean mapping of local ALLI brand assets with dynamic base path support
const BASE = import.meta.env.BASE_URL || '/';

export const ASSETS = {
  logo: `${BASE}images/alli/alli-logo.png`,
  storyVideo: `${BASE}images/alli/story-video.mp4`,
  heroEditorial: `${BASE}images/alli/hero-editorial.jpeg`,
  
  // Real products
  productWavyBucket: `${BASE}images/alli/product-wavy-bucket.jpeg`,
  productFoldedCloche: `${BASE}images/alli/product-folded-cloche.jpeg`,
  productKerchiefGreen: `${BASE}images/alli/product-kerchief-green.jpeg`,
  productBucketOlive: `${BASE}images/alli/product-bucket-olive.jpeg`,
  productCapSalmon: `${BASE}images/alli/product-cap-salmon.jpeg`,
  
  // Editorial & Lookbook
  lookbookBeach: `${BASE}images/alli/lookbook-beach.jpeg`,
  lookbookTote: `${BASE}images/alli/lookbook-tote.jpeg`,
  
  // Bespoke mosaic cells
  mosaic1: `${BASE}images/alli/product-mosaic-1.jpeg`,
  mosaic2: `${BASE}images/alli/product-mosaic-2.jpeg`,
  mosaic3: `${BASE}images/alli/product-mosaic-3.jpeg`,
  mosaic4: `${BASE}images/alli/product-mosaic-4.jpeg`,
  mosaic5: `${BASE}images/alli/product-mosaic-5.jpeg`,
  mosaic6: `${BASE}images/alli/product-mosaic-6.jpeg`,
  mosaic7: `${BASE}images/alli/product-mosaic-7.jpeg`,
};
