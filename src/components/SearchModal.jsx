import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, X, ArrowRight } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, products, openProduct } = useShop();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shade.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query, products]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen flex items-start justify-center pt-24 px-4 sm:px-6">
        <div className="relative bg-white w-full max-w-2xl border border-[#e8e6e1] shadow-2xl p-6 sm:p-8 animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#e8e6e1] pb-4 mb-6">
            <div className="flex items-center space-x-3 flex-1 mr-4">
              <Search size={20} className="text-[#963838]" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search hats, cotton, wool, scallop bucket..."
                className="w-full text-[16px] tracking-wide focus:outline-none placeholder:text-[#757575]/60 bg-transparent text-[#121212]"
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 text-[#757575] hover:text-[#963838] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick tags */}
          {!query && (
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#757575] mb-3">
                Suggested searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Scallop Bucket', 'Organic Cotton', 'Virgin Wool', 'Beanies', 'Brick Red'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-[12px] bg-[#f7f5f2] hover:bg-[#ede7df] text-[#121212] px-3 py-1.5 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Results */}
          {query && (
            <div className="space-y-4 max-h-[380px] overflow-y-auto">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[#757575]">
                {filtered.length} {filtered.length === 1 ? 'Piece found' : 'Pieces found'}
              </div>

              {filtered.length === 0 ? (
                <div className="py-8 text-center text-[13px] text-[#757575]">
                  No handcrafted pieces match &ldquo;{query}&rdquo;.
                </div>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      openProduct(item.id);
                    }}
                    className="flex items-center justify-between p-2 hover:bg-[#f7f5f2] cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.images.primary}
                        alt={item.name}
                        className="w-12 h-14 object-cover bg-[#ede7df]"
                      />
                      <div>
                        <h4 className="text-[13px] uppercase tracking-wide font-medium text-[#121212] group-hover:text-[#963838] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#757575]">
                          {item.material} • {item.shade}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-[13px] font-medium text-[#121212]">
                        €{item.price}
                      </span>
                      <ArrowRight size={14} className="text-[#963838] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
