import { ASSETS } from './assetMap';

export const PRODUCTS = [
  {
    id: 'terra-wave-stripe-bucket',
    name: 'Terra Wave Stripe Bucket',
    slug: 'terra-wave-stripe-bucket',
    price: 160,
    material: 'Organic Cotton & Merino Wool',
    category: 'Bucket Hats',
    shade: 'Terracotta, Gold & Lacca Red',
    inStock: true,
    isNew: true,
    badge: 'Signature',
    description: 'An iconic silhouette hand-crocheted in undulating rhythmic bands. Sculpted from GOTS-certified organic combed cotton and soft virgin merino wool in warm terracotta, sunshine yellow, and signature ALLI Lacca red.',
    artisanStory: 'Crafted stitch-by-stitch by Alice Marchi in our Milan studio over seven hours. The wavy scalloped brim is calibrated to hold its shape naturally while offering effortless face-framing shade.',
    composition: '70% Organic Combed Cotton, 30% Virgin Merino Wool',
    origin: 'Handmade in Milan',
    care: 'Hand wash gently in cool water with delicate wool wash. Dry flat in the shade.',
    measurements: 'Crown circumference: 56–58cm (flexible crochet give). Brim depth: 7.5cm.',
    images: {
      primary: ASSETS.productWavyBucket,
      hover: ASSETS.lookbookBeach,
      editorial: ASSETS.heroEditorial
    }
  },
  {
    id: 'milano-sage-kerchief',
    name: 'Milano Sage Kerchief',
    slug: 'milano-sage-kerchief',
    price: 110,
    material: 'Organic Cotton',
    category: 'Headwear',
    shade: 'Olive Sage & Raw Ecru',
    inStock: true,
    isNew: true,
    badge: 'Bestseller',
    description: 'A classic triangular headscarf hand-crocheted in breathable honeycomb stitches with delicate contrasting ivory border and ties. Versatile and lightweight for high summer and golden autumn afternoons.',
    artisanStory: 'Can be styled knotted under the chin in retro Italian Riviera style, tied loosely at the nape of the neck, or draped around the collar as an artisanal neck foulard.',
    composition: '100% Organic Combed Cotton',
    origin: 'Handmade in Milan',
    care: 'Hand wash gently. Light steam with cloth to smooth the picot border.',
    measurements: 'Width: 54cm, Length to point: 28cm. Tie length: 34cm each side.',
    images: {
      primary: ASSETS.productKerchiefGreen,
      hover: ASSETS.productBucketOlive,
      editorial: ASSETS.lookbookBeach
    }
  },
  {
    id: 'bondi-perforated-cap',
    name: 'Bondi Honeycomb Sailing Cap',
    slug: 'bondi-perforated-sailing-cap',
    price: 125,
    material: 'Organic Cotton',
    category: 'Beanies',
    shade: 'Salmon Rose & Peach',
    inStock: true,
    isNew: true,
    badge: 'New In',
    description: 'Designed for maritime sunshine and coastal breezes. An open-lattice crochet mesh skullcap that breathes freely while hugging the crown with gentle, weightless comfort.',
    artisanStory: 'Perfected aboard sailboats between Sydney and the Italian coast. Lightweight, easily folded into your beach tote, and instantly springs back to contour.',
    composition: '100% Mercerized Organic Cotton',
    origin: 'Handmade in Sydney',
    care: 'Rinse in cold water after salty days. Dry flat.',
    measurements: 'One size fits all (supple crochet elasticity). Crown depth: 18cm.',
    images: {
      primary: ASSETS.productCapSalmon,
      hover: ASSETS.heroEditorial,
      editorial: ASSETS.lookbookBeach
    }
  },
  {
    id: 'alps-folded-cloche',
    name: 'Alps Sculptural Cloche',
    slug: 'alps-sculptural-cloche',
    price: 155,
    material: 'Virgin Merino Wool',
    category: 'Bucket Hats',
    shade: 'Earth, Rust & Olive',
    inStock: true,
    isNew: false,
    badge: 'Limited Run',
    description: 'A tactile dialogue between architectural form and soft drape. Crocheted with dense textured ridges that can be folded, rolled, or shaped according to your mood.',
    artisanStory: 'Each striped row is tensioned by hand without rigid symmetry. Made in ultra-limited small runs using zero-waste yarn management.',
    composition: '100% Non-Mulesed Italian Virgin Wool',
    origin: 'Handmade in Milan',
    care: 'Dry clean or cold hand wash. Reshape and lay flat to dry.',
    measurements: 'Crown circumference: 56.5–58.5cm.',
    images: {
      primary: ASSETS.productFoldedCloche,
      hover: ASSETS.productWavyBucket,
      editorial: ASSETS.mosaic1
    }
  },
  {
    id: 'riviera-striped-bucket',
    name: 'Riviera Olive Ribbed Bucket',
    slug: 'riviera-olive-ribbed-bucket',
    price: 145,
    material: 'Cotton & Wool',
    category: 'Bucket Hats',
    shade: 'Moss, Umber & Chalk',
    inStock: true,
    isNew: false,
    badge: 'Atelier Favorite',
    description: 'An understated bucket hat featuring fine horizontal striping in earthy moss green, umber, and chalk ecru. Sits comfortably with tailored coats and linen shirts alike.',
    artisanStory: 'Inspired by the contrast between Milanese tailoring and Mediterranean nature. Each piece requires over 6 hours of continuous single-needle work.',
    composition: '60% Organic Cotton, 40% Virgin Wool',
    origin: 'Handmade in Milan & Sydney',
    care: 'Cold hand wash with mild wool soap. Air dry flat.',
    measurements: 'Crown circumference: 57cm. Brim: 7cm.',
    images: {
      primary: ASSETS.productBucketOlive,
      hover: ASSETS.productKerchiefGreen,
      editorial: ASSETS.lookbookBeach
    }
  },
  {
    id: 'soleil-crochet-tote',
    name: 'Soleil Artisanal Crochet Tote',
    slug: 'soleil-artisanal-crochet-tote',
    price: 135,
    material: 'Organic Cotton',
    category: 'Accessories',
    shade: 'Warm Sunset Multi',
    inStock: false,
    isNew: true,
    badge: 'Made to Order',
    description: 'A relaxed market tote bag with rhythmic striped crochet weave and reinforced handles. Made to accompany you from city flower markets to sun-drenched coves.',
    artisanStory: 'Single-artisan creation made to order. Ships within 10–14 days of order placement.',
    composition: '100% GOTS Organic Cotton',
    origin: 'Handmade in Sydney',
    care: 'Spot clean or gentle hand wash.',
    measurements: 'Body: 36cm x 40cm. Strap drop: 28cm.',
    images: {
      primary: ASSETS.lookbookTote,
      hover: ASSETS.productWavyBucket,
      editorial: ASSETS.mosaic2
    }
  }
];

