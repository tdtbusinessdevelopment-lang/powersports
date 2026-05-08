import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeUp, fadeLeft, fadeRight, scaleIn } from '../../animations/variants';
import { PRODUCTS_DATA } from '../../data/products';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';

const PRODUCTS = [
  {
    id: 1,
    imgSrc: c2,
    category: 'CATEGORY',
    name: 'Lorem Ipsum',
    sub: 'Lorem Ipsum',
  },
  {
    id: 2,
    imgSrc: c3,
    category: 'CATEGORY',
    name: 'Lorem Ipsum',
    sub: 'Lorem Ipsum',
  },
];

export default function Categories() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter products that have images (pods, tents, etc.)
  const slideImages = PRODUCTS_DATA.map(p => p.image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <section
      id="categories"
      className="w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 42%, #b91c1c 100%)',
      }}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[600px] md:min-h-[676px]">

        {/* ── LEFT PANEL — big product image + Products label + VIEW ALL ── */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative lg:w-[42%] flex-shrink-0 overflow-hidden min-h-[400px] md:min-h-[546px]"
        >
          {/* Background images slideshow */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={slideImages[currentImageIndex]}
              alt="Products"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Bottom text */}
          <div className="absolute bottom-0 right-0 p-6 md:p-10 flex flex-col items-end text-right z-10">
            <h2
              className="text-white font-black text-4xl md:text-6xl leading-none mb-4 md:mb-6"
              style={{ fontStyle: 'italic' }}
            >
              Products
            </h2>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-red-600 text-white font-bold uppercase tracking-widest px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm hover:bg-red-700 transition-colors"
              >
                View All
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* ── RIGHT PANEL — description + product cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-between px-4 sm:px-8 lg:px-10 py-10"
        >
          {/* Description text */}
          <motion.p
            variants={fadeUp}
            className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </motion.p>

          {/* Product cards row */}
          <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.id}
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-white w-[280px] sm:w-[350px] md:w-[468px]"
              >
                {/* Image + BUY NOW overlay */}
                <div className="relative h-[200px] sm:h-[300px] md:h-[375px] overflow-hidden">
                  <img
                    src={p.imgSrc}
                    alt={p.category}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Dark overlay with BUY NOW */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-black text-xl md:text-2xl uppercase tracking-wider drop-shadow-lg">
                      BUY NOW
                    </span>
                  </div>
                </div>

                {/* Card info */}
                <div className="bg-white px-4 py-4 md:py-6 text-center">
                  <p className="text-red-600 font-black text-sm md:text-base uppercase tracking-wider mb-1">
                    {p.category}
                  </p>
                  <p className="text-gray-900 font-bold text-xs md:text-sm uppercase tracking-tight">{p.name}</p>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">{p.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

