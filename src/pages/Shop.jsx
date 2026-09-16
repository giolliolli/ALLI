import React from 'react';
import { useShop } from '../context/ShopContext';

export default function Shop() {
  const { products, openProduct, navigateTo } = useShop();

  return (
    <div className="w-full bg-white text-black min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header — Milne Watson text-2xl clean title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl font-normal mb-3 tracking-wide">
            Shop All
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#757575] max-w-lg mx-auto leading-relaxed">
            Slow fashion conceived by Alice Marchi. Single-artisan crochet handcrafted from pure organic cotton and Italian virgin merino wool.
          </p>
        </div>

        {/* Milne Watson 2-Column Grid tightening toward center:
            grid-cols-2 max-w-6xl mx-auto gap-4 sm:gap-8
            Odd columns justify-self-end, Even columns justify-self-start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-start">
          {/* Tile 1: Product 1 */}
          {products[0] && (
            <div
              className="w-full max-w-md sm:justify-self-end group relative block aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              onClick={() => openProduct(products[0].id)}
            >
              <img
                src={products[0].images.primary}
                alt={products[0].name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="tile-overlay">
                <div className="relative z-10 px-4 text-center space-y-3">
                  <h2 className="text-[16px] font-normal leading-snug text-black">
                    {products[0].name}
                  </h2>
                  <p className="text-[15px] text-[#963838] font-medium">
                    €{products[0].price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tile 2: Product 2 */}
          {products[1] && (
            <div
              className="w-full max-w-md sm:justify-self-start group relative block aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              onClick={() => openProduct(products[1].id)}
            >
              <img
                src={products[1].images.primary}
                alt={products[1].name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="tile-overlay">
                <div className="relative z-10 px-4 text-center space-y-3">
                  <h2 className="text-[16px] font-normal leading-snug text-black">
                    {products[1].name}
                  </h2>
                  <p className="text-[15px] text-[#963838] font-medium">
                    €{products[1].price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Interspersed Editorial Text Tile (Milne Watson pattern: 4:5 text tile centered in grid) */}
          <div className="hidden sm:flex w-full max-w-md sm:justify-self-end aspect-image bg-[#ede7df] p-8 flex-col justify-end text-center items-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#963838] font-medium mb-3">
              Artisan Technique
            </span>
            <h3 className="text-xl font-normal leading-snug text-black mb-3">
              One Stitch at a Time
            </h3>
            <p className="text-[13px] text-[#121212] leading-relaxed mb-6 font-normal">
              No industrial machines. Every piece takes up to 10 hours of continuous hand-tensioned work, shaping itself naturally to the wearer.
            </p>
            <button
              onClick={() => navigateTo('bespoke')}
              className="link underline-style text-[12px] uppercase tracking-[0.14em] text-[#963838]"
            >
              Learn about Bespoke →
            </button>
          </div>

          {/* Tile 3: Product 3 */}
          {products[2] && (
            <div
              className="w-full max-w-md sm:justify-self-start group relative block aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              onClick={() => openProduct(products[2].id)}
            >
              <img
                src={products[2].images.primary}
                alt={products[2].name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="tile-overlay">
                <div className="relative z-10 px-4 text-center space-y-3">
                  <h2 className="text-[16px] font-normal leading-snug text-black">
                    {products[2].name}
                  </h2>
                  <p className="text-[15px] text-[#963838] font-medium">
                    €{products[2].price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tile 4: Product 4 */}
          {products[3] && (
            <div
              className="w-full max-w-md sm:justify-self-end group relative block aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              onClick={() => openProduct(products[3].id)}
            >
              <img
                src={products[3].images.primary}
                alt={products[3].name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="tile-overlay">
                <div className="relative z-10 px-4 text-center space-y-3">
                  <h2 className="text-[16px] font-normal leading-snug text-black">
                    {products[3].name}
                  </h2>
                  <p className="text-[15px] text-[#963838] font-medium">
                    €{products[3].price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tile 5: Product 5 */}
          {products[4] && (
            <div
              className="w-full max-w-md sm:justify-self-start group relative block aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              onClick={() => openProduct(products[4].id)}
            >
              <img
                src={products[4].images.primary}
                alt={products[4].name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="tile-overlay">
                <div className="relative z-10 px-4 text-center space-y-3">
                  <h2 className="text-[16px] font-normal leading-snug text-black">
                    {products[4].name}
                  </h2>
                  <p className="text-[15px] text-[#963838] font-medium">
                    €{products[4].price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tile 6: Product 6 */}
          {products[5] && (
            <div
              className="w-full max-w-md sm:justify-self-end group relative block aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
              onClick={() => openProduct(products[5].id)}
            >
              <img
                src={products[5].images.primary}
                alt={products[5].name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="tile-overlay">
                <div className="relative z-10 px-4 text-center space-y-3">
                  <h2 className="text-[16px] font-normal leading-snug text-black">
                    {products[5].name}
                  </h2>
                  <p className="text-[15px] text-[#963838] font-medium">
                    €{products[5].price}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Interspersed Text Tile 2 */}
          <div className="hidden sm:flex w-full max-w-md sm:justify-self-start aspect-image bg-[#f7f5f2] p-8 flex-col justify-end text-center items-center border border-[#e8e6e1]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#963838] font-medium mb-3">
              Bespoke Colors
            </span>
            <h3 className="text-xl font-normal leading-snug text-black mb-3">
              Commission Your Shade
            </h3>
            <p className="text-[13px] text-[#757575] leading-relaxed mb-6 font-normal">
              Have a favorite palette or letter monogram in mind? We customize shades and brim dimensions.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="link underline-style text-[12px] uppercase tracking-[0.14em] text-[#963838]"
            >
              Inquire with Alice →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
