import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import ProductHero from '../components/products/ProductHero';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import CTA from '../components/common/CTA';
import Footer from '../components/common/Footer';

import { PRODUCTS_DATA } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'chamber';
  
  const [activeCategory, setActiveCategory] = useState(urlCategory);

  // Sync state when URL changes
  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  // Update URL when state changes via tabs
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams({ category: cat });
  };

  const filteredProducts = PRODUCTS_DATA.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProductHero activeCategory={activeCategory} />
      <ProductFilters activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />
      <ProductGrid products={filteredProducts} />
      <CTA />
      <Footer />
    </div>
  );
}
