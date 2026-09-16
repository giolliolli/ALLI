import React, { useState } from 'react';
import { Mail, Clock, CheckCircle, Sparkles, RefreshCw, X } from 'lucide-react';

const YARN_PALETTE = [
  { id: 'lacca-red', name: 'Lacca Brick', hex: '#963838' },
  { id: 'chalk-ecru', name: 'Chalk Ecru', hex: '#F7F4EE', border: true },
  { id: 'butter-gold', name: 'Butter Gold', hex: '#E5BF56' },
  { id: 'olive-sage', name: 'Olive Sage', hex: '#5E7453' },
  { id: 'forest-moss', name: 'Forest Moss', hex: '#2A4D39' },
  { id: 'riviera-ink', name: 'Riviera Ink', hex: '#161616' },
  { id: 'ocean-wave', name: 'Ocean Wave', hex: '#3B6E8C' },
  { id: 'terracotta', name: 'Terracotta', hex: '#C86438' },
  { id: 'powder-blush', name: 'Powder Blush', hex: '#EFCED1' },
  { id: 'lavender-mist', name: 'Lavender Mist', hex: '#9B829C' },
  { id: 'sunset-orange', name: 'Sunset Orange', hex: '#E25B2D' },
  { id: 'espresso-earth', name: 'Espresso Earth', hex: '#4A3728' }
];

const PRESET_COMBOS = [
  { name: 'Riviera Sunset', colors: ['#963838', '#E5BF56', '#EFCED1'] },
  { name: 'Brera Atelier', colors: ['#963838', '#F7F4EE', '#161616'] },
  { name: 'Pacific Coast', colors: ['#3B6E8C', '#F7F4EE', '#5E7453'] },
  { name: 'Mediterranean Moss', colors: ['#5E7453', '#C86438', '#F7F4EE'] }
];

