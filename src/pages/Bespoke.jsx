import React from 'react';
import { useShop } from '../context/ShopContext';
import { BESPOKE_MOSAIC_ROWS } from '../data/products';

export default function Bespoke() {
  const { navigateTo } = useShop();

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* Top Header & Intro */}
      <div className="pt-12 sm:pt-16 pb-12 px-6 lg:px-12 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-normal mb-8 uppercase tracking-[0.06em]">
          Bespoke
        </h1>

        {/* Spinning Circular Text (Milne Watson: 208x208px, spin-slow 30s) */}
        <div className="mb-12 flex justify-center">
          <div className="w-48 h-48 sm:w-52 sm:h-52 spin-slow">
            <svg viewBox="0 0 200 200" aria-hidden="true" className="w-full h-full fill-current text-black">
              <defs>
                <path
                  id="bespokeCircle"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text style={{ fontSize: '13.5px', letterSpacing: '2.8px', textTransform: 'uppercase' }}>
                <textPath href="#bespokeCircle">
                  • ALLI BESPOKE CROCHET • ONE OF A KIND • MILANO &amp; SYDNEY 
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Intro Editorial Copy */}
        <div className="max-w-lg space-y-4 text-[16px] leading-relaxed text-[#121212] font-normal mb-8">
          <p>
            Every ALLI bespoke piece is sculpted entirely by hand, needle by needle, in dialogue with the wearer.
          </p>
          <p className="text-[#757575] text-[15px]">
            Whether you desire a tailored crown circumference, a customized stripe sequence inspired by personal memories, or personalized mother-of-pearl letters woven directly into the stitchwork.
          </p>
          <p className="text-[14px] text-[#963838] font-medium pt-2">
            Bespoke commissions begin at €160.
          </p>
        </div>

        {/* CTA button: 192x56px with Lacca brick red border */}
        <button
          onClick={() => navigateTo('contact')}
          className="btn-outline cursor-pointer"
        >
          Commission a Piece
        </button>
      </div>

      {/* 7-COLUMN MOSAIC ARCHIVE (Milne Watson exact pattern: grid-cols-7, gap-0, 4:5 image cells) */}
      <section className="w-full mt-8 md:mt-16 px-4 md:px-8 max-w-[1560px] mx-auto pb-24">
        <div className="mb-6 flex items-center justify-between border-b border-[#e8e6e1] pb-3">
          <span className="text-[12px] uppercase tracking-[0.16em] text-[#757575]">
            Atelier Archive • One of a Kind Works
          </span>
          <span className="text-[12px] text-[#963838] uppercase tracking-wider">
            Milan | Sydney
          </span>
        </div>

        {/* Desktop 7-Column Mosaic */}
        <div className="hidden md:flex flex-col gap-0 border border-[#e8e6e1]">
          {BESPOKE_MOSAIC_ROWS.map((row) => (
            <div key={row.id} className="grid grid-cols-7 auto-rows-fr gap-0 border-b border-[#e8e6e1] last:border-b-0">
              {row.cells.map((cell, idx) => {
                const colSpanClass =
                  cell.span === 1
                    ? 'col-span-1'
                    : cell.span === 2
                    ? 'col-span-2'
                    : 'col-span-3';

                if (cell.type === 'spacer') {
                  return (
                    <div
                      key={idx}
                      className={`${colSpanClass} bg-[#f7f5f2] border-r border-[#e8e6e1] last:border-r-0 min-h-[140px] flex items-center justify-center p-4`}
                    >
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#757575]/40 select-none">
                        ALLI • CROCHET
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={idx}
                    className={`${colSpanClass} group relative aspect-image bg-white overflow-hidden border-r border-[#e8e6e1] last:border-r-0`}
                  >
                    <img
                      src={cell.image}
                      alt={cell.title || 'ALLI Bespoke Archive Piece'}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {/* Hover caption overlay */}
                    <div className="tile-overlay">
                      <div className="relative z-10 px-4 text-center">
                        <p className="text-[14px] text-black font-normal leading-tight">
                          {cell.title}
                        </p>
                        <span className="text-[11px] uppercase tracking-[0.14em] text-[#963838] mt-2 block">
                          Bespoke Commission
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile 2-Column Responsive Mosaic */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {BESPOKE_MOSAIC_ROWS.flatMap((r) => r.cells)
            .filter((c) => c.type === 'image')
            .map((cell, idx) => (
              <div
                key={idx}
                className="group relative aspect-image bg-[#f7f5f2] overflow-hidden border border-[#e8e6e1]"
              >
                <img
                  src={cell.image}
                  alt={cell.title || 'ALLI Bespoke piece'}
                  className="w-full h-full object-cover"
                />
                <div className="tile-overlay">
                  <p className="text-[12px] text-black px-2 text-center">
                    {cell.title}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-16 text-center">
          <p className="text-[14px] text-[#757575] mb-4">
            Have a custom idea in mind?
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="link underline-style text-[15px] uppercase tracking-[0.12em] text-[#963838] font-medium cursor-pointer"
          >
            Start your Bespoke Request →
          </button>
        </div>
      </section>
    </div>
  );
}
