import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('alli_cart');
      return saved ? JSON.parse(saved) : [
        // default 1 item for great initial demonstration
        {
          id: 'riviera-scallop-ecru',
          quantity: 1,
          shade: 'Raw Ecru & Sand',
          product: PRODUCTS[0]
        }
      ];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('alli_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Navigate helpers
  const navigateTo = (page, productId = null) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart helpers
  const addToCart = (productId, quantity = 1, shade) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === productId && (!shade || item.shade === shade)
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: productId,
            quantity,
            shade: shade || product.shade,
            product
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (index, delta) => {
    setCart((prevCart) => {
      const item = prevCart[index];
      if (!item) return prevCart;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        return prevCart.filter((_, i) => i !== index);
      }
      const updated = [...prevCart];
      updated[index] = { ...item, quantity: newQty };
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedProductId,
        setSelectedProductId,
        navigateTo,
        openProduct,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isCartOpen,
        setIsCartOpen,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        cartSubtotal,
        products: PRODUCTS
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