export const LOOKBOOK_IMAGES = [
  {
    id: 'lb-1',
    src: ASSETS.heroEditorial,
    title: 'The Open Sea',
    caption: 'Milan Design / Pacific Horizon — Natural Combed Cotton'
  },
  {
    id: 'lb-2',
    src: ASSETS.lookbookBeach,
    title: 'Sunlit Rhythm',
    caption: 'Slow rows of hand-knotted artisanal stitches'
  },
  {
    id: 'lb-3',
    src: ASSETS.productKerchiefGreen,
    title: 'Sage Kerchief in Motion',
    caption: 'Airy picot border framing the face'
  },
  {
    id: 'lb-4',
    src: ASSETS.productCapSalmon,
    title: 'Sailing Honeycomb',
    caption: 'The ALLI palette against warm saltwater breeze'
  }
];

// Milne Watson 7-column Mosaic Archive for Bespoke Page
export const BESPOKE_MOSAIC_ROWS = [
  {
    id: 'row-1',
    cells: [
      { type: 'image', span: 2, image: ASSETS.productWavyBucket, title: 'Wavy Brim Bucket in Lacca & Ochre' },
      { type: 'spacer', span: 1 },
      { type: 'image', span: 2, image: ASSETS.lookbookBeach, title: 'Beach Sun Cloche' },
      { type: 'image', span: 2, image: ASSETS.mosaic1, title: 'Tapestry Weave Detail' },
    ]
  },
  {
    id: 'row-2',
    cells: [
      { type: 'spacer', span: 1 },
      { type: 'image', span: 2, image: ASSETS.productFoldedCloche, title: 'Folded Cloche Sculpture' },
      { type: 'image', span: 2, image: ASSETS.productBucketOlive, title: 'Olive Striped Brim' },
      { type: 'spacer', span: 2 },
    ]
  },
  {
    id: 'row-3',
    cells: [
      { type: 'image', span: 2, image: ASSETS.productKerchiefGreen, title: 'Sage Kerchief in Park Light' },
      { type: 'image', span: 2, image: ASSETS.mosaic2, title: 'Artisanal Yarn Texture' },
      { type: 'spacer', span: 1 },
      { type: 'image', span: 2, image: ASSETS.productCapSalmon, title: 'Salmon Honeycomb Cap' },
    ]
  }
];
