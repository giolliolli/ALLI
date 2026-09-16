import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ASSETS } from '../data/assetMap';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { currentPage, navigateTo, cartCount, setIsCartOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Shop', page: 'shop' },
    { label: 'Bespoke', page: 'bespoke' },
    { label: 'Story', page: 'home', hash: '#story' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.hash && currentPage === 'home') {
      const el = document.querySelector(item.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigateTo(item.page);
    if (item.hash) {
      setTimeout(() => {
        const el = document.querySelector(item.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Milne Watson Header: fixed top-0, 122px desktop, 69px mobile, pure white background */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white transition-all duration-200">
        <div className="relative flex items-center justify-between h-[69px] lg:h-[122px] px-6 lg:px-12 max-w-[1560px] mx-auto">
          {/* Left Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-x-8 text-[16px] text-black">
            {navItems.map((item) => {
              const isActive = currentPage === item.page && !item.hash;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`link block w-max leading-relaxed font-normal transition-opacity cursor-pointer ${
                    isActive ? 'underline-style text-black' : 'text-black hover:opacity-80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 -ml-1 text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>

          {/* Center Brand Logo (Official ALLI_Lacca.png) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <button
              onClick={() => navigateTo('home')}
              className="block cursor-pointer focus:outline-none group"
              aria-label="ALLI Home"
            >
              <img
                src={ASSETS.logo}
                alt="ALLI Handcrafted Crochet Logo"
                className="h-[28px] sm:h-[34px] lg:h-[40px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </button>
          </div>

          {/* Right Cart Trigger — Milne Watson "Cart: 0" in muted gray #9CA3AF, hover #6B7280 */}
          <div className="flex items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-[15px] lg:text-[16px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors cursor-pointer focus:outline-none"
              aria-label="Shopping Cart"
            >
              Cart: {cartCount}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e8e6e1] px-6 py-6 animate-fade-in shadow-xs">
            <nav className="flex flex-col space-y-4 text-[16px]">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-left py-2 border-b border-[#e8e6e1]/60 text-black flex justify-between items-center ${
                    currentPage === item.page && !item.hash ? 'underline-style font-medium' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[#963838] text-xs">→</span>
                </button>
              ))}
              <div className="pt-4 flex flex-col space-y-1 text-sm text-[#757575]">
                <p>One of a kind hand crochet</p>
                <a
                  href="https://www.instagram.com/allimrch/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#963838] underline text-xs uppercase tracking-wider"
                >
                  Instagram @allimrch
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacing compensation for fixed header (69px mobile, 122px desktop) */}
      <div className="h-[69px] lg:h-[122px] w-full" aria-hidden="true" />
    </>
  );
}
