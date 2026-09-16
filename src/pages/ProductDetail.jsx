import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { selectedProductId, products, navigateTo, openProduct, addToCart } = useShop();

  // Find active product, fallback to first if not set
  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [activeImageKey, setActiveImageKey] = useState('primary');
  const [addedNotice, setAddedNotice] = useState(false);

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product.id, 1, product.shade);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="w-full bg-white text-black min-h-screen py-8 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigateTo('shop')}
            className="text-[14px] text-[#757575] hover:text-black transition-colors link underline-style cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft size={15} />
            <span>Back to Shop</span>
          </button>
        </div>

        {/* Milne Watson 2-Column Product Layout: grid md:grid-cols-2 gap-16 md:mt-12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: 4:5 Gallery */}
          <div className="space-y-4">
            <div className="w-full aspect-image bg-[#f7f5f2] overflow-hidden">
              <img
                src={product.images[activeImageKey] || product.images.primary}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-3">
              {['primary', 'hover', 'editorial'].map((key) => {
                if (!product.images[key]) return null;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveImageKey(key)}
                    className={`w-16 h-20 aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer border transition-all ${
                      activeImageKey === key
                        ? 'border-[#963838]'
                        : 'border-[#e8e6e1] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={product.images[key]}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Milne Watson text hierarchy */}
          <div className="flex flex-col justify-start text-center md:text-left">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#963838] font-medium block mb-2">
              Single Artisan Piece • {product.origin}
            </span>

            {/* Product Title: text-2xl */}
            <h1 className="text-2xl sm:text-3xl font-normal leading-tight text-black mb-4">
              {product.name}
            </h1>

            {/* Description and materials */}
            <div className="space-y-4 text-[15px] leading-relaxed text-[#121212] font-normal max-w-md">
              <p>{product.description}</p>
              
              <p className="text-[14px] text-[#757575]">
                <strong>Composition:</strong> {product.composition}
              </p>

              <p className="text-[14px] text-[#757575]">
                <strong>Measurements:</strong> {product.measurements}
              </p>

              <p className="text-[14px] text-[#757575] italic">
                {product.artisanStory}
              </p>

              <div className="pt-2 text-[13px] text-[#757575]/80">
                <strong>Care:</strong> {product.care}
              </div>
            </div>

            {/* Price: text-lg, mt-[2em] mb-[1em] */}
            <div className="mt-8 mb-6 text-xl text-[#963838] font-medium">
              €{product.price}
            </div>

            {/* Add To Cart: 192x56px btn-outline with Lacca red border */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={handleAddToCart}
                className="btn-outline cursor-pointer"
              >
                {addedNotice ? 'Added to Bag ✓' : 'Add To Cart'}
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="text-[13px] uppercase tracking-[0.12em] text-[#757575] hover:text-[#963838] link underline-style cursor-pointer"
              >
                Request Custom Color
              </button>
            </div>
          </div>
        </div>

        {/* Related rail: 4 tiles 4:5 */}
        <div className="border-t border-[#e8e6e1] pt-16">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="chip uppercase text-[13px] tracking-wide font-medium">
              More Pieces
            </h2>
            <button
              onClick={() => navigateTo('shop')}
              className="link underline-style text-[13px] uppercase tracking-wider text-[#757575]"
            >
              Shop All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => openProduct(rel.id)}
                className="group relative block w-full aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              >
                <img
                  src={rel.images.primary}
                  alt={rel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="tile-overlay">
                  <div className="relative z-10 px-4 text-center space-y-2">
                    <h3 className="text-[15px] font-normal leading-snug text-black">
                      {rel.name}
                    </h3>
                    <p className="text-[14px] font-medium text-[#963838]">
                      €{rel.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
