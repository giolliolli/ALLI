import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Bespoke from './pages/Bespoke';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

function MainContent() {
  const { currentPage } = useShop();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-[#963838]/15 selection:text-[#963838]">
      <Navbar />

      <main className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'shop' && <Shop />}
        {currentPage === 'bespoke' && <Bespoke />}
        {currentPage === 'product-detail' && <ProductDetail />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer />
      <CartDrawer />
      <SearchModal />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
