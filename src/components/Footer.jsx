import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ASSETS } from '../data/assetMap';

export default function Footer() {
  const { navigateTo } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white text-black border-t border-[#e8e6e1] pt-16 pb-12">
      <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
        {/* Milne Watson 4-Column Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 items-start">
          {/* Column 1: Nav Links */}
          <div className="text-center lg:text-left space-y-3 text-[16px] leading-[26px]">
            <div>
              <button
                onClick={() => navigateTo('shop')}
                className="link underline-style cursor-pointer text-black hover:opacity-80"
              >
                Shop All
              </button>
            </div>
            <div>
              <button
                onClick={() => navigateTo('bespoke')}
                className="link underline-style cursor-pointer text-black hover:opacity-80"
              >
                Bespoke Orders
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => {
                    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="link underline-style cursor-pointer text-black hover:opacity-80"
              >
                About &amp; Story
              </button>
            </div>
            <div>
              <button
                onClick={() => navigateTo('contact')}
                className="link underline-style cursor-pointer text-black hover:opacity-80"
              >
                Contact &amp; Commissions
              </button>
            </div>
            <div>
              <a
                href="https://www.instagram.com/allimrch/"
                target="_blank"
                rel="noreferrer"
                className="link underline-style text-black hover:opacity-80"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Columns 2 & 3 (lg:col-span-2): Centered Newsletter */}
          <div className="lg:col-span-2 flex flex-col items-center text-center space-y-4 px-4">
            <h2 className="text-[16px] font-normal leading-normal text-black">
              Hear all of the latest news and drops from ALLI Studio
            </h2>
            <p className="text-[14px] text-[#757575] max-w-md">
              Invitations to limited seasonal drops and private studio notes from Milan and Sydney.
            </p>

            {subscribed ? (
              <p className="text-[14px] text-[#963838] tracking-wider uppercase pt-2">
                ✓ Grazie. You are now welcomed to the atelier list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full flex flex-col items-center space-y-4 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="input-newsletter"
                />
                <button
                  type="submit"
                  className="link underline-style text-[15px] uppercase tracking-[0.14em] text-black hover:text-[#963838] cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>

          {/* Column 4: Brand Monogram / Logo Mark (bottom right) */}
          <div className="flex flex-col items-center lg:items-end justify-end space-y-3">
            <button
              onClick={() => navigateTo('home')}
              className="cursor-pointer focus:outline-none"
              aria-label="ALLI Home"
            >
              <img
                src={ASSETS.logo}
                alt="ALLI Wordmark"
                className="h-[30px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </button>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#757575] text-center lg:text-right font-light">
              Handcrafted in Milan &amp; Sydney
            </p>
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="border-t border-[#e8e6e1] pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#757575] space-y-2 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} ALLI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-[11px] uppercase tracking-wider">
            <span className="hover:underline cursor-pointer">Care Guide</span>
            <span className="hover:underline cursor-pointer">Shipping &amp; Returns</span>
            <span className="hover:underline cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
