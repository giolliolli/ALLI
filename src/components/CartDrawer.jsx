import React from 'react';
import { useShop } from '../context/ShopContext';
import { Plus, Minus, X } from 'lucide-react';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartSubtotal, navigateTo, openProduct } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Milne Watson Overlay: bg-zinc-400 bg-opacity-75 */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-150"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel: max-w-md (448px), bg-white */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-[448px] bg-white flex flex-col shadow-2xl animate-fade-in py-8 sm:py-10">
          {/* Header: "Your Cart" (text-2xl) left, "Close" (gray-400 hover:gray-500) right */}
          <div className="px-6 md:px-8 pb-6 border-b border-[#e8e6e1] flex items-baseline justify-between">
            <h2 className="text-2xl font-normal text-black">
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-[15px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 divide-y divide-[#e8e6e1]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <p className="text-[16px] text-black mb-6 font-normal">
                  Your cart is currently empty.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('shop');
                  }}
                  className="btn-outline cursor-pointer"
                >
                  Shop Collection
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="py-5 flex space-x-4">
                  {/* Thumbnail 4:5 */}
                  <img
                    src={item.product.images.primary}
                    alt={item.product.name}
                    className="w-20 h-24 aspect-image object-cover cursor-pointer flex-shrink-0 bg-[#f7f5f2]"
                    onClick={() => {
                      setIsCartOpen(false);
                      openProduct(item.product.id);
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            openProduct(item.product.id);
                          }}
                          className="text-[15px] font-normal text-black hover:text-[#963838] cursor-pointer leading-snug"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-[#9CA3AF] hover:text-[#6B7280] p-0.5 ml-2 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-[13px] text-[#757575] mt-1">
                        {item.shade}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#e8e6e1] bg-white">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="px-2 py-1 text-black hover:bg-[#f7f5f2] transition-colors"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-3 text-[13px] font-normal text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="px-2 py-1 text-black hover:bg-[#f7f5f2] transition-colors"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span className="text-[15px] text-[#963838] font-medium">
                        €{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Bar */}
          {cart.length > 0 && (
            <div className="px-6 md:px-8 pt-6 border-t border-[#e8e6e1] bg-white space-y-4">
              <div className="flex justify-between text-[16px] text-black">
                <span>Subtotal</span>
                <span className="font-medium text-[#963838]">€{cartSubtotal}</span>
              </div>

              <button
                onClick={() => {
                  alert(`Thank you! Order of €${cartSubtotal} received. We will handcraft your piece with slow care.`);
                }}
                className="btn-outline w-full cursor-pointer justify-center"
              >
                Checkout • €{cartSubtotal}
              </button>

              <p className="text-[12px] text-[#757575] text-center">
                Complimentary worldwide shipping included on orders above €150.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
