import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../animations/variants';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const gridKey = products.map(p => p.id).join('-');
  const gridRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (gridRef.current) {
      // Scroll to the top of the grid minus a little offset for the header
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section ref={gridRef} className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          key={gridKey}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-lg text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Prev
            </button>
            
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors font-medium ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'border border-gray-200 text-black hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-200 rounded-lg text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

