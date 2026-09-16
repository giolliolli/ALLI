import React, { useRef, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ASSETS } from '../data/assetMap';
import { Play, Pause, Volume2, VolumeX, ArrowRight } from 'lucide-react';

export default function Home() {
  const { products, navigateTo, openProduct, addToCart } = useShop();
  
  // Video player state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const newInProducts = products.slice(0, 5);

  return (
    <div className="w-full bg-white text-black">
      {/* 1. HERO SECTION (Milne Watson: 16:9 desktop, 3:4 mobile, full-bleed, white chip at bottom left) */}
      <section className="relative w-full aspect-[3/4] md:aspect-video overflow-hidden bg-[#f7f5f2]">
        <img
          src={ASSETS.heroEditorial}
          alt="ALLI Handcrafted Crochet Editorial"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle tonal gradient for depth */}
        <div className="absolute inset-0 bg-black/10" />

        {/* White chip label CTA positioned at bottom-left */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
          <button
            onClick={() => navigateTo('shop')}
            className="chip hover:bg-[#963838] hover:text-white hover:border-[#963838] transition-colors cursor-pointer shadow-xs"
          >
            Shop the Collection
          </button>
        </div>
      </section>

      {/* 2. POETIC STATEMENT BAND (Milne Watson signature colored band adapted to ALLI palette) */}
      <section className="w-full bg-[#ede7df] text-black flex justify-center py-14 lg:py-24 px-6">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <p className="text-[17px] sm:text-[19px] leading-[1.8] font-normal tracking-[0.02em] mb-4">
            “Row after single row, stitch after patient stitch.<br />
            Conceived between the tailored restraint of Milan and the endless sea-light of Sydney.<br />
            Slow, tactile wearable art that shapes itself to your crown.”
          </p>
          <p className="text-[13px] tracking-[0.16em] uppercase text-[#757575] mb-6">
            Alice Marchi • Single Artisan Provenance
          </p>
          <p className="text-[16px] italic mb-2">Love,</p>
          {/* Authentic signature branding */}
          <div className="h-9 flex items-center justify-center">
            <span className="alli-logo text-[28px] font-extrabold tracking-[-0.04em] text-[#963838]">
              ALLI
            </span>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT RAIL — NEW IN (Milne Watson 4:5 aspect ratio, 50% white veil on hover) */}
      <section className="w-full py-14 lg:py-20 px-6 lg:px-12 border-b border-[#e8e6e1]">
        <div className="max-w-[1560px] mx-auto">
          {/* Chip Section Header */}
          <div className="mb-8 flex justify-between items-center">
            <h2 className="chip uppercase text-[13px] tracking-wide font-medium">
              New In
            </h2>
            <button
              onClick={() => navigateTo('shop')}
              className="text-[13px] uppercase tracking-[0.12em] text-[#757575] hover:text-[#963838] transition-colors link underline-style cursor-pointer"
            >
              Shop All
            </button>
          </div>

          {/* Rail Grid: 5 columns on desktop, 3 on md, 2 on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
            {newInProducts.map((product) => (
              <div
                key={product.id}
                className="group relative block w-full aspect-image bg-[#f7f5f2] overflow-hidden cursor-pointer"
                onClick={() => openProduct(product.id)}
              >
                <img
                  src={product.images.primary}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Badge if available */}
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-medium text-black border border-[#e8e6e1]">
                    {product.badge}
                  </span>
                )}

                {/* Milne Watson Tile Overlay: 50% white veil with centered Title and Price on hover */}
                <div className="tile-overlay">
                  <div className="relative z-10 px-4 text-center space-y-2.5">
                    <h3 className="text-[15px] sm:text-[16px] font-normal leading-snug text-black">
                      {product.name}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] font-medium text-[#963838]">
                      €{product.price}
                    </p>
                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-[0.14em] underline text-black">
                        View Piece
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STORY SECTION — Featuring WhatsApp Video 2026-09-15 at 02.08.24 */}
      <section id="story" className="w-full py-16 lg:py-28 px-6 lg:px-12 bg-[#ffffff] border-b border-[#e8e6e1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left 50%: Story Video */}
            <div className="w-full md:w-1/2 flex-shrink-0 relative group">
              <div className="relative aspect-[4/5] bg-[#121212] overflow-hidden">
                <video
                  ref={videoRef}
                  src={ASSETS.storyVideo}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video controls overlay */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-xs p-1.5 z-20">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 text-black hover:text-[#963838] transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 text-black hover:text-[#963838] transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>

                {/* Subtle top badge */}
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-medium text-black">
                  Atelier Motion • 2026
                </div>
              </div>
            </div>

            {/* Right 50%: Narrative in Milne Watson editorial style */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <span className="text-[12px] uppercase tracking-[0.2em] text-[#963838] font-medium block">
                  The Story
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.2] text-black">
                  Slow fashion conceived from a single thread.
                </h2>
              </div>

              <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#121212] font-normal max-w-lg">
                <p>
                  Founded by <strong>Alice Marchi</strong>, ALLI is an artisanal journey centered on the quiet dignity of handmade crochet.
                </p>
                <p>
                  Every piece is sculpted by hand without industrial machines or pre-formed molds. We work exclusively with certified organic Egyptian cotton and unblended virgin merino wool, creating tactile wearables designed to last across countless summers and brisk winters.
                </p>
                <p className="text-[#757575] text-[14px]">
                  Born in the creative heart of Milan and perfected under the brilliant coastal skies of Sydney.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigateTo('shop')}
                  className="btn-outline cursor-pointer"
                >
                  Shop The Pieces
                </button>
                <button
                  onClick={() => navigateTo('bespoke')}
                  className="text-[13px] uppercase tracking-[0.12em] text-black hover:text-[#963838] underline-style cursor-pointer"
                >
                  Discover Bespoke
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BESPOKE SECTION TEASER with Rotating Circular Text SVG (Milne Watson) */}
      <section className="w-full py-20 lg:py-28 px-6 bg-[#f7f5f2] text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Spinning slow circular text SVG (30s linear infinite) */}
          <div className="mb-10 flex justify-center">
            <div className="w-48 h-48 sm:w-52 sm:h-52 spin-slow">
              <svg viewBox="0 0 200 200" aria-hidden="true" className="w-full h-full fill-current text-black">
                <defs>
                  <path
                    id="circle"
                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                  />
                </defs>
                <text style={{ fontSize: '13.5px', letterSpacing: '2.8px', textTransform: 'uppercase' }}>
                  <textPath href="#circle">
                    • ALLI BESPOKE CROCHET • ONE OF A KIND • MILANO &amp; SYDNEY 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-light mb-4 text-black">
            Bespoke Commissions &amp; Custom Sizing
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#757575] leading-relaxed max-w-lg mb-8">
            Collaborate directly with Alice to create a unique piece with personalized crown measurements, custom color palettes, or personalized initials.
          </p>

          <button
            onClick={() => navigateTo('bespoke')}
            className="btn-outline cursor-pointer"
          >
            Explore Bespoke
          </button>
        </div>
      </section>
    </div>
  );
}