export default function Contact() {
  const [forWhom, setForWhom] = useState('');
  const [description, setDescription] = useState('');
  const [customLetters, setCustomLetters] = useState('');
  const [email, setEmail] = useState('');
  const [selectedColors, setSelectedColors] = useState([
    '#963838', '#E5BF56', '#F7F4EE'
  ]);
  const [submitted, setSubmitted] = useState(false);

  const toggleColor = (hex) => {
    if (selectedColors.includes(hex)) {
      if (selectedColors.length > 1) {
        setSelectedColors(selectedColors.filter(c => c !== hex));
      }
    } else {
      if (selectedColors.length < 6) {
        setSelectedColors([...selectedColors, hex]);
      }
    }
  };

  const removeColorAt = (index) => {
    if (selectedColors.length > 1) {
      setSelectedColors(selectedColors.filter((_, i) => i !== index));
    }
  };

  const applyPreset = (presetColors) => {
    setSelectedColors([...presetColors]);
  };

  const handleRandomize = () => {
    const shuffled = [...YARN_PALETTE].sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 2) + 3; // 3 or 4 colors
    setSelectedColors(shuffled.slice(0, count).map(c => c.hex));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-black min-h-screen py-10 lg:py-16">
      <div className="max-w-[760px] mx-auto px-6">
        {submitted ? (
          <div className="border border-[#e8e6e1] p-10 sm:p-14 text-center space-y-6 animate-fade-in bg-[#f7f5f2]">
            <div className="w-12 h-12 bg-[#963838] text-white flex items-center justify-center mx-auto">
              <CheckCircle size={24} />
            </div>
            <h2 className="text-2xl font-normal text-black">
              Grazie for your bespoke request.
            </h2>
            <p className="text-[15px] text-[#757575] leading-relaxed max-w-md mx-auto">
              Your inquiry has reached Alice Marchi. Each piece is created by hand especially for you. I will review your preferences and get in touch at <strong>{email}</strong> within 48 hours.
            </p>

            {/* Selected summary */}
            <div className="pt-4 border-t border-[#e8e6e1] max-w-sm mx-auto space-y-2 text-left text-[13px]">
              <p><strong>Commission for:</strong> {forWhom || 'Bespoke piece'}</p>
              {customLetters && <p><strong>Mother-of-pearl letters:</strong> {customLetters.toUpperCase()}</p>}
              <div className="flex items-center gap-2 pt-1">
                <strong>Palette:</strong>
                <div className="flex gap-1">
                  {selectedColors.map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full inline-block border border-black/10"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline cursor-pointer"
              >
                Send Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. "For:" Header field (Exact match to "Esempio per Contact") */}
            <div className="text-center space-y-2">
              <label className="text-[17px] sm:text-[19px] font-normal block tracking-wide">
                For:
              </label>
              <input
                type="text"
                value={forWhom}
                onChange={(e) => setForWhom(e.target.value)}
                placeholder="Name or recipient (e.g. For Clara / Autumn Holiday)"
                className="w-full text-center text-[16px] py-1 text-black placeholder:text-[#9CA3AF] focus:outline-none"
              />
            </div>

            {/* Fine separator line styled in ALLI theme */}
            <div className="w-full border-b border-[#963838]/40" />

            {/* 2. Prompt questions (Milne Watson / Esempio text) */}
            <div className="text-center space-y-2 max-w-xl mx-auto pt-2">
              <p className="text-[16px] sm:text-[17px] font-normal leading-relaxed text-black">
                Let us know a little about what you would like us to create for you.
              </p>
              <p className="text-[14px] sm:text-[15px] text-[#757575] leading-relaxed">
                Any favourite colours, descriptive words or what you would like your unique piece to symbolise.
              </p>
            </div>

            {/* 3. Main Textarea with fine border */}
            <div className="w-full">
              <textarea
                required
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your desired hat, silhouette, brim wave, head size or mood..."
                className="w-full p-4 border border-[#963838] bg-transparent text-[15px] focus:outline-none focus:border-[#121212] transition-colors resize-none"
              />
            </div>

            {/* 4. FUN INTERACTIVE COLOR SELECTION UX (Inspired by Esempio per Contact dots) */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="text-[12px] uppercase tracking-[0.14em] text-[#757575] font-medium">
                  Yarn Palette — Tap colors to compose your custom stripe rhythm:
                </span>
                <button
                  type="button"
                  onClick={handleRandomize}
                  className="flex items-center space-x-1 text-[11px] uppercase tracking-wider text-[#963838] hover:underline cursor-pointer"
                >
                  <RefreshCw size={11} />
                  <span>Surprise Mix</span>
                </button>
              </div>

              {/* Color dots row (like in the photo) */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 py-3">
                {YARN_PALETTE.map((color) => {
                  const isSelected = selectedColors.includes(color.hex);
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => toggleColor(color.hex)}
                      className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-transform duration-200 cursor-pointer focus:outline-none ${
                        isSelected ? 'scale-115 ring-2 ring-offset-2 ring-[#963838]' : 'hover:scale-105'
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        border: color.border ? '1px solid #d2cecb' : 'none',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                      title={`${color.name} ${isSelected ? '(Selected)' : ''}`}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow-xs">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* LIVE TACTILE CROCHET STRAND PREVIEW (Fun UX!) */}
              <div className="bg-[#f7f5f2] border border-[#e8e6e1] p-4 text-center space-y-2">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#757575]">
                  <span>Live Crochet Stripe Preview ({selectedColors.length} shades)</span>
                  <span className="text-[10px] text-[#963838]">Click stripe to remove</span>
                </div>

                {/* Simulated visual crochet yarn strand */}
                <div className="h-10 w-full flex overflow-hidden border border-[#d2cecb] shadow-inner">
                  {selectedColors.map((hex, index) => {
                    const colorObj = YARN_PALETTE.find(c => c.hex === hex) || { name: 'Custom' };
                    return (
                      <div
                        key={index}
                        onClick={() => removeColorAt(index)}
                        style={{ backgroundColor: hex }}
                        className="flex-1 h-full relative group cursor-pointer transition-all duration-300 flex items-center justify-center border-r border-black/10 last:border-r-0"
                        title={`Click to remove ${colorObj.name}`}
                      >
                        {/* Wavy knit texture simulation */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px]" />
                        <span className="text-[9px] uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-xs font-semibold">
                          ✕
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Quick preset palette chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <span className="text-[10px] uppercase text-[#757575] tracking-wider">Atelier presets:</span>
                  {PRESET_COMBOS.map((combo) => (
                    <button
                      key={combo.name}
                      type="button"
                      onClick={() => applyPreset(combo.colors)}
                      className="text-[11px] text-[#121212] bg-white border border-[#e8e6e1] px-2.5 py-0.5 hover:border-[#963838] transition-colors cursor-pointer"
                    >
                      {combo.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. MOTHER-OF-PEARL LETTERS / MONOGRAM (Exact wording from Esempio per Contact) */}
            <div className="space-y-3 pt-2">
              <div className="text-center space-y-1">
                <p className="text-[15px] sm:text-[16px] font-normal leading-relaxed text-black">
                  I can also incorporate letters or words within your piece, please specify which mother-of-pearl letters you would like us to include.
                </p>
              </div>

              <input
                type="text"
                maxLength={20}
                value={customLetters}
                onChange={(e) => setCustomLetters(e.target.value)}
                placeholder="e.g. ALLI or initials (A.M.)"
                className="w-full p-3.5 border border-[#963838] bg-transparent text-center text-[16px] tracking-[0.2em] uppercase focus:outline-none focus:border-[#121212] transition-colors"
              />

              {/* Mother-of-pearl visual preview beads */}
              {customLetters.trim() && (
                <div className="flex items-center justify-center gap-2 pt-2 animate-fade-in">
                  <span className="text-[11px] uppercase tracking-wider text-[#757575] mr-2">
                    Mother-of-Pearl Charms:
                  </span>
                  {customLetters.replace(/\s+/g, '').toUpperCase().split('').map((char, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-white via-[#f4eee6] to-[#e8ded1] border border-[#d2cecb] shadow-xs flex items-center justify-center text-[12px] font-semibold text-[#121212]"
                    >
                      {char}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Artisan note (Exact text from photo) */}
            <div className="text-center pt-2">
              <p className="text-[15px] sm:text-[16px] italic text-[#121212]">
                Each piece is created by hand especially for you, no two ALLI pieces are the same.
              </p>
            </div>

            {/* 7. "Your email:" (Exact label from photo) */}
            <div className="space-y-2 text-center pt-2">
              <label className="text-[16px] sm:text-[17px] font-normal block">
                Your email:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full max-w-md mx-auto p-3 border border-[#963838] bg-transparent text-center text-[15px] focus:outline-none focus:border-[#121212] transition-colors block"
              />
            </div>

            {/* Fine separator line */}
            <div className="w-full border-b border-[#963838]/40 pt-4" />

            {/* 8. Delivery timeline notice (Exact phrasing from Esempio per Contact) */}
            <div className="text-center max-w-lg mx-auto">
              <p className="text-[13px] sm:text-[14px] text-[#757575] leading-relaxed">
                Each order takes up to 2 weeks to create once payment has been received, I will be in touch in 48 hours with order confirmation and payment.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="btn-outline cursor-pointer"
              >
                Send Request
              </button>
            </div>
          </form>
        )}

        {/* Studio Provenance & Direct Channels */}
        <div className="mt-20 pt-10 border-t border-[#e8e6e1] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left text-[13px]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#963838] font-medium block mb-1">
              Direct Mail
            </span>
            <a href="mailto:ciao@alli-studio.com" className="text-black hover:underline">
              ciao@alli-studio.com
            </a>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#963838] font-medium block mb-1">
              Instagram
            </span>
            <a
              href="https://www.instagram.com/allimrch/"
              target="_blank"
              rel="noreferrer"
              className="text-black hover:underline"
            >
              @allimrch
            </a>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#963838] font-medium block mb-1">
              Atelier Residencies
            </span>
            <span className="text-[#757575]">
              Brera, Milan • Bondi, Sydney
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
