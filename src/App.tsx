import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Update title based on current page
  useEffect(() => {
    const pageTitles: { [key: string]: string } = {
      '/': 'Home | Hi-Tech UPVC Windows and Doors',
      '/about': 'About Us | Hi-Tech UPVC Windows and Doors',
      '/products': 'Products | Hi-Tech UPVC Windows and Doors',
      '/gallery': 'Gallery | Hi-Tech UPVC Windows and Doors',
      '/contact': 'Contact Us | Hi-Tech UPVC Windows and Doors',
      '/get-quote': 'Get a Quote | Hi-Tech UPVC Windows and Doors',
    };

    const productRegex = /^\/products\/(.+)$/;
    const match = location.pathname.match(productRegex);

    if (match) {
      document.title = `${match[1].replace(/-/g, ' ')} | Hi-Tech UPVC Windows and Doors`;
    } else {
      document.title = pageTitles[location.pathname] || 'Hi-Tech UPVC Windows and Doors';
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;