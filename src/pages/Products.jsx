import Navbar from '../components/common/Navbar';
import ProductHero from '../components/products/ProductHero';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import CTA from '../components/common/CTA';
import Footer from '../components/common/Footer';

import { PRODUCTS_DATA } from '../data/products';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProductHero />
      <ProductFilters />
      <ProductGrid products={PRODUCTS_DATA} />
      <CTA />
      <Footer />
    </div>
  );
}
